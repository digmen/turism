<template>
  <section class="container">
    <article class="catalog__path">
      <NuxtLink :to="localPath('/')">{{ $t('header.mainPage') }} &nbsp;/</NuxtLink>
      <span style="cursor: pointer;" @click="goBack">{{ $t('header.catalog') }} &nbsp;/&nbsp;</span>
      <span v-if="tours.length > 0">{{ tours[0].tour_type }}</span>
    </article>
    <article class="catalog__title">
      <h1>{{ $t('catalogTour.title') }}</h1>
    </article>
    <article class="catalog__content">
      <div v-if="loading" class="loading">{{ $t('catalogTour.loading') }}</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="tours.length === 0" class="no-data">{{ $t('catalogTour.noTours') }}</div>
      <div v-else v-for="tour in tours" :key="tour.id" class="catalog__content-item" @click="goToDetails(tour.id)">
        <img :src="tour.image" alt="Сотрудник" />
        <strong class="catalog__content-item-strong">{{ tour.title }}</strong>
        <div class="catalog__content-item-span-div">
          <strong class="catalog__content-item-span-strong">{{ $t('catalogTour.category') }}&nbsp;:&nbsp;
            <span class="catalog__content-item-span">{{ tour.tour_type }}</span>
          </strong>
        </div>
        <div class="catalog__content-item-span-div">
          <strong class="catalog__content-item-span-strong">{{ $t('catalogTour.duration') }}&nbsp;:&nbsp;
            <span class="catalog__content-item-span">{{ tour.duration }}</span>
          </strong>
        </div>
        <div class="catalog__content-item-span-div">
          <strong class="catalog__content-item-span-strong">{{ $t('catalogTour.date') }}&nbsp;:&nbsp;
            <span class="catalog__content-item-span">{{ formatDate(tour.date_of_start) }}</span>
          </strong>
        </div>
        <div class="line"></div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useDetailsCatalogToursStore } from '~/stores/catalogTours';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const detailsCatalogToursStore = useDetailsCatalogToursStore();
const localPath = useLocalePath();

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
  () => route.params.id,
  (id) => {
    if (id) detailsCatalogToursStore.loadDetailsCatalogTours(id);
  },
  { immediate: true }
);

watch(
  locale,
  () => {
    if (route.params.id) {
      detailsCatalogToursStore.loadDetailsCatalogTours(route.params.id);
    }
  }
);

const goToDetails = (id) => {
  router.push(localPath(`/tour/${id}`));
};

const goBack = () => {
  router.back();
};

const tours = computed(() => {
  return detailsCatalogToursStore.tours;
});
const loading = computed(() => {
  return detailsCatalogToursStore.loading;
});
const error = computed(() => {
  return detailsCatalogToursStore.error;
});

useHead({
  title: 'Каталог туров | Tours Catalog',
  meta: [
    {
      name: 'description',
      content: 'Просмотрите наш каталог туров и найдите идеальный тур для вас. Explore our tours catalog and find the perfect tour for you.'
    },
    {
      name: 'keywords',
      content: 'туры, каталог туров, путешествия, tours, tours catalog, travel'
    },
    {
      property: 'og:url',
      content: 'https://awesomekyrgyztravel.com/'
    },
  ]
});
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

@media (min-width: 769px) and (max-width: 1024px) {
  .catalog__content {
    grid-template-columns: repeat(3, 1fr);
  }

}

@media (min-width: 427px) and (max-width: 768px) {
  .catalog__content {
    grid-template-columns: repeat(2, 1fr);
  }

  .catalog__path {
    margin-top: 0;
  }

  .catalog__title {

    h1 {
      font-size: 20px;
    }
  }
}

@media (min-width: 377px) and (max-width: 426px) {
  .catalog__content {
    grid-template-columns: repeat(1, 1fr);
  }

  .catalog__path {
    display: none;
  }

  .catalog__title {
    margin-top: 0px;
    margin-bottom: 10px;

    h1 {
      font-size: 20px;
    }
  }
}

@media (min-width: 321px) and (max-width: 376px) {
  .catalog__content {
    grid-template-columns: repeat(1, 1fr);
  }

  .catalog__path {
    display: none;
  }

  .catalog__title {
    margin-top: 0px;
    margin-bottom: 10px;

    h1 {
      font-size: 18px;
    }
  }
}

@media (min-width: 0px) and (max-width: 321px) {
  .catalog__content {
    grid-template-columns: repeat(1, 1fr);
  }

  .catalog__path {
    display: none;
  }

  .catalog__title {
    margin-top: 0px;
    margin-bottom: 10px;

    h1 {
      font-size: 18px;
    }
  }
}
</style>
