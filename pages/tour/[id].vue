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
                        <Button :title="$t('deteilsRout.booking')" :aria-label="$t('deteilsRout.bookingButton')"
                            @click="goContact" />
                    </div>
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
                <!-- <div class="line_container"></div> -->
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
                    </div>
                    <div class="tour-route__end">
                        <img src="@/assets/images/finish.svg" alt="finish">
                        <div class="tour-route__end-title">
                            <h3>{{ routeStartEnd.end_title }}</h3>
                            <p>{{ routeStartEnd.end_description }}</p>
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

.line_container {
    background-image: url('@/assets/images/line.svg');
    width: 100px;
    background-repeat: repeat-y;
    background-position: bottom;
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
    width: 0px;
    height: 90%;
    /* background-color: #2D2D2D; */
    /* border-radius: 50%; */
    position: absolute;
    /* left: 5.5px; */
    left: 5px;
    top: 30px;
    /* border-left: dotted 8px red; */
    background-image: url('@/assets/images/dotted.svg');
    width: 100px;
    background-repeat: repeat-y;
    background-position: bottom;
    /* background-image: radial-gradient(ellipse, #000000 5px, transparent 5px); */
    /* background-position: left top; */
    background-repeat: repeat-y;
    background-size: 10px 17px;
}

.tour-route__start {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: start;

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
    gap: 10px;
    align-items: start;

    .tour-route__end-title {
        padding-left: 10px;

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
</style>
