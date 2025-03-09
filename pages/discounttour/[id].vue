<template>
    <section class="container">
        <article class="catalog__path">
            <NuxtLink to="/">Главная &nbsp;/</NuxtLink>
            <span style="cursor: pointer;" @click="goBack">Каталог тура &nbsp;/&nbsp;</span>
            <span v-if="tour.tour_type">{{ tour.tour_type }}</span>
        </article>

        <article class="tour-content">
            <div v-if="loading">Загрузка...</div>
            <div v-else-if="error">Ошибка: {{ error }}</div>
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
                        <Button title="Забронировать" />
                    </div>
                </div>
                <div class="tour-details">
                    <p><strong>Категория:</strong> {{ tour.tour_type }}</p>
                    <p><strong>Продолжительность:</strong> {{ tour.duration }} дней</p>
                    <p><strong>Уровень сложности:</strong> {{ tour.difficulty }}</p>
                    <p><strong>Лучший сезон:</strong> {{ tour.season }}</p>
                    <p><strong>Размер группы:</strong> {{ tour.group_size }}</p>
                    <p><strong>Рекомендации:</strong> {{ tour.recommendations }}</p>
                </div>
            </div>
            <article class="tour-route">
                <h2>Маршрут</h2>
                <div v-for="item in route" :key="item.id">
                    <p>{{ item.name }}</p>
                </div>
            </article>
        </article>
    </section>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, watch } from 'vue';
import Button from '@/ui/Button.vue';
import { useDiscountTourStore } from '~/stores/discountTour';
export default {
    components: {
        Button
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const discountTourStore = useDiscountTourStore();

        watch(
            () => route.params.id,
            (id) => {
                if (id) {
                    discountTourStore.loadTour(id);
                }
            },
            { immediate: true }
        );

        const goToDetails = (id) => {
            router.push(`/tour/${id}`);
        };

        const goBack = () => {
            router.back();
        };

        return {
            tour: computed(() => discountTourStore.discountTour || {}),
            loading: computed(() => discountTourStore.loading),
            error: computed(() => discountTourStore.error),
            goToDetails,
            goBack,
        };
    },
};
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
            gap: 10px;
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
            font-size: 45px;
            font-weight: 900;
            font-family: var(--font-montserrat);
            color: #2D2D2D;
            padding-top: 20px;
            padding-bottom: 40px;
            text-decoration: line-through;
            text-decoration-color: #990711;
            text-decoration-thickness: 3px;
            text-decoration-skip-ink: none;
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
</style>
