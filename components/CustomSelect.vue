<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open" :aria-label="$t('customSelect.selected')">
      <span>
        {{ displayValue }}
      </span>
      <img src="@/assets/images/arrowSelect.svg" :alt="$t('customSelect.arrow')" :class="{ open: open }"
        :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }">
    </div>
    <div class="items" :class="{ selectHide: !open }" :aria-label="$t('customSelect.options')">
      <div v-for="(option, i) of options" :key="i" @click="selectOption(option)"
        :aria-label="$t('customSelect.option')">
        <span>
          {{ option.title || option.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  default: {
    type: String,
    required: false,
    default: null,
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
  width: {
    type: Number,
    required: false,
    default: 0,
  },
});

const emit = defineEmits(['input']);

const selectedOption = ref(null);
const open = ref(false);

// Вычисляемое свойство для отображения текста в селекте
const displayValue = computed(() => {
  if (selectedOption.value) {
    return selectedOption.value.title || selectedOption.value.name;
  }
  return props.default;
});

// Функция выбора опции
const selectOption = (option) => {
  selectedOption.value = option;
  open.value = false;
  emit('input', option);
};

// Не эмитим событие при монтировании, чтобы не сбрасывать значения
onMounted(() => {
  // Ничего не делаем при монтировании
});

// Следим за изменениями опций, чтобы обновить выбранное значение при необходимости
watch(() => props.options, (newOptions) => {
  if (newOptions.length > 0 && !selectedOption.value) {
    // Не выбираем автоматически первую опцию
  }
}, { deep: true });
</script>

<style scoped>
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
}


.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
}

.selected img {
  transition: all 0.3s ease;
}

.custom-select .selected {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0.5em 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
}

.custom-select .items {
  border: 1px solid #000;
  border-top: none;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding: 0.5em 1em;
  cursor: pointer;
  user-select: none;
}

.selected span,
.items span {
  font-family: var(--font-open-sans);
  font-weight: 300;
  font-size: 20px;
  color: black;
}

.custom-select .items div:hover {
  background-color: #0000001d;
}

.selectHide {
  display: none;
}

@media (max-width: 1025px) {

  .selected span,
  .items span {
    font-size: 15px;
  }
}
</style>
