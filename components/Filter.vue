<template>
    <div class="filter">
        <h2 class="filter__title">
            Найдите тур, подходящий именно Вам!
        </h2>
    </div>
    <div class="filter__container">
        <form class="filter__form" aria-label="Форма фильтрации туров">
            <CustomSelect
                :options="['go', 'python', 'rust', 'javascript']"
                :default="'Выбрать направление '"
                class="select"
                @input="handleInput($event)"
                :width="300"
                aria-label="Выбор направления"
            />
            <CustomSelect
                :options="['go', 'python', 'rust', 'javascript']"
                :default="'Выбрать месяц '"
                class="select"
                @input="handleInput($event)"
                :width="230"
                aria-label="Выбор месяца"
            />
            <CustomSelect
                :options="['go', 'python', 'rust', 'javascript']"
                :default="'Выбрать тур '"
                class="select"
                @input="handleInput($event)"    
                :width="200"
                aria-label="Выбор тура"
            />
            <Button title="Найти тур" aria-label="Кнопка поиска тура" size="15px"/>
        </form>
    </div>
</template>

<script setup lang="ts">
import CustomSelect from "./CustomSelect.vue";
import Button from "~/ui/Button.vue";

const handleInput = (event: any) => {
    console.log(event);
};

</script>

<style scoped>
.filter__container{
    max-width: 1239px;
    margin: 0 auto;
}

.filter{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 27px;
    margin-bottom: 57px;
}

.filter__title{
    font-family: var(--font-montserrat);
    font-weight: 700;
    font-size: 25px;
    color: #2D2D2D;
}

.filter__form{
    background-color: #CCCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    gap: 50px;
}

@media (max-width: 1025px) {
  .filter__container{
    max-width: 100%;
  }

  .filter__title{
    font-size: 20px;
  }

  .filter__form{
    height: 80px;
    gap: 20px;
  }
}
</style>
