<script setup>
// import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores";
import { onMounted } from "vue";

onMounted(() => {
  useAuthStore().getUser();
});
</script>
<template>
  <div id="bodi" class="mains">
    <h5>Toko Saya</h5>
    <!-- ===== info penjual ===== -->
    <div class="card-profile">
      <div class="col-profile">
        <div class="card-image me-2" style="width: 50px; height: 50px">
          <img
            :src="useAuthStore().userId.image_url"
            class="rounded me-3 img-profile"
          />
        </div>
        <div>
          <h6 class="m-0">{{ useAuthStore().userId.full_name }}</h6>
          <span style="color: #aaa">{{ useAuthStore().userId.city }}</span>
        </div>
      </div>
    </div>
    <div class="container_product_saya gap-3" style="width: 100%">
      <!-- ==== Toko saya ==== -->
      <div>
        <div class="col-kategori border rounded">
          <h6>Toko saya</h6>
          <div class="mt-2">
            <RouterLink
              exact-active-class="actived"
              to="/tokosaya"
              class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
              ><i class="ri-store-2-line"></i>
              <p class="m-0">Semua Product</p></RouterLink
            >
            <RouterLink
              exact-active-class="actived"
              to="/tokosaya/diminati"
              class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
              ><i class="ri-award-line"></i>
              <p class="m-0">Dimanati</p></RouterLink
            >
            <RouterLink
              exact-active-class="actived"
              to="/tokosaya/terjual"
              class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
              ><i class="ri-line-chart-line"></i>
              <p class="m-0">Terjual</p></RouterLink
            >
          </div>
        </div>
      </div>
      <!-- ==== container Product ==== -->
      <div>
        <div class="content-product gap-3 grid">
          <!-- ========== card tambah product ============== -->
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cursor {
  cursor: pointer;
}
.mains h5 {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
}
/* === Profile === */
.card-profile {
  background-color: var(--body-color);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
}
.col-profile {
  display: flex;
  column-gap: 1rem;
}
.img-profile {
  height: 100%;
  object-fit: cover;
}
/* === Toko Saya === */
.container_product_saya {
  display: grid;
  grid-template-columns: 300px auto;
  column-gap: 1rem;
  margin-top: 1rem;
}
.col-kategori {
  padding: 1rem;
  background-color: var(--body-color);
}
.actived {
  color: var(--first-color) !important;
  font-weight: 600;
}
.col-products {
  width: 100%;
  padding: 1rem;
  background-color: var(--body-color);
}
/* === Product Saya === */
.content-product {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--body-color);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border-color);
}
@media screen and (max-width: 767px) {
  .container_product_saya {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
  }
  .col-kategori {
    width: 100%;
  }
  .content-product {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
