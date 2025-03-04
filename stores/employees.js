import { defineStore } from 'pinia';
import { fetchEmployees } from '@/utils/api';

export const useEmployeesStore = defineStore('employees', {
    state: () => ({
        employees: [],
        loading: false,
        error: null,
    }),


    actions: {
        async loadEmployees() {
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchEmployees();
                this.employees = data;
            } catch (error) {
                console.error('Ошибка при загрузке сотрудников:', error);
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});