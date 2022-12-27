<script setup>
import { onMounted } from "vue";
import { useBuyerStore } from "../stores";

onMounted(() => {
  useBuyerStore().getBuyerOrder();
});
</script>
<template>
  <div class="mains container">
    <div class="container_product">
      <div
        v-for="item in useBuyerStore().orderBuyer"
        :key="item.id"
        class="card_product"
      >
        <div class="image_product">
          <img :src="item.image_product" alt="" />
        </div>
        <div class="detail_product">
          <h3 class="product_title m-0">{{ item.product_name }}</h3>
          <del class="product_price m-0">Rp. {{ item.base_price }}</del>
          <p class="product_lokasi m-0">
            {{ item.product?.location }}
          </p>
          <h5 class="product_bit_price mm-0">Ditawar : Rp {{ item.price }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mains {
  margin-top: 7rem;
}
.container_product {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.card_product {
  border: 1px solid #ccc;
  padding: 0.5rem;
  display: flex;
  column-gap: 1rem;
  background-color: #fff;
}
.image_product {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
