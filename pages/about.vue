<template>
    <div class="container">
        <h1 class="title">{{ $t('about.title') }}</h1>
        <section class="about_start">
            <div class="about_start_content">
                <div class="about_start_content_text">
                    <h2>{{ $t('about.title2') }}</h2>
                    <p>{{ $t('about.startDescription') }} <strong>{{ $t('about.strong2') }}</strong> {{
                        $t('about.description2') }}</p>
                </div>
                <div class="about_start_img">
                    <img />
                </div>
            </div>
            <div class="about_start_content">
                <div class="about_start_content_text">
                    <h2>{{ $t('about.title3') }}</h2>
                    <p>{{ $t('about.description3') }}</p>
                </div>
                <div class="about_start_img">
                    <img />
                </div>
            </div>
            <div class="about_start_content">
                <div class="about_start_content_text">
                    <h2>{{ $t('about.title4') }}</h2>
                    <p>{{ $t('about.description4') }}</p>
                    <p>{{ $t('about.description5') }}</p>
                    <p>{{ $t('about.description6') }}</p>
                </div>
                <div class="about_start_img">
                    <img />
                </div>
            </div>
        </section>
        <section class="about_center">
            <article class="about_center_content">
                <div class="about_center_content_item">
                    <h1>{{ $t('about.title5') }}</h1>
                    <ul class="about_center_content_list">
                        <li>{{ $t('about.li1') }}</li>
                        <li>{{ $t('about.li2') }}</li>
                        <li>{{ $t('about.li3') }}</li>
                    </ul>
                </div>
                <div class="about_center_content_item">
                    <h1>{{ $t('about.title6') }}</h1>
                    <ul class="about_center_content_list">
                        <li>{{ $t('about.li4') }}</li>
                        <li>{{ $t('about.li5') }}</li>
                        <li>{{ $t('about.li6') }}</li>
                    </ul>
                </div>
                <div class="about_center_content_item">
                    <h1>{{ $t('about.title7') }}</h1>
                    <ul class="about_center_content_list">
                        <li>{{ $t('about.li7') }}</li>
                        <li>{{ $t('about.li8') }}</li>
                        <li>{{ $t('about.li9') }}</li>
                    </ul>
                </div>
                <div class="about_center_content_item">
                    <h1>{{ $t('about.title8') }}</h1>
                    <ul class="about_center_content_list">
                        <li>{{ $t('about.li10') }}</li>
                        <li>{{ $t('about.li11') }}</li>
                        <li>{{ $t('about.li12') }}</li>
                    </ul>
                </div>
                <div class="about_center_content_item">
                    <h1>{{ $t('about.title9') }}</h1>
                    <ul class="about_center_content_list">
                        <li>{{ $t('about.li13') }}</li>
                        <li>{{ $t('about.li14') }}</li>
                        <li>{{ $t('about.li15') }}</li>
                    </ul>
                </div>
            </article>
        </section>
        <section class="about_end">
            <div class="about_end_block"></div>
            <div class="about_end_block_item">
                <h1>{{ $t('about.title10') }}</h1>
                <p>{{ $t('about.description10') }}</p>
                <NuxtLink :to="localPath('/contacts')">
                    <Button :title="$t('about.button')" />
                </NuxtLink>
            </div>
            <img class="about_end_block_item_img" src="/assets/images/aboutbike.svg" alt="Велосипед" />
        </section>
    </div>
</template>

<script setup>
import Button from '~/ui/Button.vue';
const localPath = useLocalePath();

