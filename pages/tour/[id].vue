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
                        <p class="tour-content__top-price">{{ tour.price }}$</p>
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
            <div v-else>Тур не найден</div>
        </article>
    </section>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useTourStore } from '@/stores/tour';
import { computed, watch } from 'vue';
import Button from '@/ui/Button.vue';
export default {
    components: {
        Button
    },
    setup() {
        const route = useRoute(); // Получаем маршрут
        const router = useRouter(); // Получаем роутер
        const tourStore = useTourStore();

        watch(
            () => route.params.id, // Следим за id из маршрута
            (id) => {
                console.log('ID из маршрута:', id); // Логируем id
                if (id) tourStore.loadTour(id);
            },
            { immediate: true }
        );

        const goToDetails = (id) => {
            router.push(`/tour/${id}`);
        };

        const goBack = () => {
            router.back(); // Метод для возврата на предыдущую страницу
        };

        return {
            tour: computed(() => tourStore.tour || {}),
            loading: computed(() => tourStore.loading),
            error: computed(() => tourStore.error),
            goToDetails,
            goBack,
        };
    },
};
</script>

<style>
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
</style>
