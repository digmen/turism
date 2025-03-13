<template>
    <div class="filter">
        <h2 class="filter__title">
            Найдите тур, подходящий именно Вам!
        </h2>
    </div>
    <div class="filter__container">
        <form class="filter__form" aria-label="Форма фильтрации туров" @submit.prevent="submitFilter">
            <CustomSelect :options="country.map(item => ({ name: item.name, id: item.id }))"
                :default="'Выбрать направление '" class="select" @input="handleInputCountry" :width="300"
                aria-label="Выбор направления" />
            <CustomSelect :options="months.map(month => ({ name: month }))" :default="'Выбрать месяц '" class="select"
                :width="230" aria-label="Выбор месяца" />
            <CustomSelect :options="tours.map(item => ({ title: item.title, id: item.id }))" :default="'Выбрать тур '"
                class="select" @input="handleInputTour" :width="300" aria-label="Выбор тура" />
            <Button title="Найти тур" aria-label="Кнопка поиска тура" size="15px" />
        </form>
    </div>
</template>

<script>
import CustomSelect from "./CustomSelect.vue";
import { useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import Button from '@/ui/Button.vue';
import { useCountryStore } from '@/stores/country';
import { useToursStore } from "~/stores/catalogTours";

export default {
    components: {
        Button,
        CustomSelect
    },
    setup() {
        const router = useRouter();
        const countryStore = useCountryStore();
        const toursStore = useToursStore();
        const selectedCountry = ref(null);
        const selectedTour = ref(null);

        const months = ref([
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ]);

        onMounted(() => {
            countryStore.loadCountry();
        });

        const handleInputCountry = (selectedOption) => {
            selectedCountry.value = selectedOption.id;
        };

        const handleInputTour = (selectedOption) => {
            selectedTour.value = selectedOption.id;
        };

        const submitFilter = () => {
            if (selectedCountry.value && selectedTour.value) {
                router.push(`/catalogfilter?country=${selectedCountry.value}&tour=${selectedTour.value}`);
            }
        };

        return {
            country: computed(() => countryStore.country.map(item => ({ id: item.id, name: item.name })) || []),
            loading: computed(() => countryStore.loading),
            error: computed(() => countryStore.error),
            tours: computed(() => toursStore.tours.map(item => ({ id: item.id, title: item.title })) || []),
            loadingTours: computed(() => toursStore.loading),
            errorTours: computed(() => toursStore.error),
            months,
            handleInputCountry,
            handleInputTour,
            submitFilter,
        };
    },
};
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
}

.filter__form {
    background-color: #CCCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    gap: 50px;
}

@media (max-width: 1025px) {
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
}
</style>
