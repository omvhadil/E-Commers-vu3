<script setup>
import { watchEffect, reactive, onMounted } from "vue";
import { getProduct, getCategori } from "../plugin/Api";
import MyCard from "../components/CardProduct.vue";
import { Textsearch } from "../stores/product";
import { useRouter } from "vue-router";

const router = useRouter();
const products = reactive({
  product: [],
  perPage: 30,
  categori: [],
  idCategori: 0,
});

const onGetProduct = async () => {
  getProduct({
    page: 1,
    per_page: products.perPage,
    category_id: products.idCategori || null,
    search: Textsearch.value || null,
  }).then(({ data }) => {
    products.product = data;
  });
};
const onGetCategori = async () => {
  getCategori().then(({ data }) => {
    console.log();
    products.categori = data;
  });
};

const loadMore = () => {
  products.perPage += 30;
};

watchEffect(() => {
  onGetProduct();
});

onMounted(() => {
  onGetCategori();
});
</script>
<template>
  <div class="containers section">
    <!-- ======= kategory ============== -->
    <div class="kategori mt-2">
      <h6>Telusuri Kategori</h6>
      <div
        class="box-categori d-flex gap-2 pb-2"
        id="scroll"
        style="width: 100%; overflow-x: auto"
      >
        <button
          @click="products.idCategori = 0"
          :class="products.idCategori == 0 ? 'btn-success' : 'btn-category'"
          class="btn text-white d-flex gap-1"
          type="button"
        >
          <i class="ri-search-line"></i>Semua
        </button>
        <button
          v-for="item in products.categori"
          :key="item.id"
          @click="products.idCategori = item.id"
          :class="
            products.idCategori == item.id ? 'btn-success' : 'btn-category'
          "
          class="btn text-white d-flex gap-1"
          style="white-space: nowrap"
          type="button"
        >
          <i class="ri-search-line"></i>{{ item.name }}
        </button>
      </div>
    </div>
    <!-- ============ peoduct ============== -->
    <div class="list-product mt-3">
      <MyCard
        v-for="item in products.product"
        :key="item.id"
        @click="router.push('/detailproduct/' + item.id)"
        :image="item.image_url"
        :title="item.name"
        :price="item.base_price"
        :categori="item.Categories"
      />
    </div>
    <button @click="loadMore" class="btn_loadmore bg-success text-white">
      Load More
    </button>
  </div>
</template>
<style scoped>
.list-product {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}
.btn_jual {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  padding: 0.3rem 1.3rem;
  border: none;
  border-radius: 5rem;
}
.btn-category {
  background-color: rgb(110, 177, 108);
}
.btn_loadmore {
  padding: 0.3rem 1.3rem;
  border: none;
  border-radius: 5rem;
  margin: 1rem 0;
}
#scroll::-webkit-scrollbar {
  height: 5px;
}
#scroll::-webkit-scrollbar-track {
  background: transparent;
}
#scroll::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: transparent;
}
</style>
