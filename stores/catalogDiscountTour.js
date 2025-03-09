import { defineStore } from 'pinia';
import { fetchCatalogDiscountTours } from '@/utils/api';

export const useCatalogDiscountTourStore = defineStore('catalogDiscountTour', {
    state: () => ({
        discountTours: [],
        loading: false,
        error: null,
    }),

    actions: {
        async loadDiscountTours() {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchCatalogDiscountTours();
                this.discountTours = data;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});
