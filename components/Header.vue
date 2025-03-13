<template>
    <header class="header" id="header">
        <div class="logo">
            <img src="/assets/images/logo.png" :alt="$t('header.logo')" />
        </div>
        <nav class="nav__container" aria-label="{{ $t('header.navigation') }}">
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/' }" to="/"
                aria-label="{{ $t('header.mainPage') }}">
                {{ $t('header.home') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/employees' }" to="/employees"
                aria-label="{{ $t('header.employeesPage') }}">
                {{ $t('header.employees') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/about' }" to="/about"
                aria-label="{{ $t('header.aboutPage') }}">
                {{ $t('header.about') }}
            </NuxtLink>
            <a class="header__link" href="#catalog">
                {{ $t('header.catalog') }}
            </a>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/hottours' }" to="/hottours"
                aria-label="{{ $t('header.hottours') }}">
                {{ $t('header.hottours') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === '/contacts' }" to="/contacts"
                aria-label="{{ $t('header.contactsInfo') }}">
                {{ $t('header.contacts') }}
            </NuxtLink>
        </nav>
        <div class="header__lang">
            <button class="header__lang-btn" :class="{ 'active': language === 'ru' }" @click="setLanguage('ru')"
                aria-label="{{ $t('header.language') }}">Ru</button>
            <button class="header__lang-btn" :class="{ 'active': language === 'en' }" @click="setLanguage('en')"
                aria-label="{{ $t('header.language') }}">Eng</button>
        </div>
    </header>
    <div class="container">
        <div class="header__line"></div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
const { setLocale } = useI18n()
const { t } = useI18n();
const route = useRoute();
const language = ref('en');

const setLanguage = (lang) => {
    language.value = lang;
    localStorage.setItem('language', lang);
    setLocale(lang);
};

onMounted(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        language.value = savedLanguage;
    } else {
        language.value = 'en';
    }
});
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

.header__lang {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header__lang-btn {
    position: relative;
    transition: color 0.3s ease;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 400;
    font-size: 17px;
}


.header__lang-btn::after {
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

.header__lang-btn.active::after {
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
