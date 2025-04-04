<template>
  <swiper :modules="modules" :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }" :speed="1500"
    :autoplay="{ delay: 3000, disableOnInteraction: false }" loop :navigation="{ enabled: true }" :breakpoints="{
      0: {
        navigation: false,
        pagination: { clickable: false }
      },
      768: {
        navigation: true,
        pagination: { clickable: true }
      }
    }" class="mySwiper">
    <swiper-slide v-for="(slide, index) in sliderData" :key="index">
      <div class="slider__item">
        <div class="slider__item-img">
          <img :src="slide.background_image" :alt="slide.altText">
        </div>
        <div class="slider__item-content">
          <h3 class="slider__item-title">
            {{ slide.title }}
          </h3>
          <Button :title="$t('slider.btn')" width="168px" :aria-label="slide.ariaLabel"
            @click="goToDetails(slide.tour)" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSliderStore } from '~/stores/slider';
import { computed, onMounted } from 'vue';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from '~/ui/Button.vue';

const router = useRouter();
const sliderStore = useSliderStore();

onMounted(() => {
  sliderStore.loadSlider();
});

const goToDetails = (tour) => {
  router.push(`/discounttour/${tour}`);
};

const sliderData = computed(() => sliderStore.slider);
const modules = [
  Navigation,
  Pagination,
  Autoplay,
];

useHead({
  title: 'Слайдер туров - Awesome Travel / Tour Slider - Awesome Travel',
  meta: [
    {
      name: 'description',
      content: 'Откройте для себя наши туры с помощью нашего слайдера. / Discover our tours with our slider.'
    },
    {
      name: 'keywords',
      content: 'слайдер, туры, путешествия, slider, tours, travel'
    },
    {
      property: 'og:title',
      content: 'Слайдер туров - Awesome Travel / Tour Slider - Awesome Travel'
    },
    {
      property: 'og:description',
      content: 'Откройте для себя наши туры с помощью нашего слайдера. / Discover our tours with our slider.'
    },
    {
      property: 'og:image',
      content: 'https://awesomekyrgyztravel.com/ru'
    },
    {
      property: 'og:url',
      content: 'https://awesomekyrgyztravel.com/ru'
    }
  ]
});
</script>

<style scoped>
.slider__item {
  display: flex;
  justify-content: center;
  position: relative;
}

.slider__item-img {
  width: 1000px;
  height: 410px;
}

.slider__item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.slider__item-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 150px;
  padding-top: 90px;
  width: 100%;
  height: 100%;
}

.slider__item-title {
  width: 433px;
  font-size: 45px;
  font-weight: 900;
  color: #2D2D2D;
  font-family: var(--font-montserrat);
}

.swiper {
  margin-top: 28px;
  margin-bottom: 87px;
  padding: 0;
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .slider__item-content {
    padding-left: 80px;
    padding-top: 60px;
  }

  .slider__item-title {
    width: 433px;
    font-size: 35px;
  }
}

@media (min-width: 770px) and (max-width: 1024px) {
  .slider__item-img {
    width: 800px;
    height: 410px;
  }
}

@media (min-width: 427px) and (max-width: 769px) {
  .slider__item-img {
    width: 600px;
    height: 370px;
  }

  .slider__item-content {
    padding-left: 110px;
    padding-top: 160px;
  }

  .slider__item-title {
    width: 300px;
    font-size: 20px;
  }
}

@media (min-width: 377px) and (max-width: 426px) {
  .slider__item-img {
    width: 400px;
    height: 300px;
  }

  .swiper {
    margin-top: 0px;
    margin-bottom: 30px;
  }

  .slider__item-content {
    padding-left: 10px;
    padding-top: 150px;
  }

  .slider__item-title {
    width: 300px;
    font-size: 20px;
  }
}

@media (min-width: 321px) and (max-width: 376px) {
  .slider__item-img {
    width: 400px;
    height: 300px;
  }

  .swiper {
    margin-top: 0px;
    margin-bottom: 30px;
  }

  .slider__item-content {
    padding-left: 10px;
    padding-top: 150px;
  }

  .slider__item-title {
    width: 300px;
    font-size: 20px;
  }
}

@media (min-width: 0px) and (max-width: 321px) {
  .slider__item-img {
    width: 400px;
    height: 300px;
  }

  .swiper {
    margin-top: 0px;
    margin-bottom: 30px;
  }

  .slider__item-content {
    padding-left: 10px;
    padding-top: 150px;
  }

  .slider__item-title {
    width: 300px;
    font-size: 20px;
  }
}
</style>
