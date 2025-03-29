<template>
  <section class="container" id="catalog">
    <article class="catalog-tour">
      <h1 class="catalog-tour__title">{{ $t('catalogTour.title') }}</h1>
      <article class="catalog-tour__content">
        <div v-if="loading" aria-live="polite" class="catalog-tour__loading">{{ $t('catalogTour.loading') }}</div>
        <div v-if="error" role="alert">{{ error }}</div>
        <div v-if="tours.length === 0 && !loading && !error" role="alert">{{ $t('catalogTour.noTours') }}</div>
        <div class="catalog-tour__item-container" v-for="(tour, index) in tours" :key="tour.id"
          :class="getCardClass(index)" @click="goToDetails(tour.id)">
          <img class="catalog-tour__item-image" :src="tour.background_image"
            :alt="`${$t('catalogTour.tourImageAlt')}: ${tour.title}`" loading="lazy" />
          <div class="catalog-tour__item-info">
            <h2>{{ tour.title }}</h2>
            <img class="catalog-tour__item-arrow" src="/assets/images/arrowtopright.svg"
              :alt="$t('catalogTour.arrowAlt')" />
          </div>
        </div>
      </article>
    </article>
  </section>
</template>

<script setup>
import { useToursStore } from '@/stores/catalogTours';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const toursStore = useToursStore();
const router = useRouter();
const localPath = useLocalePath();

onMounted(() => {
  toursStore.loadTours();
});

const goToDetails = (id) => {
  router.push(localPath(`/catalog/${id}`));
};

const getCardClass = (index) => {
  const pattern = ['card_small', 'card_medium', 'card_small', 'card_medium', 'card_medium', 'card_large'];
  return `catalog-tour__item ${pattern[index % 6]}`;
};

const tours = computed(() => toursStore.tours);
const loading = computed(() => toursStore.loading);
const error = computed(() => toursStore.error);

useHead({
  title: 'Catalog Tour - Каталог Туров',
  meta: [
    { name: 'description', content: 'Explore our catalog of tours. Изучите наш каталог туров.' },
    { name: 'keywords', content: 'tours, travel, catalog, туры, путешествия, каталог' },
  ],
});
</script>

<style scoped>
.catalog-tour {
  margin-top: 113px;
}

.catalog-tour__title {
  font-size: 25px;
  font-weight: bold;
  color: #2d2d2d;
  text-align: center;
  font-family: var(--font-open-sans);
}

:root {
  --card_width: 250px;
  --row_increment: 10px;
  --card_border_radius: 16px;
}

.catalog-tour__content {
  width: 1300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--card_width));
  grid-auto-rows: var(--row_increment);
  justify-content: center;
}

.catalog-tour__item-container {
  cursor: pointer;
}

.catalog-tour__item-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.catalog-tour__item {
  padding: 0;
  margin: 15px 10px;
  border-radius: var(--card_border_radius);
  overflow: hidden;
  position: relative;
  border-radius: 0px 40px 0px 40px;
}

.catalog-tour__item:hover {
  .catalog-tour__item-arrow {
    animation: arrow-animation 0.6s linear;
  }
}

@keyframes arrow-animation {
  0% {
    transform: rotate(0deg);
    scale: 1;
  }

  50% {
    transform: rotate(20deg);
    scale: 1.1;
  }

  75% {
    transform: rotate(-10deg);
    scale: 1.1;
  }

  100% {
    transform: rotate(0deg);
    scale: 1;
  }
}

.catalog-tour__item-info {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background-color: #FFFFFF;
  padding: 6px 15px;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  h2 {
    font-size: 17px;
    font-weight: 400;
    color: #2d2d2d;
    text-align: start;
    max-width: 210px;
  }
}

.card_small {
  grid-row-end: span var(--card_small);
}

.card_medium {
  grid-row-end: span var(--card_medium);
}

.card_large {
  grid-row-end: span var(--card_large);
}

.catalog-tour__loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 20px;
  font-weight: 600;
  color: #2d2d2d;
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .catalog-tour__content {
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--card_width));
    grid-auto-rows: var(--row_increment);
    justify-content: center;
  }
}

@media (min-width: 427px) and (max-width: 769px) {
  .catalog-tour__content {
    width: 700px;
  }
}

@media (min-width: 377px) and (max-width: 426px) {
  .catalog-tour__content {
    width: 400px;
  }
}

@media (min-width: 321px) and (max-width: 376px) {
  .catalog-tour__content {
    width: 300px;
  }

  .catalog-tour__item-info {
    h2 {
      font-size: 14px;
    }
  }
}

@media (min-width: 0px) and (max-width: 321px) {
  .catalog-tour__content {
    width: 300px;
  }

  .catalog-tour__item-info {
    h2 {
      font-size: 14px;
    }
  }
}
</style>
