<script setup>
defineProps({
  title: {
    type: String,
  },
  type: {
    default: "text",
  },
});
</script>
<template>
  <div class="mb-3">
    <label :for="title" class="form-label">{{ title }}</label>
    <input :type="type" class="form-control" :id="title" :placeholder="title" />
  </div>
</template>
