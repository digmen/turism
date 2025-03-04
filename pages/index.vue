<template>
    <div class="container">
        <Slider />
    </div>
    <Filter />
    <section class="about">
        <img class="about__bg" src="/assets/images/aboutbg.svg" alt="Фон о нас">
        <article class="container">
            <div class="container">
                <h1 class="about__title">
                    Путешествуйте с комфортом и уверенностью!
                </h1>
                <article class="about__content">
                    <p class="about__text">
                        Добро пожаловать в Awesome Travel – ваше надежное турагентство в Кыргызстане! Мы открываем для
                        вас мир удивительных путешествий, предлагая туры на любой вкус: от спокойного семейного отдыха
                        до экстремальных приключений. Наши опытные специалисты помогут вам выбрать идеальный маршрут,
                        организовать трансфер и подобрать лучшие отели. Откройте для себя живописные горы, кристально
                        чистые озера и богатую культуру Кыргызстана вместе с нами! Мы гарантируем комфорт, безопасность
                        и незабываемые эмоции на каждом этапе вашего путешествия. С Awesome Travel мечты о путешествиях
                        становятся реальностью!
                    </p>
                    <img class="about__logo" src="/assets/images/logobgwhite.png" alt="Логотип Awesome Travel">
                </article>
            </div>
        </article>
    </section>
    <Video />
    <section class="container">
        <article class="advantages">
            <h2 class="advantages__title">Наши преимущества</h2>
            <div class="advantages__content">
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/add_location_alt.svg" alt="Разнообразная география туров">
                    </div>
                    <h3>Туры с разнообразной географией</h3>
                    <p>Мы организуем поездки в Кыргызстан, Казахстан, Узбекистан и другие страны Центральной Азии.</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/directions_bus.svg" alt="Оснащенный транспорт">
                    </div>
                    <h3>Хорошо оснащенный транспорт</h3>
                    <p>Более 10 Mercedes Benz и более 10 внедорожников Jeep для экскурсий даже по самым сложным
                        маршрутам.</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/groups.svg" alt="Профессиональные специалисты">
                    </div>
                    <h3>Профессиональные специалисты</h3>
                    <p>Наши гиды и водители владеют несколькими языками и имеют большой опыт проведения экскурсий.</p>
                </div>
                <div class="advantages__item">
                    <div class="advantages__item-img">
                        <img src="/assets/images/hotel.svg" alt="Широкий выбор отелей">
                    </div>
                    <h3>Широкий выбор отелей</h3>
                    <p>Мы сотрудничаем с более чем 60 отелями и гостевыми домами. Любой путешественник сможет найти
                        условия для себя.</p>
                </div>
            </div>
        </article>
    </section>
    <CatalogTour />
    <section class="container">
        <article class="contact_block">
            <div class="contact_block__content">
                <h2>Хотите узнать больше?</h2>
                <p>Предоставим подробную информацию о наших услугах.</p>
            </div>
            <div class="contact_block__button">
                <NuxtLink to="/contacts">
                    Бесплатная консультация
                    <img src="/assets/images/arrowRight.svg" alt="Стрелка вправо">
                </NuxtLink>
            </div>
        </article>
    </section>
</template>

<script>
import Slider from '~/components/Slider.vue';
import Video from '~/components/Video.vue';
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
    justify-content: space-between;
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
        z-index: 1;
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
</style>
