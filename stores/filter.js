import { defineStore } from 'pinia';
import { fetchFilter } from '@/utils/api';

export const useFilterStore = defineStore('filter', {
    state: () => ({
        filter: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadFilter(countryId, tourTypeId) {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchFilter(countryId, tourTypeId);
                this.filter = data;
            } catch (error) {
                console.error('Ошибка при загрузке путей:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});
