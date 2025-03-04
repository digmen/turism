<template>
    <section class="container" id="reviews">
        <article class="reviews">
            <h1 class="reviews__title">Отзывы наших довольных гостей</h1>
            <swiper
                :modules="modules"
                :slides-per-view="3"
                :space-between="10"
                :pagination="pagination"
                :speed="1000"
                :autoplay="autoplay"
                loop
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <span>
                           Имя Фамилия 
                        </span>
                        <p>"Спасибо турагентству за потрясающую организацию нашего путешествия по Кыргызстану! Мы посетили озеро Сон-Куль, ущелье Джеты-Огуз и великолепные горы Тянь-Шаня. Все было на высшем уровне: комфортный транспорт, отличные гиды и удивительная природа. Особенно запомн..."</p>
                        <NuxtLink to="/reviews" class="reviews__item-link" aria-label="Читать полный отзыв">
                            Читать дальше
                        </NuxtLink>
                        <div class="reviews__item-rating">
                            <img src="/assets/images/star.svg" alt="Рейтинг 1 звезда">
                            <img src="/assets/images/star.svg" alt="Рейтинг 2 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 3 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 4 звезды">
                            <img src="/assets/images/star.svg" alt="Рейтинг 5 звезд">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </article>
    </section>
</template>

<script>
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style>
.reviews {
    margin-top: 80px;
}

.reviews__title {
    font-size: 25px;
    font-weight: 700;
    color: #2D2D2D;
    text-align: center;
    font-family: var(--font-open-sans);
}

.reviews__item {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    width: 388px;
    padding: 25px;
    border: 4px solid #990711;
    border-radius: 45px;
    gap: 10px;

    span{
        font-size: 18px;
        font-weight: 700;
        color: #2D2D2D;
        font-family: var(--font-open-sans);
    }

    p{
        font-size: 15px;
        font-weight: 400;
        color: #2D2D2D;
        font-family: var(--font-open-sans);
    }
}

.reviews__item-link{
    font-size: 15px;
    text-decoration: none;
    font-weight: 400;
    color: #990711;
    font-family: var(--font-open-sans);
}

.slider__item-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 150px;
    padding-top: 90px;
}

.swiper{
    padding-block: 80px;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, 25px);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
}

.swiper-pagination-bullet {
  width: 17px;
  height: 17px;
  background-color: #D9D9D9;
}
.swiper-pagination-bullet-active {
  background: #FF9595;
}


</style>
