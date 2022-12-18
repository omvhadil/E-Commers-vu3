<script setup>
// import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
// import { instance } from "../../plugin/Api";
// import { useAuthStore } from "../../stores";

const router = useRouter();

// const dataProduct = reactive({
//   data: [],
// });

// const onGetProduct = () => {
//   instance
//     .get("/seller/product", {
//       headers: {
//         access_token: useAuthStore().getToken,
//       },
//     })
//     .then((res) => {
//       dataProduct.data = res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// onMounted(() => {
//   onGetProduct();
// });
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
            <img
              src="../../assets/Profile.jpg"
              class="rounded me-3 img-profile"
            />
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
          <RouterLink
            exact-active-class="actived"
            to="/tokosaya"
            class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
            ><i class="ri-codepen-line"></i>
            <p class="m-0">Semua Kategori</p></RouterLink
          >
          <RouterLink
            exact-active-class="actived"
            to="/tokosaya/diminati"
            class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
            ><i class="ri-codepen-line"></i>
            <p class="m-0">Dimanati</p></RouterLink
          >
          <RouterLink
            exact-active-class="actived"
            to="/tokosaya/terjual"
            class="cursor d-flex gap-2 text-dark pt-2 pb-2 text-success cursor-pointer"
            ><i class="ri-codepen-line"></i>
            <p class="m-0">Terjual</p></RouterLink
          >
        </div>
      </div>
      <div class="content-product gap-3 grid">
        <!-- ========== card tambah product ============== -->
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped>
.cursor {
  cursor: pointer;
}
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
.actived {
  color: var(--first-color) !important;
  font-weight: 600;
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
