<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="containers section">
    <div class="mt-3">
      <h5>Product Jual Saya</h5>
      <!-- ===== info penjual ===== -->
      <div
        class="card-profile d-flex justify-content-between border rounded p-2 mt-3"
      >
        <div class="col-profile d-flex">
          <div class="card-image me-2" style="width: 50px; height: 50px">
            <img src="../assets/Profile.jpg" class="rounded me-3 img-profile" />
          </div>
          <div>
            <h6 class="m-0">Fadilatur Rohman</h6>
            <span style="color: #aaa">Probolinggo</span>
          </div>
        </div>
        <div class="col-edit">
          <button
            @click="router.push('/forminfoakun')"
            type="button"
            class="btn btn-outline-success"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    <div class="container_product_saya gap-3" style="width: 100%">
      <div class="col-kategori border rounded">
        <h6>Kategori</h6>
        <div class="mt-2">
          <a class="d-flex gap-2 text-dark pt-2 pb-2 text-success">
            <i class="ri-codepen-line text-success"></i>
            <p class="m-0 text-success">Semua Kategori</p>
          </a>
          <a class="d-flex gap-2 border-top text-dark pt-2 pb-2">
            <i class="ri-heart-line"></i>
            <p class="m-0">Dimanati</p>
          </a>
          <a class="d-flex gap-2 border-top text-dark pt-2 pb-2">
            <i class="ri-money-dollar-circle-line"></i>
            <p class="m-0">Terjual</p>
          </a>
        </div>
      </div>
      <div class="content-product gap-3 grid">
        <!-- ========== card tambah product ============== -->
        <div
          @click="router.push('/formtambahproduct')"
          class="card-product add-product border rounded p-2 d-flex align-items-center justify-content-center"
        >
          <div class="text-center">
            <i class="ri-add-circle-line"></i>
            <p>tambah product</p>
          </div>
        </div>
        <!-- ============= card product ========= -->
        <div class="card-product border rounded">
          <div class="image-product">
            <img src="../assets/hero-login.jpg" class="image-product-img" />
          </div>
          <div class="product-description">
            <h6 class="m-0">Jam tangan casio</h6>
            <span>Aksesories</span>
            <h6>120.000</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.section {
  margin-top: 6rem;
}
.card-profile {
  background-color: var(--body-color);
}
.img-profile {
  height: 100%;
  object-fit: cover;
}
.container_product_saya {
  margin-top: 1rem;
  display: flex;
}
.col-kategori {
  width: 350px;
  padding: 0.5rem;
  background-color: var(--body-color);
}
.col-products {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--body-color);
}
.content-product {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--body-color);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.product-description {
  padding: 0.5rem;
}
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
.image-product {
  width: 100%;
  height: 170px;
  overflow: hidden;
}
.image-product-img {
  height: 100%;
  object-fit: cover;
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
