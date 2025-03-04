<template>
  <section class="container">
    <article class="catalog__path">
      <NuxtLink to="/">Главная &nbsp;/</NuxtLink><span>Каталог тура</span>
    </article>
    <article class="catalog__title">
      <h1>Каталог тура</h1>
    </article>
    <article class="catalog__content">
      <div v-if="loading" aria-live="polite">Загрузка данных, пожалуйста, подождите...</div>
      <div v-if="error" role="alert">{{ error }}</div>
      <div v-if="!loading && !error">
        <div class="catalog__content-item" @click="goToDetails(tour.id)">
          <img :src="tour.background_image" alt="Изображение тура" />
          <strong class="catalog__content-item-strong">{{ tour.title }}</strong>
          <div class="catalog__content-item-span-div">
            <strong class="catalog__content-item-span-strong">Категория:&nbsp; {{ tour.tour_type }}</strong>
          </div>
          <div class="catalog__content-item-span-div">
            <strong class="catalog__content-item-span-strong">Продолжительность:&nbsp;</strong>
            <span class="catalog__content-item-span">{{ tour.duration }}&nbsp;</span>
            <span class="catalog__content-item-span">дней</span>
          </div>
          <div class="catalog__content-item-span-div">
            <strong class="catalog__content-item-span-strong">Дата:&nbsp;</strong>
            <span class="catalog__content-item-span">{{ formatDate(tour.date_of_start) }}</span>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { useDetailsCatalogToursStore } from '~/stores/catalogTours';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute(); // Получаем маршрут
    const router = useRouter(); // Получаем роутер
    const detailsCatalogToursStore = useDetailsCatalogToursStore();

    const formatDate = (dateString) => {
      if (!dateString) return 'Не указана';

      const date = new Date(dateString);
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];

      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
    };

    watch(
      () => route.params.id, // Следим за id из маршрута
      (id) => {
        console.log('ID из маршрута:', id); // Логируем id
        if (id) detailsCatalogToursStore.loadDetailsCatalogTours(id);
      },
      { immediate: true }
    );

    const goToDetails = (id) => {
      router.push(`/tour/${id}`);
    };

    return {
      tour: computed(() => detailsCatalogToursStore.tours[0] || {}),
      loading: computed(() => detailsCatalogToursStore.loading),
      error: computed(() => detailsCatalogToursStore.error),
      goToDetails,
      formatDate,
    };
  },
};
</script>

<style>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.catalog__content-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 290px;
  flex-grow: 1;
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
}

.catalog__content-item-span-strong {
  font-weight: 400;
  font-family: var(--font-open-sans);
  font-size: 14px;
}

.line {
  width: 290px;
  height: 1px;
  margin-top: 15px;
  background-color: #2D2D2D;
}
</style>