useHead({
    title: 'О нас - Awesome Travel / About Us - Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Узнайте больше о компании Awesome Travel и наших услугах. Мы предлагаем уникальные путешествия по Кыргызстану. / Learn more about Awesome Travel and our services. We offer unique journeys in Kyrgyzstan.'
        },
        {
            name: 'keywords',
            content: 'о нас, компания, услуги, путешествия, Кыргызстан, about us, company, services, travel, Kyrgyzstan'
        },
        {
            property: 'og:title',
            content: 'О нас - Awesome Travel / About Us - Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Узнайте больше о компании Awesome Travel и наших услугах. Мы предлагаем уникальные путешествия по Кыргызстану. / Learn more about Awesome Travel and our services. We offer unique journeys in Kyrgyzstan.'
        },
        {
            property: 'og:image',
            content: 'https://awesomekyrgyztravel.com/'
        },
        {
            property: 'og:url',
            content: 'https://awesomekyrgyztravel.com/about'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'О нас - Awesome Travel / About Us - Awesome Travel'
        },
        {
            name: 'twitter:description',
            content: 'Узнайте больше о компании Awesome Travel и наших услугах. Мы предлагаем уникальные путешествия по Кыргызстану. / Learn more about Awesome Travel and our services. We offer unique journeys in Kyrgyzstan.'
        },
        {
            name: 'twitter:image',
            content: 'https://example.com/about-image.jpg'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://example.com/about' }
    ]
});
</script>

<style>
.title {
    text-align: center;
    font-size: 25px;
    font-family: var(--font-open-sans);
    font-weight: 700;
    margin-bottom: 48px;
    margin-top: 20px;
}

.about_start {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.about_start_content_text {
    width: 614px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 23px;
        font-family: var(--font-open-sans);
        font-weight: 600;
        color: #2D2D2D;
    }

    p {
        font-size: 20px;
        font-family: var(--font-open-sans);
        font-weight: 400;
        color: #2D2D2D;
    }

    strong {
        font-weight: 600;
    }
}

.about_start_content {
    display: flex;
    justify-content: space-between;
    gap: 24px;
}

.about_start_content:nth-child(2) {
    flex-direction: row-reverse;
}

.about_start_img {
    width: 551px;
    height: 257px;
    background-color: #D9D9D9;
}

.about_center_content {
    margin-block: 75px;
    display: flex;
    flex-direction: column;
    gap: 33px;
}

.about_center_content_item {
    h1 {
        font-size: 23px;
        font-family: var(--font-open-sans);
        font-weight: 600;
        color: #2D2D2D;
    }

    ul {
        padding-left: 30px;
    }

    li {
        font-size: 20px;
        font-family: var(--font-open-sans);
        font-weight: 400;
        color: #2D2D2D;
    }
}

.about_end {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.about_end_block_item_img {
    position: absolute;
    right: -140px;
    bottom: -90px;
    z-index: -1;
}

.about_end_block {
    width: 658px;
    height: 405px;
    background-color: #D9D9D9;
}

.about_end_block_item {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        font-size: 23px;
        font-family: var(--font-open-sans);
        font-weight: 600;
        color: #2D2D2D;
    }

    p {
        width: 514px;
        font-weight: 400;
        font-size: 20px;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
    }
}

