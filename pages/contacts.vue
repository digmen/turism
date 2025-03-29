<template>
    <section class="container">
        <nav class="catalog__path" aria-label="breadcrumb">
            <NuxtLink to="/">{{ $t('contacts.home') }} &nbsp;/</NuxtLink><span aria-current="page">
                {{ $t('contacts.ourContacts') }}</span>
        </nav>
        <div class="contacts">
            <section class="contacts__form">
                <h1>{{ $t('contacts.title') }}</h1>
                <p>{{ $t('contacts.description') }}</p>
                <form @submit.prevent="submitForm">
                    <input id="name" v-model="name" type="text" :placeholder="$t('contacts.name')" required>
                    <input id="email" v-model="email" type="email" :placeholder="$t('contacts.email')" required>
                    <input id="phone_number" v-model="phone_number" type="text" :placeholder="$t('contacts.phone')"
                        required>
                    <textarea id="text" v-model="text" :placeholder="$t('contacts.message')" required />
                    <Button class="contact_btn" :title="$t('contacts.submit')" type="submit" width="270px" />
                </form>
            </section>
            <aside class="contacts__img">
                <img src="/assets/contacts/img1.png" alt="Контактное изображение 1">
                <img src="/assets/contacts/img2.png" alt="Контактное изображение 2">
                <img src="/assets/contacts/img3.png" alt="Контактное изображение 3">
                <img src="/assets/contacts/img4.png" alt="Контактное изображение 4">
            </aside>
        </div>
        <Toaster position="bottom-left" />
    </section>
</template>

<script setup>
import Button from '~/ui/Button.vue';
import { API_URL } from '~/api/const';
import { ref } from 'vue';
import toast, { Toaster } from 'vue3-hot-toast';

const name = ref('');
const email = ref('');
const phone_number = ref('');
const text = ref('');

useHead({
    title: 'Контакты - Awesome Travel / Contacts - Awesome Travel',
    meta: [
        {
            name: 'description',
            content: 'Свяжитесь с нами в Awesome Travel для получения дополнительной информации о наших турах и услугах. / Contact us at Awesome Travel for more information about our tours and services.'
        },
        {
            name: 'keywords',
            content: 'контакты, связь, туры, услуги, Awesome Travel, contacts, communication, tours, services'
        },
        {
            property: 'og:title',
            content: 'Контакты - Awesome Travel / Contacts - Awesome Travel'
        },
        {
            property: 'og:description',
            content: 'Свяжитесь с нами в Awesome Travel для получения дополнительной информации о наших турах и услугах. / Contact us at Awesome Travel for more information about our tours and services.'
        },
        {
            property: 'og:image',
            content: 'https://example.com/contacts-image.jpg'
        },
        {
            property: 'og:url',
            content: 'https://example.com/contacts'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Контакты - Awesome Travel / Contacts - Awesome Travel'
        },
        {
            name: 'twitter:description',
            content: 'Свяжитесь с нами в Awesome Travel для получения дополнительной информации о наших турах и услугах. / Contact us at Awesome Travel for more information about our tours and services.'
        },
        {
            name: 'twitter:image',
            content: 'https://example.com/contacts-image.jpg'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://example.com/contacts' }
    ]
});

const submitForm = async () => {
    const payload = {
        name: name.value,
        email: email.value,
        phone_number: phone_number.value,
        text: text.value,
    };


    try {
        const csrfToken = Cookies.get("csrftoken");
        const response = await axios.post(`${API_URL}/messages/`, payload, {
            headers: {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            toast.success('Отправлено');
        } else {
            toast.error('Ошибка при отправке формы: неверный номер телефона');
        }

    } catch (error) {
        toast.error('Ошибка при отправке формы');
    }
};

</script>

<style>
.catalog__path {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 12px;
}

.catalog__path a {
    font-size: 15px;
    font-weight: 300;
    font-family: var(--font-open-sans);
    color: #2D2D2D;
    text-decoration: none;
}

.catalog__path span {
    font-size: 15px;
    font-weight: 400;
    font-family: var(--font-open-sans);
    color: #2D2D2D;
}

.contacts {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;
}

.contacts__form {
    h1 {
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
    }

    p {
        margin-top: 12px;
        width: 740px;
        font-size: 22px;
        font-weight: 400;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
    }

    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input,
    textarea {
        padding: 10px;
        border: 2px solid #99071144;
        border-radius: 15px;
        font-size: 18px;
        font-weight: 400;
        font-family: var(--font-open-sans);
        color: #2D2D2D;
        outline: none;
    }

    input::placeholder,
    textarea::placeholder {
        color: #B0B0B0;
    }

    input:focus,
    textarea:focus {
        border: 2px solid #990711;
    }

    input[type="text"],
    input[type="email"] {
        width: 315px;
    }

    textarea {
        width: 646px;
        min-height: 162px;
        text-align: start;
        vertical-align: top;
    }
}

.contacts__img {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contacts__img img:nth-child(1) {
    transform: translate(10px, -45px);
}

.contacts__img img:nth-child(2) {
    transform: translate(-10px, 45px);
}

.contacts__img img:nth-child(3) {
    transform: translate(-55px, -15px);
}

.contacts__img img:nth-child(4) {
    transform: translate(-25px, 20px);
}

@media (min-width: 769px) and (max-width: 1024px) {
    .contacts__img {
        display: none;
    }
}

@media (min-width: 427px) and (max-width: 768px) {
    .contacts__img {
        display: none;
    }

    .catalog__path {
        margin: 0;
    }

    .contacts {
        margin-top: 10px;
    }

    .contacts__form {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }
    }
}

@media (min-width: 377px) and (max-width: 426px) {
    .contacts__img {
        display: none;
    }

    .catalog__path {
        margin: 0;
    }

    .contacts {
        margin-top: 10px;
    }

    .contacts__form {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
            width: 400px;
        }

        textarea {
            width: 100%;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
        }

    }

    .contact_btn {
        width: 100% !important;
    }
}

@media (min-width: 321px) and (max-width: 376px) {
    .contacts__img {
        display: none;
    }

    .catalog__path {
        display: none;
    }

    .contacts {
        margin-top: 10px;
    }

    .contacts__form {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
            width: 100%
        }

        textarea {
            width: 100%;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
        }

    }

    .btn {
        width: 100% !important;
    }
}

@media (min-width: 0px) and (max-width: 321px) {
    .contacts__img {
        display: none;
    }

    .catalog__path {
        display: none;
    }

    .contacts {
        margin-top: 10px;
    }

    .contacts__form {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
            width: 100%
        }

        textarea {
            width: 100%;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
        }

    }

    .btn {
        width: 100% !important;
    }
}
</style>