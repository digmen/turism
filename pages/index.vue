<template>
    <div class="container">
        <Slider />
    </div>
    <Filter />
    <section class="about">
        <img class="about__bg" src="/assets/images/aboutbg.svg" :alt="$t('homeAbout.bg')">
        <article class="container">
            <div class="container">
                <h1 class="about__title">
                    {{ $t('homeAbout.title') }}
                </h1>
                <article class="about__content">
                    <p class="about__text">
                        {{ $t('homeAbout.description') }}
                    </p>
                    <img class="about__logo" src="/assets/images/logobgwhite.png" :alt="$t('homeAbout.logo')">
                </article>
            </div>
        </article>
    </section>
    <Video />
    <section class="container">
        <article class="advantages">
            <h2 class="advantages__title">{{ $t('homeAdvantages.title') }}</h2>
            <div class="advantages__content">
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/add_location_alt.svg" :alt="$t('homeAdvantages.alt1')">
                    </div>
                    <h3>{{ $t('homeAdvantages.title1') }}</h3>
                    <p>{{ $t('homeAdvantages.description1') }}</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/directions_bus.svg" :alt="$t('homeAdvantages.alt2')">
                    </div>
                    <h3>{{ $t('homeAdvantages.title2') }}</h3>
                    <p>{{ $t('homeAdvantages.description2') }}</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/groups.svg" :alt="$t('homeAdvantages.alt3')">
                    </div>
                    <h3>{{ $t('homeAdvantages.title3') }}</h3>
                    <p>{{ $t('homeAdvantages.description3') }}</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/hotel.svg" :alt="$t('homeAdvantages.alt4')">
                    </div>
                    <h3>{{ $t('homeAdvantages.title4') }}</h3>
                    <p>{{ $t('homeAdvantages.description4') }}</p>
                </div>
            </div>
        </article>
    </section>
    <CatalogTour />
    <section class="container">
        <article class="contact_block">
            <div class="contact_block__content">
                <h2>{{ $t('homeBottom.title') }}</h2>
                <p>{{ $t('homeBottom.description') }}</p>
            </div>
            <div class="contact_block__button">
                <NuxtLink to="/contacts">
                    {{ $t('homeBottom.button') }}
                    <img src="/assets/images/arrowRight.svg" :alt="$t('homeBottom.buttonAlt')">
                </NuxtLink>
            </div>
        </article>
    </section>
</template>

