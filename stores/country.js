import { defineStore } from 'pinia';
import { fetchCountry } from '@/utils/api';

export const useCountryStore = defineStore('country', {
    state: () => ({
        country: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadCountry() {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchCountry();
                this.country = data;
            } catch (error) {
                console.error('Ошибка при загрузке страны:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});