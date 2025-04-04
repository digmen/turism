<template>
    <section class="container">
        <article class="catalog__path">
            <NuxtLink :to="localPath('/')">{{ $t('deteilsRout.main') }} &nbsp;/</NuxtLink>
            <span style="cursor: pointer;" @click="goBack">{{ $t('deteilsRout.catalog') }} &nbsp;/&nbsp;</span>
            <span v-if="tour.tour_type">{{ tour.tour_type }}</span>
        </article>

        <article class="tour-content">
            <div v-if="loading">{{ $t('deteilsRout.loading') }}</div>
            <div v-else-if="error">{{ $t('deteilsRout.error') }}: {{ error }}</div>
            <div v-else-if="tour.title" class="tour-content">
                <div class="tour-content__top">
                    <img :src="tour.background_image" :alt="tour.title">
                    <div class="tour-content__top-title">
                        <h1>{{ tour.title }}</h1>
                        <p>{{ tour.subtitle }}</p>
                        <p class="tour-content__top-price">{{ tour.price }}$</p>
                        <Button class="tour_btn" :title="$t('deteilsRout.booking')"
                            :aria-label="$t('deteilsRout.bookingButton')" @click="goContact" />
                    </div>
                    <Button class="tour_btn-mobile" :title="$t('deteilsRout.booking')"
                        :aria-label="$t('deteilsRout.bookingButton')" @click="goContact" />
                </div>
                <div class="tour-details">
                    <p><strong>{{ $t('deteilsRout.category') }}:</strong> {{ tour.tour_type }}</p>
                    <p><strong>{{ $t('deteilsRout.duration') }}:</strong> {{ tour.duration }}
                        {{ $t('deteilsRout.day') }}</p>
                    <p><strong>{{ $t('deteilsRout.difficulty') }}:</strong> {{ tour.difficulty }}</p>
                    <p><strong>{{ $t('deteilsRout.season') }}:</strong> {{ tour.season }}</p>
                    <p><strong>{{ $t('deteilsRout.groupSize') }}:</strong> {{ tour.group_size }}</p>
                    <p><strong>{{ $t('deteilsRout.recommendations') }}:</strong> {{ tour.recommendations }}</p>
                </div>
            </div>
            <article class="tour-route">
                <div v-for="routeStartEnd in routeStartEnd" :key="`tour-${routeStartEnd.id}`">
                    <div class="tour-route__start">
                        <div class="geotag_container">
                            <img src="@/assets/images/geotag.svg" alt="start">
                        </div>
                        <div class="tour-route__start-title">
                            <h3>{{ routeStartEnd.start_title }}</h3>
                            <p>{{ routeStartEnd.start_description }}</p>
                        </div>
                    </div>
                    <div class="tour-route__center">
                        <div v-for="(route, index) in route" :key="`route-${index}`" class="tour-route__item">
                            <div class="geotag_container">
                                <img src="@/assets/images/geotag.svg" alt="start">
                            </div>
                            <div class="tour-route__item-container">
                                <div class="tour-route__item-title">
                                    <h3> {{ index + 1 }}. {{ route.title }}</h3>
                                    <ul>
                                        <li>
                                            {{ route.description }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="tour-route__img-container">
                                    <img class="tour-route__img" :src="route.picture" :alt="route.title">
                                </div>
                            </div>
                        </div>
                        <div class="tour-route__end">
                            <img src="@/assets/images/finish.svg" alt="finish">
                            <div class="tour-route__end-title">
                                <h3>{{ routeStartEnd.end_title }}</h3>
                                <p>{{ routeStartEnd.end_description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </article>
    </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTourStore } from '@/stores/tour';
import { computed, watch } from 'vue';
import Button from '@/ui/Button.vue';
import { useRouteStore, useRouteStartEndStore } from '~/stores/route';
const localPath = useLocalePath();

const routes = useRoute();
const router = useRouter();
const tourStore = useTourStore();
const routeStore = useRouteStore();
const routeStartEndStore = useRouteStartEndStore();

watch(
    () => routes.params.id,
    (id) => {
        if (id) {
            tourStore.loadTour(id);
            routeStore.loadRoute(id);
            routeStartEndStore.loadRouteStartEnd(id);
        }
    },
    { immediate: true }
);

const goBack = () => {
    router.back();
};

const goContact = () => {
    router.push(localPath('/contacts'));
};

const tour = computed(() => tourStore.tour || {});
const loading = computed(() => tourStore.loading);
const error = computed(() => tourStore.error);
const routeStartEnd = computed(() => routeStartEndStore.routeStartEnd || {});
const route = computed(() => routeStore.route || {});
useHead({
    title: computed(() => tour.value.title ? `${tour.value.title} - Tour Details` : 'Tour Details'),
    meta: [
        {
            name: 'description',
            content: computed(() => tour.value.subtitle || 'Tour details and information')
        },
        {
            name: 'og:title',
            content: computed(() => tour.value.title || 'Tour Details')
        },
        {
            name: 'og:description',
            content: computed(() => tour.value.subtitle || 'Tour details and information')
        },
        {
            name: 'og:image',
            content: computed(() => tour.value.background_image || '')
        },
        {
            name: 'og:title',
            content: computed(() => tour.value.title ? `${tour.value.title} - Детали тура` : 'Детали тура')
        },
        {
            name: 'og:description',
            content: computed(() => tour.value.subtitle || 'Детали тура и информация')
        },
        {
            name: 'og:image',
            content: computed(() => tour.value.background_image || '')
        }
    ]
});
</script>

<style scoped>
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

.tour-content {
    margin-top: 41px;
}

.tour-content__top {
    position: relative;

    img {
        width: 100%;
        max-height: 506px;
        border-radius: 10px;
    }

    .tour-content__top-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 24px 55px;

        .tour-content__top-price {
            font-size: 82px;
            font-weight: 900;
            font-family: var(--font-montserrat);
            color: #990711;
            padding-top: 20px;
            padding-bottom: 40px;
        }

        h1 {
            font-size: 45px;
            font-weight: 900;
            font-family: var(--font-montserrat);
            color: #2D2D2D;
            width: 591px;
        }

        p {
            font-size: 30px;
            font-weight: 400;
            font-family: var(--font-open-sans);
            color: #2D2D2D;
            width: 431px;
        }
    }
}

.tour-details {
    /* background-color: #f5f5f5; */
    /* border-radius: 10px; */
    padding-inline: 50px;
    margin-top: 38px;

    p {
        margin-bottom: 10px;
        font-weight: 500;
        font-family: var(--font-open-sans);
        font-size: 20px;
    }
}

.tour-route {
    display: flex;
    margin-top: 40px;
}


.tour-route__item-container {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding-left: 25px;
    margin-bottom: 80px;

    .tour-route__item-title {
        display: flex;
        flex-direction: column;
        gap: 10px;

        ul {
            padding-left: 50px;

            li {
                width: 570px;
            }
        }

    }
}

.geotag_container {}

.tour-route__center {
    display: flex;
    flex-direction: column;
    /* margin-top: 30px; */
}

.tour-route__item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: start;
    position: relative;
}

