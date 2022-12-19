<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { watchEffect } from "vue";
import { useSellerStore } from "../../stores";
import MyCard from "../../components/CardProduct.vue";

const sellerStore = useSellerStore();
watchEffect(() => {
  sellerStore.getSellerProduct();
});
</script>
<template>
  <div>
    <MyCard
      v-for="item in sellerStore.orderProduct"
      :key="item.id"
      :image="item.image_product"
      :title="item.product_name"
      :price="item.base_price"
      :nego="item.price"
      :status="item.status"
      :date="item.updatedAt"
    />
  </div>
</template>
