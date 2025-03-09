import { defineStore } from 'pinia';
import { fetchRoute } from '@/utils/api';

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
                this.route = data;
            } catch (error) {
                console.error('Ошибка при загрузке путей:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});