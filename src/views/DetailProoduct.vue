<script setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getIdProduct } from "../plugin/Api";

const idProduct = useRoute().params.id;

const router = useRouter();

const products = reactive({
  product: [],
});

const onGetIdProduct = () => {
  getIdProduct(idProduct).then((Response) => {
    console.log(Response.data);
    products.product = Response.data;
  });
};

onMounted(() => {
  onGetIdProduct();
});
</script>
<template>
  <div class="section">
    <div class="wrap mt-4 grid">
      <div class="col-image">
        <div class="card_image">
          <img :src="products.product.image_url" class="image" />
        </div>
        <div class="card_description mt-3 border rounded p-2">
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nulla ducimus ea, officia deserunt maxime culpa, omnis quod numquam
            quibusdam saepe sed laborum assumenda nobis repudiandae ab
            cupiditate obcaecati expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nulla ducimus ea, officia deserunt maxime culpa, omnis quod numquam
            quibusdam saepe sed laborum assumenda nobis repudiandae ab
            cupiditate obcaecati expedita?
          </p>
        </div>
      </div>
      <div class="col-detail">
        <div class="card-detail border rounded p-3">
          <h3>{{ products.product.name }}</h3>
          <span v-for="item in products.product.Category" :key="item.id">{{
            item.name
          }}</span>
          <h5 class="mt-2">{{ products.product.base_price }}</h5>
          <div class="d-grid gap-2 mt-4">
            <button class="btn btn-success" type="button">Terbitkan</button>
            <button
              @click="router.push('/formtambahproduct')"
              class="btn btn-white text-success border-success"
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.image {
  height: 100%;
  object-fit: cover;
}
.card_image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 1rem;
}
.card-detail {
  width: 400px;
}
</style>
