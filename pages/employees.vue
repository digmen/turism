<template>
    <section class="container">
        <article class="employees">
            <h1>{{ $t('employees.title') }}</h1>
        </article>
        <article>
            <div v-if="loading" class="loading">{{ $t('employees.loading') }}</div>
            <div v-else-if="error" class="error">{{ error }}</div>
            <div v-if="employees.length === 0 && !loading && !error" role="alert" class="no-data">{{
                $t('employees.noData') }}</div>
        </article>
        <article class="employees__content">
            <div v-for="(employee) in employees" :key="employee.id" class="employees__content-item">
                <img class="catalog-tour__item-image" :src="employee.photo"
                    :alt="`${$t('employees.alt')}: ${employee.name}`" loading="lazy" />
                <strong>{{ employee.name }}</strong>
                <span>{{ employee.position }}</span>
                <span>{{ $t('employees.experience') }} {{ employee.experience }} {{ $t('employees.years') }}</span>
            </div>
        </article>
    </section>
</template>

<script setup>
import { useEmployeesStore } from '~/stores/employees';
import { onMounted, computed } from 'vue';

const employeesStore = useEmployeesStore();

onMounted(() => {
    employeesStore.loadEmployees();
});

useHead({
    title: 'Наши сотрудники - Awesome Travel / Our Employees - Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Познакомьтесь с нашей командой профессионалов в Awesome Travel. Мы гордимся нашими сотрудниками, которые обеспечивают высокий уровень сервиса и незабываемые впечатления от путешествий. / Meet our team of professionals at Awesome Travel. We are proud of our employees who provide high-level service and unforgettable travel experiences.'
        },
        {
            name: 'keywords',
            content: 'сотрудники, команда, профессионалы, туризм, путешествия, Awesome Travel, employees, team, professionals, tourism, travel'
        },
        {
            property: 'og:title',
            content: 'Наши сотрудники - Awesome Travel / Our Employees - Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Познакомьтесь с нашей командой профессионалов в Awesome Travel. Мы гордимся нашими сотрудниками, которые обеспечивают высокий уровень сервиса и незабываемые впечатления от путешествий. / Meet our team of professionals at Awesome Travel. We are proud of our employees who provide high-level service and unforgettable travel experiences.'
        },
        {
            property: 'og:image',
            content: 'https://example.com/employees-image.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/employees'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Наши сотрудники - Awesome Travel / Our Employees - Awesome Travel'
        },
        {
            name: 'twitter:description',
            content: 'Познакомьтесь с нашей командой профессионалов в Awesome Travel. Мы гордимся нашими сотрудниками, которые обеспечивают высокий уровень сервиса и незабываемые впечатления от путешествий. / Meet our team of professionals at Awesome Travel. We are proud of our employees who provide high-level service and unforgettable travel experiences.'
        },
        {
            name: 'twitter:image',
            content: 'https://example.com/employees-image.jpg'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://example.com/employees' }
    ]
});

const employees = computed(() => employeesStore.employees);
const loading = computed(() => employeesStore.loading);
const error = computed(() => employeesStore.error);
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
    gap: 36px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
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

.employees__loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 20px;
    font-weight: 600;
    color: #2d2d2d;
}

.loading,
.error,
.no-data {
    width: 100%;
    text-align: center;
    padding: 20px;
    font-family: var(--font-open-sans);
    font-size: 16px;
}

.error {
    color: #ff0000;
}

.no-data {
    color: #666;
}
</style>
