<script setup>
import { watchEffect, onMounted } from "vue";
import MyCard from "../components/CardProduct.vue";
import { useRouter } from "vue-router";
import { useAuthStore, useSellerStore } from "../stores";

const router = useRouter();

watchEffect(() => {
  useAuthStore().getProduct();
});
onMounted(() => {
  useAuthStore().getCategory();
  useSellerStore().getSellerBanner();
});
</script>
<template>
  <section class="mains" id="bodi">
    <!-- ============ Banner ============== -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="item in useSellerStore().banner"
          :key="item.id"
          class="carousel-item active"
        >
          <img
            :src="item.image_url"
            class="d-block w-100"
            height="50"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- ============ Category ============== -->
    <div class="kategori mt-2">
      <h6>Telusuri Kategori</h6>
      <div
        class="box-categori d-flex gap-2 pb-2"
        id="scroll"
        style="width: 100%; overflow-x: auto"
      >
        <button
          @click="useAuthStore().idCategori = 0"
          :class="
            useAuthStore().idCategori == 0
              ? 'btn-category-active'
              : 'btn-category'
          "
          class="btn d-flex gap-1"
          type="button"
        >
          <i class="ri-search-line"></i>Semua
        </button>
        <button
          v-for="item in useAuthStore().categori"
          :key="item.id"
          @click="useAuthStore().idCategori = item.id"
          :class="
            useAuthStore().idCategori == item.id
              ? 'btn-category-active'
              : 'btn-category'
          "
          class="btn d-flex gap-1"
          style="white-space: nowrap"
          type="button"
        >
          <i class="ri-search-line"></i>{{ item.name }}
        </button>
      </div>
    </div>
    <!-- ============ Loading Product ============== -->
    <div v-if="useAuthStore().loading" class="row g-3 mt-2">
      <div v-for="item in 12" :key="item" class="col-lg-2">
        <div class="card">
          <div class="card-body d-flex flex-column gap-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============ Product ============== -->
    <div v-else class="list-product mt-3" ref="productScroll">
      <MyCard
        v-for="item in useAuthStore().product"
        :key="item.id"
        @click="router.push('/detailproduct/' + item.id)"
        :image="item.image_url"
        :title="item.name"
        :price="item.base_price"
        :categori="item.Categories"
      />
    </div>
    <button @click="useAuthStore().loadMore()" class="btn_loadmore">
      Load More
    </button>
  </section>
</template>
<style scoped>
/* === Banner ===*/
.carousel-item {
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
}
/* === Loading === */
.card-body div {
  border-radius: 5px;
  animation: skeleton-loading 1s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: rgba(228, 227, 227, 0.322);
  }
  100% {
    background-color: rgb(228, 227, 227);
  }
}
.card-body div:first-child {
  width: 100%;
  height: 8rem;
  background-color: rgb(228, 227, 227);
}
.card-body div {
  width: 100%;
  height: 1rem;
  background-color: rgb(228, 227, 227);
}
/* === Product ===*/
.list-product {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}
/* === Category ===*/
.btn-category {
  background-color: var(--first-color-light);
  color: var(--text-color-light);
}
.btn-category-active {
  background-color: var(--first-color);
  color: var(--text-color-light);
}
.btn_loadmore {
  padding: 0.3rem 1.3rem;
  border: none;
  border-radius: 5rem;
  margin: 1rem 0;
  background-color: var(--first-color);
  color: var(--text-color-light);
}
/* === Styling Scroll ===*/
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
/* ====== BreackPoint Mobile Device ====== */
@media screen and (max-width: 767px) {
  /* ===Product ===*/
  .list-product {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  /* === Banner === */
  .carousel-item {
    height: 13rem;
    overflow: hidden;
  }
}
</style>
