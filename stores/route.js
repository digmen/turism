import { defineStore } from 'pinia';
import { fetchRoute, fetchRouteStartEnd } from '@/utils/api';

export const useRouteStore = defineStore('route', {
    state: () => ({
        route: [],
        loading: false,
        error: null,
    }),

    actions: {
        async loadRoute(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchRoute(id);
                if (!data) {
                    throw new Error('Данные маршрута не найдены');
                }
                this.route = data;
            } catch (error) {
                console.error('Ошибка при загрузке маршрута:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});

export const useRouteStartEndStore = defineStore('routeStartEnd', {
    state: () => ({
        routeStartEnd: [],
        loading: false,
        error: null,
    }),

    actions: {
        async loadRouteStartEnd(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchRouteStartEnd(id);
                if (!data) {
                    throw new Error('Данные начала и конца маршрута не найдены');
                }
                this.routeStartEnd = data;
            } catch (error) {
                console.error('Ошибка при загрузке начала и конца маршрута:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});