<template>
  <swiper :modules="modules" :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }" navigation
    :speed="1500" :autoplay="{ delay: 2000, disableOnInteraction: false }" loop class="mySwiper">
    <swiper-slide v-for="(slide, index) in sliderData" :key="index">
      <div class="slider__item">
        <div class="slider__item-img">
          <img :src="slide.background_image" :alt="slide.altText">
        </div>
        <div class="slider__item-content">
          <h3 class="slider__item-title">
            {{ slide.title }}
          </h3>
          <Button title="Подробнее" width="168px" :aria-label="slide.ariaLabel" @click="goToDetails(slide.id)" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { useRouter } from 'vue-router';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSliderStore } from '~/stores/slider';
import { computed, onMounted } from 'vue';

// Импорты стилей
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from '~/ui/Button.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Button,
  },
  setup() {
    const router = useRouter();
    const sliderStore = useSliderStore();

    // Загружаем данные при монтировании компонента
    onMounted(() => {
      sliderStore.loadSlider();
    });

    const goToDetails = (id) => {
      router.push(`/discounttour/${id}`);
    };

    return {
      goToDetails,
      sliderData: computed(() => sliderStore.slider),
      loading: computed(() => sliderStore.loading),
      error: computed(() => sliderStore.error),
      modules: [
        Navigation,
        Pagination,
        Autoplay,
      ],
    };
  },
};
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
</style>
