<template>
    <div class="main_header"></div>
    <header class="header" id="header">
        <div class="header__lang-mobile">
            <button class="header__lang-btn" :class="{ 'active': language === 'ru' }" @click="setLanguage('ru')"
                aria-label="{{ $t('header.language') }}">Ru</button>
            <button class="header__lang-btn" :class="{ 'active': language === 'en' }" @click="setLanguage('en')"
                aria-label="{{ $t('header.language') }}">Eng</button>
        </div>
        <div class="logo">
            <img src="/assets/images/logobgwhite.png" :alt="$t('header.logo')" />
        </div>
        <nav class="nav__container" aria-label="{{ $t('header.navigation') }}">
            <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/') }" :to="localPath('/')"
                aria-label="{{ $t('header.mainPage') }}">
                {{ $t('home.title') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/employees') }"
                :to="localPath('/employees')" aria-label="{{ $t('header.employeesPage') }}">
                {{ $t('header.employees') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/about') }"
                :to="localPath('/about')" aria-label="{{ $t('header.aboutPage') }}">
                {{ $t('header.about') }}
            </NuxtLink>
            <a class="header__link" href="#catalog">
                {{ $t('header.catalog') }}
            </a>
            <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/hottours') }"
                :to="localPath('/hottours')" aria-label="{{ $t('header.hottours') }}">
                {{ $t('header.hottours') }}
            </NuxtLink>
            <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/contacts') }"
                :to="localPath('/contacts')" aria-label="{{ $t('header.contactsInfo') }}">
                {{ $t('header.contacts') }}
            </NuxtLink>
        </nav>
        <div class="header__lang">
            <button class="header__lang-btn" :class="{ 'active': language === 'ru' }" @click="setLanguage('ru')"
                aria-label="{{ $t('header.language') }}">Ru</button>
            <button class="header__lang-btn" :class="{ 'active': language === 'en' }" @click="setLanguage('en')"
                aria-label="{{ $t('header.language') }}">Eng</button>
        </div>
        <div class="burger-menu" @click="toggleMenu">
            <div :class="{ 'line': true, 'open': isMenuOpen }"></div>
            <div :class="{ 'line': true, 'open': isMenuOpen }"></div>
            <div :class="{ 'line': true, 'open': isMenuOpen }"></div>
        </div>
        <transition name="fade">
            <div class="mobile-menu" :class="{ 'active': isMenuOpen === true }">
                <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/') }" :to="localPath('/')"
                    aria-label="{{ $t('header.mainPage') }}" @click="toggleMenu">
                    {{ $t('home.title') }}
                </NuxtLink>
                <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/employees') }"
                    :to="localPath('/employees')" aria-label="{{ $t('header.employeesPage') }}" @click="toggleMenu">
                    {{ $t('header.employees') }}
                </NuxtLink>
                <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/about') }"
                    :to="localPath('/about')" aria-label="{{ $t('header.aboutPage') }}" @click="toggleMenu">
                    {{ $t('header.about') }}
                </NuxtLink>
                <a class="header__link" href="#catalog" @click="toggleMenu">
                    {{ $t('header.catalog') }}
                </a>
                <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/hottours') }"
                    :to="localPath('/hottours')" aria-label="{{ $t('header.hottours') }}" @click="toggleMenu">
                    {{ $t('header.hottours') }}
                </NuxtLink>
                <NuxtLink class="header__link" :class="{ 'active': route.path === localPath('/contacts') }"
                    :to="localPath('/contacts')" aria-label="{{ $t('header.contactsInfo') }}" @click="toggleMenu">
                    {{ $t('header.contacts') }}
                </NuxtLink>
            </div>
        </transition>
    </header>
    <div class="container head_line">
        <div class="header__line"></div>
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const { setLocale } = useI18n()
const route = useRoute();
const language = ref('en');
const localPath = useLocalePath();
const isMenuOpen = ref(false);

const setLanguage = (lang) => {
    language.value = lang;
    setLocale(language.value);
    localStorage.setItem('language', lang);
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        language.value = savedLanguage;
    } else {
        language.value = 'en';
    }
});

useHead({
    title: 'Главная страница - Awesome Travel / Home Page - Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Добро пожаловать на наш сайт путешествий. / Welcome to our travel site.'
        },
        {
            name: 'keywords',
            content: 'путешествия, туры, отдых, travel, tours, vacation'
        },
        {
            property: 'og:title',
            content: 'Главная страница - Awesome Travel / Home Page - Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Добро пожаловать на наш сайт путешествий. / Welcome to our travel site.'
        },
        {
            property: 'og:image',
            content: 'https://example.com/home-thumbnail.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/home'
        }
    ]
});
</script>

<style scoped>
.main_header {
    z-index: 10;
}

header {
    background-color: #990711;
    color: #fff;
    padding: 0px 45px 0px 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    position: relative;
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

.burger-menu {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.burger-menu .line {
    width: 25px;
    height: 3px;
    background-color: #292D32;
    transition: transform 0.3s ease;
    border-radius: 12px;
}

.burger-menu .line.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.burger-menu .line.open:nth-child(2) {
    opacity: 0;
}

.burger-menu .line.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
    transition: 0.5s ease;
    position: absolute;
    visibility: hidden;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background-color: #990711;
    padding: 20px;
    width: 100%;
    opacity: 0;
    left: 0;
    top: 100px;
}

.mobile-menu.active {
    opacity: 1;
    visibility: visible;
}

.header__lang-mobile {
    display: none;
}

@media (min-width: 769px) {
    header nav {
        display: flex;
    }
}

@media (min-width: 319px) and (max-width: 768px) {
    header {
        background-color: transparent;
    }

    header nav {
        display: none;
    }

    .burger-menu {
        display: flex;
    }

    .header__link {
        color: #2D2D2D;
    }

    .head_line {
        display: none;
    }

    .mobile-menu {
        background-color: white;
    }

    .header__lang-btn {
        color: #990711;
        font-size: 17px;
    }

    .header__lang-btn::after {
        background-color: #990711;
    }

    .header__lang {
        display: none;
    }

    .logo {
        width: 200px;
        height: 130px;
    }

    header {
        padding: 0px 20px 0px 20px;
    }
}

@media (min-width: 426px) and (max-width: 768px) {
    .header__lang-mobile {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}

@media (min-width: 376px) and (max-width: 426px) {
    .header__lang-mobile {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}

@media (min-width: 321px) and (max-width: 376px) {
    .logo {
        width: 145px;
        height: 90px;
    }

    .header__lang-mobile {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .mobile-menu {
        top: 70px;
    }
}

@media (min-width: 0px) and (max-width: 321px) {
    .logo {
        width: 145px;
        height: 90px;
    }

    .header__lang-mobile {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .mobile-menu {
        top: 70px;
    }
}

@media (min-width: 1024px) and (max-width: 1439px) {
    .header__link[data-v-a81738bd] {
        color: #fff;
        font-family: var(--font-open-sans);
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        position: relative;
        transition: color 0.3s ease;
    }
}
</style>
