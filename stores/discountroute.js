import { defineStore } from 'pinia';
import { fetchDiscountRoute, fetchDiscountRouteStartEnd } from '@/utils/api';

export const useDiscountRouteStore = defineStore('discountRoute', {
    state: () => ({
        discountRoute: [],
        loading: false,
        error: null,
    }),

    actions: {
        async loadDiscountRoute(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchDiscountRoute(id);
                if (!data) {
                    throw new Error('Данные маршрута не найдены');
                }
                this.discountRoute = data;
            } catch (error) {
                console.error('Ошибка при загрузке маршрута:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});

export const useDiscountRouteStartEndStore = defineStore('discountRouteStartEnd', {
    state: () => ({
        discountRouteStartEnd: [],
        loading: false,
        error: null,
    }),

    actions: {
        async loadDiscountRouteStartEnd(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchDiscountRouteStartEnd(id);
                if (!data) {
                    throw new Error('Данные начала и конца маршрута не найдены');
                }
                this.discountRouteStartEnd = data;
            } catch (error) {
                console.error('Ошибка при загрузке начала и конца маршрута:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});