import { defineStore } from 'pinia';
import { fetchSlider } from '@/utils/api';

export const useSliderStore = defineStore('slider', {
    state: () => ({
        slider: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadSlider() {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchSlider();
                this.slider = data;
            } catch (error) {
                console.error('Ошибка при загрузке слайдера:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});