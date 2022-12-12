<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div class="mb-3">
    <label :for="title" class="form-label">{{ title }}</label>
    <textarea class="form-control" :id="title" rows="3"></textarea>
  </div>
</template>
