<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="container">
    <div class="section mt-3">
      <h5>Product Jual Saya</h5>
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
    <div class="section mt-4">
      <div class="wrap d-flex gap-3" style="width: 100%">
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
        <div class="col-products border">
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
                <img
                  src="../assets/jam-tangan1.jfif"
                  class="image-product-img"
                />
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
    </div>
  </div>
</template>
<style scoped>
.img-profile {
  height: 100%;
  object-fit: cover;
}
.col-kategori {
  width: 300px;
  padding: 0.5rem;
}
.col-products {
  width: 100%;
  padding: 0.5rem;
}
.content-product {
  grid-template-columns: repeat(4, 1fr);
}
.card-product {
  height: 250px;
  cursor: pointer;
  overflow: hidden;
}
.add-product:hover {
  background-color: #bbb;
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
</style>
