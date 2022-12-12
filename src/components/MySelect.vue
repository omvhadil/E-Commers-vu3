<script setup>
// import { reactive } from "vue";

// const data = reactive({
//   kategori: ["aksesories", " alat dapur"],
// });
defineProps({
  title: {
    type: String,
  },
  type: {
    default: "checkbox",
  },
  data: {
    type: Array,
  },
});
</script>
<template>
  <div class="mb-3">
    <label :class="form - label">{{ title }}</label>
    <select class="form-select mb-3" aria-label="Default select example">
      <option value>{{ title }}</option>
      <option v-for="(item, index) in data" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
