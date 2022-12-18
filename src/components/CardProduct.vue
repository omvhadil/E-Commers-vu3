<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categori: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="card-product rounded shadow-sm">
    <div class="product-image">
      <img :src="image" class="product-img" />
    </div>
    <div class="content ps-2 pe-2">
      <h6 class="m-0">{{ title }}</h6>
      <div class="box-category">
        <span
          class="text-secondary text-category"
          v-for="item in categori"
          :key="item.id"
          >{{ item.name }}</span
        >
      </div>
      <h6>{{ price }}</h6>
    </div>
  </div>
</template>
<style scoped>
.card-product {
  background-color: #fff;
  overflow: hidden;
}
.product-image {
  width: 100%;
  height: 170px;
}
.product-img {
  height: 100%;
  object-fit: cover;
}
.box-category {
  font-size: var(--smaller-font-size);
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