@media (min-width: 1025px) and (max-width: 1440px) {
    .about_end_block_item_img {
        position: absolute;
        right: -100px;
        bottom: -90px;
        z-index: -1;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .about_end_block_item_img {
        right: -35px;
    }

    .title {
        font-size: 23px;
    }

    .about_start_content_text {
        h2 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }

    .about_start {
        gap: 60px;
    }

    .about_center_content_item {
        h1 {
            font-size: 20px;
        }

        li {
            font-size: 16px;
        }
    }

    .about_end_block_item {
        align-items: center;

        h1 {
            font-size: 20px;
        }

        p {
            width: 750px;
            font-size: 16px;
            text-align: justify;
        }
    }

    .about_end {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
}

@media (min-width: 427px) and (max-width: 768px) {

    .about_start_content {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-direction: column !important;
    }

    .about_end_block_item_img {
        right: 0px;
    }

    .title {
        font-size: 20px;
        margin-bottom: 15px;
    }

    .about_start_content_text {
        h2 {
            text-align: center;
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }

    .about_start {
        gap: 50px;
        align-items: center;
    }

    .about_start_img {
        width: 100%;
        height: 257px;
        background-color: #D9D9D9;
    }

    .about_center_content_item {
        h1 {
            font-size: 20px;
        }

        li {
            font-size: 16px;
        }
    }

    .about_end_block_item {
        align-items: center;

        h1 {
            font-size: 20px;
        }

        p {
            width: 650px;
            font-size: 16px;
            text-align: justify;
        }
    }

    .about_end {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .about_end_block_item_img {
        display: none;
    }

    .about_center {
        margin-inline: 80px;
    }

    .about_center_content {
        margin-block: 35px;
        align-items: center;
    }
}

@media (min-width: 377px) and (max-width: 426px) {

    .about_start_content {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-direction: column !important;
    }

    .about_end_block_item_img {
        right: 0px;
    }

    .title {
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 0px;
    }

    .about_start_content_text {
        h2 {
            text-align: center;
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }
    }

    .about_start {
        gap: 40px;
        align-items: center;
    }

    .about_start_img {
        width: 100%;
        height: 200px;
        background-color: #D9D9D9;
    }

    .about_center_content_item {
        h1 {
            font-size: 18px;
        }

        li {
            font-size: 14px;
        }
    }

    .about_end_block_item {
        align-items: center;

        h1 {
            font-size: 18px;
        }

        p {
            width: 385px;
            font-size: 14px;
            text-align: justify;
        }
    }

    .about_end_block {
        width: 358px;
        height: 205px;
    }

    .about_start_content_text {
        width: 385px;
    }

    .about_end {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .about_end_block_item_img {
        display: none;
    }

    .about_center {
        margin-inline: 30px;
    }

    .about_center_content {
        margin-block: 35px;
        align-items: center;
    }
}

@media (min-width: 321px) and (max-width: 376px) {

    .about_start_content {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-direction: column !important;
    }

    .about_end_block_item_img {
        right: 0px;
    }

    .title {
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 0px;
    }

    .about_start_content_text {
        h2 {
            text-align: center;
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }
    }

    .about_start {
        gap: 40px;
        align-items: center;
    }

    .about_start_img {
        width: 100%;
        height: 200px;
        background-color: #D9D9D9;
    }

    .about_center_content_item {
        h1 {
            font-size: 18px;
        }

        li {
            font-size: 14px;
        }
    }

    .about_end_block_item {
        align-items: center;

        h1 {
            font-size: 18px;
        }

        p {
            width: 340px;
            font-size: 14px;
            text-align: justify;
        }
    }

    .about_end_block {
        width: 358px;
        height: 205px;
    }

    .about_start_content_text {
        width: 340px;
    }

    .about_end {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .about_end_block_item_img {
        display: none;
    }

    .about_center {
        margin-inline: 30px;
    }

    .about_center_content {
        margin-block: 35px;
        align-items: center;
    }
}

@media (min-width: 0px) and (max-width: 321px) {

    .about_start_content {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-direction: column !important;
    }

    .about_end_block_item_img {
        right: 0px;
    }

    .title {
        font-size: 17px;
        margin-bottom: 15px;
        margin-top: 0px;
    }

    .about_start_content_text {
        h2 {
            text-align: center;
            font-size: 17px;
        }

        p {
            font-size: 14px;
        }
    }

    .about_start {
        gap: 40px;
        align-items: center;
    }

    .about_start_img {
        width: 100%;
        height: 200px;
        background-color: #D9D9D9;
    }

    .about_center_content_item {
        h1 {
            font-size: 17px;
        }

        li {
            font-size: 14px;
        }
    }

    .about_end_block_item {
        align-items: center;

        h1 {
            font-size: 17px;
        }

        p {
            width: 300px;
            font-size: 14px;
            text-align: justify;
        }
    }

    .about_end_block {
        width: 300px;
        height: 205px;
    }

    .about_start_content_text {
        width: 300px;
    }

    .about_end {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .about_end_block_item_img {
        display: none;
    }

    .about_center {
        margin-inline: 20px;
    }

    .about_center_content {
        margin-block: 35px;
        align-items: center;
    }
}
</style>