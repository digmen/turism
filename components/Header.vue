<template>
    <header class="header" id="header">
        <div class="logo">
            <img src="/assets/images/logo.png" alt="Логотип компании" />
        </div>
        <nav class="nav__container" aria-label="Главная навигация">
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/' }" to="/"
                aria-label="Главная страница">
                Главная
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/employees' }" to="/employees"
                aria-label="Страница сотрудников">
                Сотрудники
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/about' }" to="/about"
                aria-label="Информация о компании">
                О компании
            </NuxtLink>
            <a class="header__link" href="#catalog">
                Каталог туров
            </a>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/hottours' }" to="/hottours"
                aria-label="Горящие туры">
                Горящие туры
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/contacts' }" to="/contacts"
                aria-label="Контактная информация">
                Контакты
            </NuxtLink>
        </nav>
        <div class="header__lang">
            <button class="header__lang-btn" aria-label="Переключить на русский язык">Ru</button>
            <button class="header__lang-btn" aria-label="Switch to English language">Eng</button>
        </div>
    </header>
    <div class="container">
        <div class="header__line"></div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
header {
    background-color: #990711;
    color: #fff;
    padding: 0px 45px 0px 45px;
}

header nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.nav__container {
    padding-inline: 45px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 100px;
    height: 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.header__link {
    color: #fff;
    font-family: var(--font-open-sans);
    text-decoration: none;
    font-size: 17px;
    font-weight: 400;
    position: relative;
    transition: color 0.3s ease;
}

.header__link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.header__link.active::after {
    transform: scaleX(1);
}

.header__line {
    width: 100%;
    height: 1px;
    background-color: #990711;
    margin-top: 18.5px;
}

@media (max-width: 1025px) {
    .header__link {}
}
</style>
