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
</style>