.tour-route__item::before {
    content: '';
    width: 10px;
    height: 90%;
    position: absolute;
    left: 8px;
    top: 30px;
    background-image: url('@/assets/images/dotted.svg');
    background-position: left top;
    background-repeat: repeat-y;
    background-size: 5px 20px;
}

.tour-route__start::before {
    content: '';
    width: 10px;
    height: 80%;
    position: absolute;
    left: 8px;
    top: 30px;
    background-image: url('@/assets/images/dotted.svg');
    background-position: left top;
    background-repeat: repeat-y;
    background-size: 5px 20px;
}

.tour-route__start {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: start;
    position: relative;

    .tour-route__start-title {
        padding-left: 10px;
        margin-bottom: 30px;

        h3 {
            font-size: 20px;
            font-family: var(--font-open-sans);
            font-weight: 700;
            color: #2D2D2D;
        }

        p {
            font-size: 17px;
            font-family: var(--font-open-sans);
            font-weight: 400;
            color: #2D2D2D;
            text-align: justify;
        }
    }
}

.tour-route__end {
    /* margin-top: 113px; */
    display: flex;
    flex-direction: row;
    /* gap: 10px; */
    align-items: start;

    img {
        transform: translateX(-18px);
    }

    .tour-route__end-title {
        /* padding-left: 10px; */

        h3 {
            font-size: 20px;
            font-family: var(--font-open-sans);
            font-weight: 700;
            color: #2D2D2D;
        }

        p {
            font-size: 17px;
            font-family: var(--font-open-sans);
            font-weight: 400;
            color: #2D2D2D;
            text-align: justify;
        }
    }
}

