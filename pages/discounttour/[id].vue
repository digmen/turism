<template>
    <section class="container">
        <article class="catalog__path">
            <NuxtLink :to="localPath('/')">{{ $t('deteilsRout.main') }} &nbsp;/</NuxtLink>
            <span style="cursor: pointer;" @click="goBack">{{ $t('deteilsRout.catalog') }} &nbsp;/&nbsp;</span>
            <span v-if="tour.tour_type">{{ tour.tour_type }}</span>
        </article>

        <article class="tour-content">
            <div v-if="loading">{{ $t('deteilsRout.loading') }}</div>
            <div v-else-if="error">{{ error }}</div>
            <div v-else-if="tour.title" class="tour-content">
                <div class="tour-content__top">
                    <img :src="tour.background_image" :alt="tour.title">
                    <div class="tour-content__top-title">
                        <h1>{{ tour.title }}</h1>
                        <p>{{ tour.subtitle }}</p>
                        <div class="tour-content__top-price-div">
                            <span class="tour-content__top-price">{{ tour.discount_price }}$</span>
                            <span class="tour-content__top-price-old">{{ tour.original_price }}$</span>
                        </div>
                        <Button :title="$t('deteilsRout.booking')" :aria-label="$t('deteilsRout.bookingButton')"
                            @click="goContact" />
                    </div>
                </div>
                <div class="tour-details">
                    <p><strong>{{ $t('deteilsRout.category') }}:</strong> {{ tour.tour_type }}</p>
                    <p><strong>{{ $t('deteilsRout.duration') }}:</strong> {{ tour.duration }} {{ $t('deteilsRout.day')
                    }}</p>
                    <p><strong>{{ $t('deteilsRout.difficulty') }}:</strong> {{ tour.difficulty }}</p>
                    <p><strong>{{ $t('deteilsRout.season') }}:</strong> {{ tour.season }}</p>
                    <p><strong>{{ $t('deteilsRout.groupSize') }}:</strong> {{ tour.group_size }}</p>
                    <p><strong>{{ $t('deteilsRout.recommendations') }}:</strong> {{ tour.recommendations }}</p>
                </div>
            </div>
            <article class="tour-route">
                <div v-for="discountRouteStartEnd in discountRouteStartEnd" :key="`tour-${discountRouteStartEnd.id}`">
                    <div class="tour-route__start">
                        <div class="geotag_container">
                            <img src="@/assets/images/geotag.svg" alt="start">
                        </div>
                        <div class="tour-route__start-title">
                            <h3>{{ discountRouteStartEnd.start_title }}</h3>
                            <p>{{ discountRouteStartEnd.start_description }}</p>
                        </div>
                    </div>
                    <div class="tour-route__center">
                        <div v-for="(discountRoute, index) in discountRoute" :key="`route-${index}`"
                            class="tour-route__item">
                            <div class="geotag_container">
                                <img src="@/assets/images/geotag.svg" alt="start">
                            </div>
                            <div class="tour-route__item-container">
                                <div class="tour-route__item-title">
                                    <h3> {{ index + 1 }}. {{ discountRoute.title }}</h3>
                                    <ul>
                                        <li>
                                            {{ discountRoute.description }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="tour-route__img-container">
                                    <img class="tour-route__img" :src="discountRoute.picture"
                                        :alt="discountRoute.title">
                                </div>
                            </div>
                        </div>
                        <div class="tour-route__end">
                            <img src="@/assets/images/finish.svg" alt="finish">
                            <div class="tour-route__end-title">
                                <h3>{{ discountRouteStartEnd.end_title }}</h3>
                                <p>{{ discountRouteStartEnd.end_description }}</p>
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
import { computed, watch } from 'vue';
import Button from '@/ui/Button.vue';
import { useDiscountTourStore } from '~/stores/discountTour';
import { useDiscountRouteStartEndStore, useDiscountRouteStore } from '~/stores/discountroute';

const localPath = useLocalePath();

const routes = useRoute();
const router = useRouter();
const discountTourStore = useDiscountTourStore();
const discountRouteStore = useDiscountRouteStore();
const discountRouteStartEndStore = useDiscountRouteStartEndStore();

watch(
    () => routes.params.id,
    (id) => {
        if (id) {
            discountTourStore.loadTour(id);
            discountRouteStore.loadDiscountRoute(id);
            discountRouteStartEndStore.loadDiscountRouteStartEnd(id);
        }
    },
    { immediate: true }
);

const tour = computed(() => discountTourStore.discountTour || {});
const loading = computed(() => discountTourStore.loading);
const error = computed(() => discountTourStore.error);
const discountRoute = computed(() => discountRouteStore.discountRoute || {});
const discountRouteStartEnd = computed(() => discountRouteStartEndStore.discountRouteStartEnd || {});

const goBack = () => {
    router.push(localPath('/hottours'));
};

const goContact = () => {
    router.push(localPath('/contacts'));
};

useHead({
    title: computed(() => tour.value.title ? `${tour.value.title} - Скидочный тур` : 'Загрузка...'),
    meta: [
        {
            name: 'description',
            content: computed(() => tour.value.subtitle || 'Загрузка...')
        },
        {
            name: 'og:title',
            content: computed(() => tour.value.title || 'Загрузка...')
        },
        {
            name: 'og:description',
            content: computed(() => tour.value.subtitle || 'Загрузка...')
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

        .tour-content__top-price-div {
            display: flex;
            flex-direction: row;
            gap: 15px;
        }

        .tour-content__top-price {
            font-size: 82px;
            font-weight: 900;
            font-family: var(--font-montserrat);
            color: #990711;
            padding-top: 20px;
            padding-bottom: 40px;
        }

        .tour-content__top-price-old {
            display: flex;
            align-items: flex-end;
            font-size: 40px;
            font-weight: 400;
            font-family: var(--font-montserrat);
            color: #2D2D2D;
            padding: 0px 15px 40px 10px;
            position: relative;
        }

        .tour-content__top-price-old::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            border-bottom: 5px solid #990711;
            transform: rotate(344deg);
            transform-origin: left bottom;
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
</style>
