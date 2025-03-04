<template>
    <footer class="footer">
        <section class="footer__top">
        </section>
        <section class="footer__bottom">
            <article class="footer__bottom-top">
                <div class="footer__bottom-top-left">
                    <NuxtLink to="/catalog" aria-label="Перейти к каталогу">
                        <span>Каталог</span>
                        <img src="/assets/images/arrowfooterleft.svg" alt="Стрелка вверх вправо">
                    </NuxtLink>
                </div>
                <div class="footer__bottom-top-right">
                    <NuxtLink to="#header" aria-label="Вернуться к началу страницы">
                        <img src="/assets/images/arrowup.svg" alt="Стрелка вверх">
                    </NuxtLink>
                </div>
            </article>
            <article class="footer__bottom-bottom">
                <article class="footer__bottom-bottom-left">
                    <div class="footer__links">
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти на главную страницу">
                            Главная&nbsp;&nbsp;/&nbsp;&nbsp;</NuxtLink>
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти к каталогу туров">Каталог
                            туров&nbsp;&nbsp;/&nbsp;&nbsp;</NuxtLink>
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти к горящим турам">Горящие
                            туры&nbsp;&nbsp;/&nbsp;&nbsp;</NuxtLink><br />
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти к отзывам">
                            Отзывы&nbsp;&nbsp;/&nbsp;&nbsp;</NuxtLink>
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти к сотрудникам">
                            Сотрудники&nbsp;&nbsp;/&nbsp;&nbsp;</NuxtLink>
                        <NuxtLink class="footer__link" to="#catalog" aria-label="Перейти к блогу">Блог</NuxtLink>
                    </div>
                    <div class="footer__socials">
                        <NuxtLink class="footer__social-link" to="#catalog" aria-label="Перейти в Telegram">
                            <img class="footer__social-icon" src="/assets/images/telegram.svg" alt="Telegram">
                        </NuxtLink>
                        <NuxtLink class="footer__social-link" to="#catalog" aria-label="Перейти в WhatsApp">
                            <img class="footer__social-icon" src="/assets/images/whatsapp.svg" alt="WhatsApp">
                        </NuxtLink>
                        <NuxtLink class="footer__social-link" to="#catalog" aria-label="Перейти в Instagram">
                            <img class="footer__social-icon" src="/assets/images/instagram.svg" alt="Instagram">
                        </NuxtLink>
                    </div>
                </article>
                <article class="footer__bottom-bottom-left">
                    <div class="footer__contacts">
                        <span class="footer__contact-title">Наши контакты</span>
                        <NuxtLink class="footer__contact-link" aria-label="Позвонить по телефону +996 000 88-76-54">+996
                            000 88-76-54</NuxtLink>
                    </div>
                    <div class="footer__email">
                        <span class="footer__email-title">Email</span>
                        <NuxtLink class="footer__email-link" aria-label="Отправить письмо на hello@logoipsum.com">
                            hello@logoipsum.com</NuxtLink>
                    </div>
                </article>
                <article class="footer__bottom-bottom-left">
                    <div class="footer__address">
                        <span class="footer__address-title">Адрес</span>
                        <span class="footer__address-detail">г. Бишкек, ул. МММММММММ</span>
                    </div>
                    <div class="footer__hours">
                        <span class="footer__hours-title">Часы работы</span>
                        <span class="footer__hours-detail">Круглосуточно</span>
                    </div>
                </article>
                <article class="footer__bottom-bottom-right">
                    <div class="footer__copyright">
                        <span class="footer__copyright-text">© 2023 — Copyright</span>
                    </div>
                </article>
            </article>
        </section>
    </footer>
</template>

<script setup>

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