<template>
  <button class="btn" :style="{ width: width, fontSize: fontSize }">{{ title }}</button>
</template>

<style>
.btn {
  height: 47px;
  padding: 10px 25px;
  font-size: var(--font-size);
  font-weight: 400;
  border-radius: 10px;
  background-color: #990711;
  color: #FFFFFF;
  font-family: var(--font-montserrat);
  width: var(--width);
  cursor: pointer;
  transition: 1s;
}

.btn:active {
  background-color: #680007;
  transition: 0.1s;
}
</style>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },
    fontSize: {
      type: String,
      required: false,
    },
  },
}

</script>