<template>
    <footer class="footer">
        <section class="footer__top">
        </section>
        <section class="footer__bottom">
            <article class="footer__bottom-top">
                <div class="footer__bottom-top-left">
                    <a href="#catalog" :aria-label="$t('footer.goToCatalog')">
                        <span>{{ $t('footer.catalog') }}</span>
                        <img src="/assets/images/arrowfooterleft.svg" :alt="$t('footer.arrowUp')">
                    </a>
                </div>
                <div class="footer__bottom-top-right">
                    <a href="#header" aria-label="Вернуться к началу страницы">
                        <img src="/assets/images/arrowup.svg" :alt="$t('footer.arrowUp')">
                    </a>
                </div>
            </article>
            <article class="footer__bottom-bottom">
                <article class="footer__bottom-bottom-left">
                    <div class="footer__links">
                        <NuxtLink class="footer__link" to="/" :aria-label="$t('footer.goToMain')">
                            {{ $t('footer.main') }}&nbsp;&nbsp;/&nbsp;&nbsp;
                        </NuxtLink>
                        <NuxtLink class="footer__link" to="/" :aria-label="$t('footer.goToCatalogTours')">
                            {{ $t('footer.catalog') }}&nbsp;&nbsp;/&nbsp;&nbsp;
                        </NuxtLink>
                        <NuxtLink class="footer__link" to="/hottours" :aria-label="$t('footer.goToHottours')">
                            {{ $t('footer.hottours') }}&nbsp;&nbsp;/&nbsp;&nbsp;
                        </NuxtLink>
                        <br />
                        <NuxtLink class="footer__link" to="/employees" :aria-label="$t('footer.goToEmployees')">
                            {{ $t('footer.employees') }}
                        </NuxtLink>
                    </div>
                    <div class="footer__socials">
                        <a class="footer__social-link" href="https://t.me/awesometravelkg"
                            :aria-label="$t('footer.goToTelegram')">
                            <img class="footer__social-icon" src="/assets/images/telegram.svg"
                                :alt="$t('footer.telegram')">
                        </a>
                        <a class="footer__social-link" href="https://wa.me/996707498308"
                            :aria-label="$t('footer.goToWhatsapp')">
                            <img class="footer__social-icon" src="/assets/images/whatsapp.svg"
                                :alt="$t('footer.whatsapp')">
                        </a>
                        <a class="footer__social-link"
                            href="https://www.instagram.com/awesome_travel_kg_?igsh=YW9iYTh2cGp0ZXJl&utm_source=qr"
                            :aria-label="$t('footer.goToInstagram')">
                            <img class="footer__social-icon" src="/assets/images/instagram.svg"
                                :alt="$t('footer.instagram')">
                        </a>
                    </div>
                </article>
                <article class="footer__bottom-bottom-left">
                    <div class="footer__contacts">
                        <span class="footer__contact-title">{{ $t('footer.ourContacts') }}</span>
                        <a class="footer__contact-link" :aria-label="$t('footer.phone')" href="tel:+996707498308">
                            {{ $t('footer.phone') }}
                        </a>
                    </div>
                    <div class="footer__email">
                        <span class="footer__email-title">{{ $t('footer.email') }}</span>
                        <a href="mailto:awesometravelkg@gmail.com" class="footer__email-link"
                            :aria-label="$t('footer.emailLink')">
                            awesometravelkg@gmail.com
                        </a>
                    </div>
                </article>
                <article class="footer__bottom-bottom-left">
                    <div class="footer__address">
                        <span class="footer__address-title">{{ $t('footer.address') }}</span>
                        <a class="footer__address-detail" href="https://maps.app.goo.gl/xMrbRfziHfjJGvFu5"
                            target="_blank" rel="noopener noreferrer">{{ $t('footer.addressDetail') }}</a>
                    </div>
                    <div class="footer__hours">
                        <span class="footer__hours-title">{{ $t('footer.hours') }}</span>
                        <span class="footer__hours-detail">{{ $t('footer.hoursDetail') }}</span>
                    </div>
                </article>
                <article class="footer__bottom-bottom-right">
                    <div class="footer__copyright">
                        <span class="footer__copyright-text">{{ $t('footer.copyright') }}</span>
                    </div>
                </article>
            </article>
        </section>
    </footer>
</template>

<script setup>

useHead({
    title: 'Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Awesome Travel'
        },
        {
            name: 'keywords',
            content: 'Awesome Travel'
        },
        {
            property: 'og:title',
            content: 'Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Awesome Travel'
        },
        {
            property: 'og:image',
            content: 'https://example.com/footer-thumbnail.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/footer'
        }
    ]
});
</script>

<style>
.footer {
    margin-top: 55px;
}

.footer__top {
    background-image: url('/assets/images/footer.svg');
    background-position: center;
    transform: translateY(1px);
    background-repeat: repeat;
    min-height: 85px;
}

.footer__bottom {
    padding-inline: 98px;
    background-color: #990711;
    height: 286px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-block: 24px;
}

.footer__bottom-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__bottom-top-left {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    a {
        display: flex;
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        font-family: var(--font-inter);
        align-items: center;
        gap: 10px;
    }

    img {
        position: absolute;
        right: -15px;
        top: 0px;
    }
}

.footer__bottom-top-right {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 100%;
    }
}

.footer__bottom-bottom {
    display: flex;
    justify-content: space-between;

    .footer__bottom-bottom-left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

.footer__contacts,
.footer__email,
.footer__hours,
.footer__address {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .footer__contact-title,
    .footer__email-title,
    .footer__hours-title,
    .footer__address-title {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        font-family: var(--font-inter);
    }

    .footer__contact-link,
    .footer__email-link,
    .footer__hours-detail,
    .footer__address-detail {
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        font-family: var(--font-inter);
        text-decoration: none;

    }
}

.footer__email {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__address {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__hours {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__link {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    font-family: var(--font-inter);
}

.footer__socials {
    display: flex;
    gap: 35px;
}

.footer__social-link {
    display: flex;
    justify-content: center;
}

.footer__bottom-bottom-right {
    display: flex;
    align-items: flex-end;

    .footer__copyright {

        .footer__copyright-text {
            color: #fff;
            font-size: 10px;
            font-weight: 400;
            font-family: var(--font-inter);
        }

    }
}


@media (max-width: 1025px) {
    .footer__bottom {
        padding-inline: 69px;
    }

    .footer__bottom-bottom-right {
        display: none;
    }

    .footer__contacts,
    .footer__email,
    .footer__hours,
    .footer__address {

        .footer__contact-title,
        .footer__email-title,
        .footer__hours-title,
        .footer__address-title {
            font-size: 10px;
        }
    }

}
</style>