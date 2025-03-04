<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false" :style="{ width: width + 'px' }">
    <div class="selected" :class="{ open: open }" @click="open = !open" aria-label="Выбранный элемент">
      <span>
        {{ selected }}
      </span>
      <img src="@/assets/images/arrowSelect.svg" alt="Стрелка выбора" :class="{ open: open }" :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }">
    </div>
    <div class="items" :class="{ selectHide: !open }" aria-label="Список опций">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        aria-label="Опция выбора"
      >
        <span>
          {{ option }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
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