<script setup>
useHead({
    title: 'Awesome Travel - Главная страница / Main Page',
    meta: [
        {
            name: 'description',
            content: 'Добро пожаловать на главную страницу Awesome Travel! Откройте для себя удивительные путешествия по Кыргызстану с нашим надежным туристическим агентством. Мы предлагаем туры на любой вкус: от спокойного семейного отдыха до экстремальных приключений. / Welcome to the main page of Awesome Travel! Discover amazing journeys in Kyrgyzstan with our reliable travel agency. We offer tours for every taste: from peaceful family vacations to extreme adventures.'
        },
        {
            name: 'keywords',
            content: 'туризм, путешествия, Кыргызстан, туры, отдых, приключения, семейный отдых, экстремальные туры, туристическое агентство / tourism, travel, Kyrgyzstan, tours, vacation, adventures, family vacation, extreme tours, travel agency'
        },
        {
            property: 'og:title',
            content: 'Awesome Travel - Главная страница / Main Page'
        },
        {
            property: 'og:description',
            content: 'Добро пожаловать на главную страницу Awesome Travel! Откройте для себя удивительные путешествия по Кыргызстану с нашим надежным туристическим агентством. Мы предлагаем туры на любой вкус: от спокойного семейного отдыха до экстремальных приключений. / Welcome to the main page of Awesome Travel! Discover amazing journeys in Kyrgyzstan with our reliable travel agency. We offer tours for every taste: from peaceful family vacations to extreme adventures.'
        },
        {
            property: 'og:image',
            content: 'https://example.com/image.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/current-page'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Awesome Travel - Главная страница / Main Page'
        },
        {
            name: 'twitter:description',
            content: 'Добро пожаловать на главную страницу Awesome Travel! Откройте для себя удивительные путешествия по Кыргызстану с нашим надежным туристическим агентством. Мы предлагаем туры на любой вкус: от спокойного семейного отдыха до экстремальных приключений. / Welcome to the main page of Awesome Travel! Discover amazing journeys in Kyrgyzstan with our reliable travel agency. We offer tours for every taste: from peaceful family vacations to extreme adventures.'
        },
        {
            name: 'twitter:image',
            content: 'https://example.com/image.jpg'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://example.com/current-page' }
    ]
});
</script>

<style scoped>
.about {
    margin-top: 82px;
    position: relative;
}

.about__bg {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 1440px;
}

.about__content {
    margin-top: 40px;
    display: flex;
    gap: 40px;
}


.about__title {
    text-align: center;
    font-family: var(--font-open-sans);
    font-weight: 700;
    font-size: 25px;
    color: #2D2D2D;
}

.about__logo {
    height: 300px;
}

.about__text {
    width: 649px;
    font-family: var(--font-open-sans);
    font-weight: 400;
    font-size: 22px;
    color: #2D2D2D;
}

.advantages {
    margin-top: 84px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.advantages__title {
    font-family: var(--font-open-sans);
    font-weight: 700;
    font-size: 25px;
    color: black;
}

.advantages__content {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.advantages__item {
    width: 252px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.advantages__item:first-child .advantages__item-img {
    border: 2px solid #990711;
    border-radius: 100%;
    padding: 20px 14px 14px 20px;
}

.advantages__item-img {
    border: 2px solid #990711;
    border-radius: 100%;
    padding: 20px
}

.advantages__item-img img {
    width: 40px;
    height: 40px;
}

.advantages__item h3 {
    text-align: center;
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 17px;
    color: #2D2D2D;
}

.advantages__item p {
    text-align: center;
    font-family: var(--font-open-sans);
    font-weight: 400;
    font-size: 16px;
    color: #2D2D2D;
}

.contact_block {
    margin-top: 94px;
    background-color: #990711;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    overflow: hidden;
}

.contact_block__content {
    display: flex;
    flex-direction: column;
    padding-left: 48px;
    gap: 10px;

    h2 {
        font-family: var(--font-open-sans);
        font-weight: 700;
        font-size: 28px;
        color: #F9FAFB;
    }

    p {
        font-family: var(--font-open-sans);
        font-weight: 400;
        font-size: 14px;
        color: #F9FAFB;
    }
}

.contact_block__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right: 96px;
    background-color: #F63441;
    border-radius: 100%;
    width: 492px;
    height: 480px;
    position: relative;
    left: 25px;

    a {
        text-decoration: none;
        font-family: var(--font-open-sans);
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
    }
}

@media (max-width: 1025px) {
    .about__bg {
        width: 100%;
    }

    .about__text {
        font-size: 17px;
    }

    .about__logo {
        height: 200px;
    }

    .about__title,
    .advantages__title {
        font-size: 20px;
    }

    .about__bg {
        z-index: -1;
    }

    .advantages__content {
        flex-wrap: wrap;
        width: 700px;
        gap: 40px;
    }

    .contact_block__content {
        h1 {
            font-weight: 600;
            font-size: 20px;
        }

        p {
            font-size: 12px;
        }
    }

    .contact_block__button {
        width: 440px;
        height: 380px;
    }

}

@media (min-width: 427px) and (max-width: 769px) {
    .slider__item-img {
        width: 800px;
        height: 410px;
    }

    .contact_block__content {
        h2 {
            font-size: 18px;
        }
    }

    .advantages__content {
        width: 600px;
    }
}

@media (min-width: 377px) and (max-width: 426px) {
    .advantages__content {
        width: 100%;
        justify-content: center;
    }

    .about__logo,
    .about__bg {
        display: none;
    }

    .contact_block__content {

        h2 {
            font-size: 18px;
            text-align: center;
        }
    }

    .contact_block {
        padding: 15px;
        padding-bottom: 0px;
        height: 180px;
        flex-direction: column;
    }

    .contact_block__content {
        padding-left: 0px;
    }

    .contact_block__button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding-right: 0px;
        background-color: #F63441;
        border-radius: 100%;
        width: 445px;
        height: 480px;
        position: relative;
        left: 0px;
        bottom: -30px;

        a {
            text-decoration: none;
            font-family: var(--font-open-sans);
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
        }
    }
}
</style>
