<template>
    <div class="filter">
        <h2 class="filter__title">{{ $t('filter.title') }}</h2>
    </div>
    <div class="filter__container">
        <form class="filter__form" :aria-label="$t('filter.form')" @submit.prevent="submitFilter">
            <CustomSelect :options="country.map(item => ({ name: item.name, id: item.id }))"
                :default="$t('filter.selectCountry')" class="select" @input="handleInputCountry"
                :aria-label="$t('filter.selectCountry')" :key="'country-' + selectedCountryKey" />
            <CustomSelect :options="months.map(month => ({ name: month }))" :default="$t('filter.selectMonth')"
                class="select" :aria-label="$t('filter.selectMonth')" />
            <CustomSelect :options="tours.map(item => ({ title: item.title, id: item.id }))"
                :default="$t('filter.selectTour')" class="select" @input="handleInputTour"
                :aria-label="$t('filter.selectTour')" :key="'tour-' + selectedTourKey" />
            <Button class="filter_btn" :title="$t('filter.findTour')" :aria-label="$t('filter.findTourButton')"
                size="15px" />
        </form>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import CustomSelect from "./CustomSelect.vue";
import Button from '@/ui/Button.vue';
import { useCountryStore } from '@/stores/country';
import { useToursStore } from "~/stores/catalogTours";

const { locale } = useI18n();
const router = useRouter();
const countryStore = useCountryStore();
const toursStore = useToursStore();
const selectedCountry = ref(null);
const selectedTour = ref(null);
const selectedCountryKey = ref(0);
const selectedTourKey = ref(0);
const localPath = useLocalePath();

onMounted(() => {
    const storedLang = localStorage.getItem('locale');
    if (storedLang) {
        locale.value = storedLang;
    }
    countryStore.loadCountry();
});

const months = computed(() => locale.value === 'ru'
    ? ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
);

const handleInputCountry = (selectedOption) => {
    console.log('Selected Country:', selectedOption);
    if (selectedOption && selectedOption.id) {
        selectedCountry.value = selectedOption.id;
        selectedCountryKey.value++; // Обновляем ключ для предотвращения сброса
    }
};

const handleInputTour = (selectedOption) => {
    console.log('Selected Tour:', selectedOption);
    if (selectedOption && selectedOption.id) {
        selectedTour.value = selectedOption.id;
        selectedTourKey.value++; // Обновляем ключ для предотвращения сброса
    }
};

const submitFilter = () => {
    if (selectedCountry.value && selectedTour.value) {
        router.push(localPath(`/catalogfilter?country=${selectedCountry.value}&tour=${selectedTour.value}`));
    }
};

const country = computed(() => countryStore.country.map(item => ({ id: item.id, name: item.name })) || []);
const tours = computed(() => toursStore.tours.map(item => ({ id: item.id, title: item.title })) || []);
</script>



<style scoped>
.filter__container {
    max-width: 1239px;
    margin: 0 auto;
}

.filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 27px;
    margin-bottom: 57px;
}

.filter__title {
    font-family: var(--font-montserrat);
    font-weight: 700;
    font-size: 25px;
    color: #2D2D2D;
    text-align: center;
}

.filter__form {
    background-color: #CCCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    gap: 50px;
}

.select:nth-child(1) {
    width: 300px;
}

.select:nth-child(2) {
    width: 230px;
}

.select:nth-child(3) {
    width: 300px;
}

@media (min-width: 1024px) and (max-width: 1439px) {
    .filter__container {
        max-width: 100%;
    }

    .filter__title {
        font-size: 20px;
    }

    .filter__form {
        height: 80px;
        gap: 20px;
    }

    .select:nth-child(1) {
        width: 240px;
    }

    .select:nth-child(2) {
        width: 190px;
    }

    .select:nth-child(3) {
        width: 260px;
    }
}

@media (min-width: 427px) and (max-width: 768px) {
    .filter__form {
        gap: 10px;
    }

    .btn {
        white-space: nowrap;
        padding: 2px 23px;
    }
}

@media (min-width: 377px) and (max-width: 426px) {
    .filter__form {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
        gap: 30px;
        padding-inline: 20px;
    }

    .filter {
        margin-bottom: 20px;
    }

    .filter__title {
        font-size: 18px;
    }

    .select:nth-child(1) {
        width: 300px;
    }

    .select:nth-child(2) {
        width: 300px;
    }

    .select:nth-child(3) {
        width: 350px;
    }

    .filter_btn {
        width: 100%;
    }
}

@media (min-width: 321px) and (max-width: 376px) {
    .filter__form {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
        gap: 30px;
        padding-inline: 20px;
    }

    .filter {
        margin-bottom: 20px;
    }

    .filter__title {
        font-size: 18px;
    }

    .select:nth-child(1) {
        width: 300px;
    }

    .select:nth-child(2) {
        width: 300px;
    }

    .select:nth-child(3) {
        width: 100%;
    }

    .filter_btn {
        width: 100%;
    }
}

@media (min-width: 0px) and (max-width: 321px) {
    .filter__form {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
        gap: 30px;
        padding-inline: 20px;
    }

    .filter {
        margin-bottom: 20px;
    }

    .filter__title {
        font-size: 18px;
    }

    .select:nth-child(1) {
        width: 200px;
    }

    .select:nth-child(2) {
        width: 200px;
    }

    .select:nth-child(3) {
        width: 100%;
    }

    .filter_btn {
        width: 100%;
    }
}
</style>