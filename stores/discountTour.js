import { defineStore } from 'pinia';
import { fetchDiscountTour } from '@/utils/api';

export const useDiscountTourStore = defineStore('discountTour', {
    state: () => ({
        discountTour: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadTour(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchDiscountTour(id);
                this.discountTour = data;
            } catch (error) {
                console.error('Ошибка при загрузке горячего тура:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});