.tour-route__img-container {
    width: 458px;
    height: 232px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 40px 0px 40px;
    }
}

.tour_btn-mobile {
    display: none;
}

@media (min-width: 769px) and (max-width: 1024px) {
    .tour-route__item-container {
        flex-direction: column;
        gap: 20px;
    }

    .tour-route__img-container {
        padding-left: 50px;
    }

    .tour-route__item::before {
        height: 93%;
    }

    .tour-content__top {
        position: relative;

        img {
            width: 100%;
            max-height: 506px;
            border-radius: 10px;
        }

        .tour-content__top-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 24px 55px;

            .tour-content__top-price {
                font-size: 82px;
            }

            h1 {
                font-size: 35px;
            }

            p {
                font-size: 30px;
            }
        }
    }
}

@media (min-width: 427px) and (max-width: 768px) {
    .tour-route__item-container {
        flex-direction: column;
        gap: 20px;
    }

    .tour-content {
        margin-top: 10px;
    }

    .catalog__path {
        margin: 0;
    }

    .tour-route__img-container {
        padding-left: 50px;
    }

    .tour-route__item::before {
        height: 94%;
    }

    .tour-content__top {
        position: relative;

        img {
            width: 100%;
            max-height: 506px;
            border-radius: 10px;
        }

        .tour-content__top-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 52px 55px;


            .tour-content__top-price {
                font-size: 40px;
            }

            h1 {
                font-size: 20px;
                width: 59%;
            }

            p {
                font-size: 30px;
            }
        }
    }

    .tour-details {
        padding-inline: 13px;
        margin-top: 38px;

        p {
            font-size: 17px;
        }
    }

    .tour-route__start {

        .tour-route__start-title {
            padding-left: 10px;
            margin-bottom: 30px;
            padding-right: 10px;

            h3 {
                font-size: 20px;
            }

            p {
                font-size: 17px;
            }
        }
    }

    .tour-route {
        display: flex;
        margin-top: 40px;
        margin-inline: 30px;
    }

    .tour-route__start::before {
        height: 89%;
    }
}

