<template>
    <section class="container">
        <nav class="catalog__path" aria-label="breadcrumb">
            <NuxtLink to="/">Главная &nbsp;/</NuxtLink><span aria-current="page">Наши контакты</span>
        </nav>
        <div class="contacts">
            <section class="contacts__form">
                <h1>Оставь свои контакты и мы свяжемся с вами</h1>
                <p>Путешествия открывают новые горизонты, и наша компания готова сделать ваш отдых незабываемым! Мы
                    предлагаем уникальные туры, индивидуальный подход и поддержку на каждом этапе путешествия. Свяжитесь
                    с нами, и мы воплотим ваши мечты о идеальном отпуске в реальность!</p>
                <form @submit.prevent="submitForm">
                    <input id="name" v-model="name" type="text" placeholder="Имя" required>
                    <input id="email" v-model="email" type="email" placeholder="Почта" required>
                    <input id="phone_number" v-model="phone_number" type="text" placeholder="Номер телефона с +"
                        required>
                    <textarea id="text" v-model="text" placeholder="Комментарий..." required />
                    <Button title="Свяжитесь со мной" type="submit" width="270px" />
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

const submitForm = async () => {
    const payload = {
        name: name.value,
        email: email.value,
        phone_number: phone_number.value,
        text: text.value,
    };


    try {
        const response = await fetch(`${API_URL}/messages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
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
</style>