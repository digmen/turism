<template>
    <section class="container">
        <article class="employees">
            <h1>Сотрудники нашей компании</h1>
        </article>
        <article class="employees__content">
            <div v-if="loading" aria-live="polite" class="catalog-tour__loading">Загрузка сотрудников, пожалуйста,
                подождите...
            </div>
            <div v-if="error" role="alert">{{ error }}</div>
            <div v-if="employees.length === 0 && !loading && !error" role="alert">Нет доступных сотрудников для
                отображения.</div>
            <div v-for="(employee, index) in employees" :key="employee.id" class="employees__content-item">
                <img class="catalog-tour__item-image" :src="employee.photo" :alt="`Сотрудник: ${employee.name}`"
                    loading="lazy" />
                <strong>{{ employee.name }}</strong>
                <span>{{ employee.position }}</span>
                <span>Опыт работы: {{ employee.experience }} лет</span>
            </div>
        </article>
    </section>
</template>

<script>
import { useEmployeesStore } from '@/stores/employees';
import { onMounted, computed } from 'vue';

export default {
    name: "Employees",
    setup() {
        const employeesStore = useEmployeesStore();

        onMounted(() => {
            employeesStore.loadEmployees();
        });

        const employees = computed(() => employeesStore.employees);
        const loading = computed(() => employeesStore.loading);
        const error = computed(() => employeesStore.error);

        return {
            employees,
            loading,
            error,
        };
    },
};
</script>

<style>
.employees {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 36px;

    h1 {
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-open-sans);
    }
}

.employees__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 36px;
    /* justify-content: space-between; */
}

.employees__content-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.employees__content-item img {
    width: 270px;
    height: 259px;
    border-radius: 20px;
}

.employees__content-item strong {
    font-size: 17px;
    font-weight: 700;
    font-family: var(--font-open-sans);
}

.employees__content-item span {
    font-size: 16px;
    font-weight: 400;
    font-family: var(--font-open-sans);
}
</style>
