<script setup>
import { onMounted, reactive } from "vue";
import { instance } from "../../plugin/Api";
import MyCard from "../../components/CardProduct.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const dataProduct = reactive({
  data: [],
});

const onGetProduct = () => {
  instance
    .get("/seller/product")
    .then((res) => {
      dataProduct.data = res.data;
    })
    .catch(() => {});
};

onMounted(() => {
  onGetProduct();
});
</script>
<template>
  <div
    class="card-product add-product border rounded p-2 d-flex align-items-center justify-content-center"
  >
    <div @click="router.push('/formtambahproduct')" class="text-center">
      <i class="ri-add-circle-line"></i>
      <p>tambah product</p>
    </div>
  </div>
  <!-- ============= card product ========= -->
  <MyCard
    v-for="item in dataProduct.data"
    :key="item.id"
    @click="router.push('/detailsellerproduct/' + item.id)"
    :image="item.image_url"
    :title="item.name"
    :price="item.base_price"
    :categori="item.Categories"
  />
</template>
<style scoped>
.card-product {
  height: 250px;
  cursor: pointer;
  overflow: hidden;
}
.add-product {
  background-color: rgb(240, 240, 240);
}
.add-product:hover {
  background-color: rgb(209, 207, 207);
}
</style>
