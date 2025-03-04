import { defineStore } from 'pinia';
import { fetchTour } from '@/utils/api';

export const useTourStore = defineStore('tour', {
    state: () => ({
        tour: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadTour(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTour(id);
                this.tour = data;
            } catch (error) {
                console.error('Ошибка при загрузке туров:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});