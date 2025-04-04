<template>
    <section class="container">
        <article class="catalog__title">
            <h1>{{ $t('catalog.searchTours') }} {{ countryName }} {{ tourName }}</h1>
        </article>
        <article class="catalog__content">
            <div v-if="loading" class="loading">{{ $t('catalog.loading') }}</div>
            <div v-else-if="error" class="error">{{ error }}</div>
            <div v-else-if="!discountTours.length" class="no-data">{{ $t('catalog.noTours') }}</div>
            <div v-else class="catalog__content-item" v-for="tour in discountTours" :key="tour.id"
                @click="goToDetails(tour.id)">
                <img :src="tour.image" alt="Туры" />
                <strong class="catalog__content-item-strong">{{ tour.title }}</strong>
                <div class="catalog__content-item-span-div">
                    <strong class="catalog__content-item-span-strong">{{ $t('catalog.category') }}&nbsp;:
                        <span class="catalog__content-item-span">{{ tour.tour_type }}</span>
                    </strong>
                </div>
                <div class="catalog__content-item-span-div">
                    <strong class="catalog__content-item-span-strong">{{ $t('catalog.duration') }}&nbsp;:
                        <span class="catalog__content-item-span">{{ tour.duration }}</span>
                    </strong>
                </div>
                <div class="catalog__content-item-span-div">
                    <strong class="catalog__content-item-span-strong">{{ $t('catalog.date') }}&nbsp;:
                        <span class="catalog__content-item-span">{{ formatDate(tour.date_of_start) }}</span>
                    </strong>
                </div>
                <div class="line"></div>
            </div>
        </article>
    </section>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watchEffect, onMounted } from 'vue';
import { useCountryStore } from '@/stores/country';
import { useToursStore } from '@/stores/catalogTours';
import { useFilterStore } from '@/stores/filter';

const route = useRoute();
const router = useRouter();
const countryStore = useCountryStore();
const toursStore = useToursStore();
const filterStore = useFilterStore();

const countryId = ref(route.query.country);
const tourId = ref(route.query.tour);
const countryName = ref('');
const tourName = ref('');
const loading = computed(() => filterStore.loading);
const error = computed(() => filterStore.error);
const discountTours = computed(() => filterStore.filter);
const localPath = useLocalePath();

onMounted(() => {
    if (countryId.value && tourId.value) {
        filterStore.loadFilter(countryId.value, tourId.value);
    }
});

watchEffect(async () => {
    if (!countryId.value || !tourId.value) return;

    if (!countryStore.country.length) await countryStore.loadCountry();
    if (!toursStore.tours.length) await toursStore.loadTours();

    const selectedCountry = countryStore.country.find(c => c.id == countryId.value);
    const selectedTour = toursStore.tours.find(t => t.id == tourId.value);

    countryName.value = selectedCountry ? selectedCountry.name : 'Не найдено';
    tourName.value = selectedTour ? selectedTour.title : 'Не найдено';

    useHead({
        title: `${countryName.value} ${tourName.value} - Tours`,
        meta: [
            { name: 'description', content: `Find the best tours in ${countryName.value} including ${tourName.value}.` },
            { name: 'description', content: `Найдите лучшие туры в ${countryName.value}, включая ${tourName.value}.` }
        ]
    });
});

const formatDate = (dateString) => {
    if (!dateString) return 'Не указана';
    const date = new Date(dateString);
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
};

const goToDetails = (id) => {
    router.push(localPath(`/tour/${id}`));
};
</script>

<style scoped>
.catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 36px;

    h1 {
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-open-sans);
    }
}

.catalog__path {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 12px;

    a {
        font-size: 15px;
        font-weight: 300;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
        text-decoration: none;
    }

    span {
        font-size: 15px;
        font-weight: 400;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
    }
}

.catalog__title {
    margin-top: 23px;
    margin-bottom: 30px;

    h1 {
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-open-sans);
    }
}

.catalog__content {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
}

.catalog__content-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 290px;
    justify-content: space-between;
    cursor: pointer;
}

.catalog__content-item img {
    width: 290px;
    height: 235px;
    border-radius: 20px;
}

.catalog__content-item-span-div {
    display: flex;
    flex-direction: row;
}

.catalog__content-item-strong {
    font-size: 16px;
    font-weight: 800;
    font-family: var(--font-open-sans);
    color: #2D2D2D;
}

.catalog__content-item-span {
    font-size: 14px;
    font-weight: 300;
    font-family: var(--font-open-sans);
    color: #2D2D2D;
}

.catalog__content-item-span-strong {
    font-weight: 400;
    font-family: var(--font-open-sans);
    font-size: 14px;
    color: black;
}

.line {
    width: 290px;
    height: 1px;
    margin-top: 15px;
    background-color: #2D2D2D;
}
</style>