@media (min-width: 377px) and (max-width: 426px) {
    .tour-route__item-container {
        flex-direction: column;
        gap: 20px;
        padding: 0;
    }

    .tour-content {
        margin-top: 10px;
    }

    .catalog__path,
    .geotag_container,
    .tour-route__item::before,
    .tour-route__start::before {
        display: none;
    }

    .tour-route__img-container {
        padding-left: 20px;
        width: 400px;
        height: 220px;
    }

    .tour-content__top {
        position: relative;

        img {
            width: 400px;
            height: 290px;
            border-radius: 10px;
        }

        .tour-content__top-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 111px 29px;


            .tour-content__top-price {
                font-size: 40px;
                width: 100%;
            }

            h1 {
                font-size: 18px;
                width: 59%;
            }

            p {
                font-size: 30px;
            }
        }
    }

    .tour-details {
        padding-inline: 0px;
        margin-top: 38px;

        p {
            font-size: 14px;
        }
    }

    .tour-route__start {

        .tour-route__start-title {
            padding-left: 0px;
            margin-bottom: 30px;
            padding-right: 0px;

            h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route {
        display: flex;
        margin-top: 40px;
        margin-inline: 0px;
    }

    .tour-route__end {
        img {
            display: none;
        }

        .tour-route__end-title {

            h3 {
                font-size: 18px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route__item-title {
        h3 {
            font-size: 18px;
        }
    }

    .tour-route__item-container {
        padding-left: 25px;
        margin-bottom: 20px;
        padding: 0;


        .tour-route__item-title {
            display: flex;
            flex-direction: column;
            gap: 10px;

            ul {
                padding-left: 20px;

                li {
                    width: 380px;
                }
            }

        }
    }

    .tour_btn {
        display: none;
    }

    .tour_btn-mobile {
        width: 100%;
        display: block;
    }
}

@media (min-width: 321px) and (max-width: 376px) {
    .tour-route__item-container {
        flex-direction: column;
        gap: 20px;
        padding: 0;
    }

    .tour-content {
        margin-top: 10px;
    }

    .catalog__path,
    .geotag_container,
    .tour-route__item::before,
    .tour-route__start::before {
        display: none;
    }

    .tour-route__img-container {
        padding-left: 20px;
        width: 100%;
        height: 220px;
    }

    .tour-content__top {
        position: relative;

        img {
            width: 100%;
            height: 240px;
            border-radius: 10px;
        }

        .tour-content__top-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 100px 29px;


            .tour-content__top-price {
                font-size: 30px;
                width: 100%;
            }

            h1 {
                font-size: 18px;
                width: 59%;
            }

            p {
                font-size: 30px;
            }
        }
    }

    .tour-details {
        padding-inline: 0px;
        margin-top: 38px;

        p {
            font-size: 14px;
        }
    }

    .tour-route__start {

        .tour-route__start-title {
            padding-left: 0px;
            margin-bottom: 30px;
            padding-right: 0px;

            h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route {
        display: flex;
        margin-top: 40px;
        margin-inline: 0px;
    }

    .tour-route__end {
        img {
            display: none;
        }

        .tour-route__end-title {

            h3 {
                font-size: 18px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route__item-title {
        h3 {
            font-size: 18px;
        }
    }

    .tour-route__item-container {
        padding-left: 25px;
        margin-bottom: 20px;
        padding: 0;


        .tour-route__item-title {
            display: flex;
            flex-direction: column;
            gap: 10px;

            ul {
                padding-left: 20px;

                li {
                    width: 320px;
                }
            }

        }
    }

    .tour_btn {
        display: none;
    }

    .tour_btn-mobile {
        width: 100%;
        display: block;
    }
}

@media (min-width: 0px) and (max-width: 321px) {
    .tour-route__item-container {
        flex-direction: column;
        gap: 20px;
        padding: 0;
    }

    .tour-content {
        margin-top: 10px;
    }

    .catalog__path,
    .geotag_container,
    .tour-route__item::before,
    .tour-route__start::before {
        display: none;
    }

    .tour-route__img-container {
        padding-left: 0px;
        width: 100%;
        height: 220px;
    }

    .tour-content__top {
        position: relative;

        img {
            width: 100%;
            height: 200px;
            border-radius: 10px;
        }

        .tour-content__top-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 70px 29px;


            .tour-content__top-price {
                font-size: 30px;
                width: 100%;
                padding: 0;
            }

            h1 {
                font-size: 15px;
                width: 60%;
            }

            p {
                width: 0;
                font-size: 20px;
                padding-top: 10px;
                padding-bottom: 0px;
            }
        }
    }

    .tour-details {
        padding-inline: 0px;
        margin-top: 38px;

        p {
            font-size: 14px;
        }
    }

    .tour-route__start {

        .tour-route__start-title {
            padding-left: 0px;
            margin-bottom: 30px;
            padding-right: 0px;

            h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route {
        display: flex;
        margin-top: 40px;
        margin-inline: 0px;
    }

    .tour-route__end {
        img {
            display: none;
        }

        .tour-route__end-title {

            h3 {
                font-size: 18px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .tour-route__item-title {
        h3 {
            font-size: 18px;
        }
    }

    .tour-route__item-container {
        padding-left: 0px;
        margin-bottom: 20px;
        padding: 0;


        .tour-route__item-title {
            display: flex;
            flex-direction: column;
            gap: 10px;

            ul {
                list-style: none;
                padding: 0;

                li {
                    width: 300px;
                }
            }

        }
    }

    .tour_btn {
        display: none;
    }

    .tour_btn-mobile {
        width: 100%;
        display: block;
    }
}
</style>
