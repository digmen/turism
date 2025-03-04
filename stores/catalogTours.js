import { defineStore } from 'pinia';
import { fetchCatalogTours, fetchDetailsCatalogTours } from '@/utils/api';

export const useToursStore = defineStore('tours', {
    state: () => ({
        tours: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadTours() {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchCatalogTours();
                this.tours = data;
            } catch (error) {
                console.error('Ошибка при загрузке туров:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});

export const useDetailsCatalogToursStore = defineStore('detailsCatalogTours', {
    state: () => ({
        tours: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadDetailsCatalogTours(id) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchDetailsCatalogTours(id);
                this.tours = data;
            } catch (error) {
                console.error('Ошибка при загрузке каталога деталей туров:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});