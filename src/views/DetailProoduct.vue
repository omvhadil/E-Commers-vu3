<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../stores";
import { useBuyerStore } from "../stores/useBayerOrder";

const idProduct = useRoute().params.id;
const form = ref();
const defaultAvatar = `https://ui-avatars.com/api/?name=${
  useAuthStore().productId.User?.full_name
}`;

const postTawaran = () => {
  useBuyerStore().PostBuyerOrder(form.value, idProduct);
};

const isOrdered = computed(() => {
  return useBuyerStore().orderBuyer.find((e) => {
    return e.product_id == idProduct;
  });
});

onMounted(() => {
  useAuthStore().getProductId(idProduct);
  useBuyerStore().getBuyerOrder();
});
</script>
<template>
  <section class="section containers">
    <div class="wrap mt-4 grid">
      <div class="card_image">
        <img :src="useAuthStore().productId.image_url" class="image" />
      </div>
      <div>
        <div class="card-detail border rounded p-3">
          <h3>{{ useAuthStore().productId.name }}</h3>
          <span
            v-for="item in useAuthStore().productId.Category"
            :key="item.id"
            >{{ item.name }}</span
          >
          <h5 class="mt-2">{{ useAuthStore().productId.base_price }}</h5>
          <div v-if="!isOrdered" class="d-grid gap-2 mt-4">
            <button
              type="button"
              class="btn btn-terbitkan btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Saya tertarik dan ingin nego
            </button>
          </div>
        </div>
        <div class="info_penjual border">
          <div class="penjual_image">
            <img
              :src="useAuthStore().productId.User?.image_url ?? defaultAvatar"
              alt=""
            />
          </div>
          <div class="penjual">
            <h3 class="info_penjual_title">
              {{ useAuthStore().productId.User?.full_name }}
            </h3>
            <p class="info_penjual_kota">
              {{ useAuthStore().productId.User?.city ?? "-" }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card_description mt-3 border rounded p-2">
      <h5>Description</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla
        ducimus ea, officia deserunt maxime culpa, omnis quod numquam quibusdam
        saepe sed laborum assumenda nobis repudiandae ab cupiditate obcaecati
        expedita?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla
        ducimus ea, officia deserunt maxime culpa, omnis quod numquam quibusdam
        saepe sed laborum assumenda nobis repudiandae ab cupiditate obcaecati
        expedita?
      </p>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div> -->
          <div class="modal-body">
            <h5 class="modal_title">Masukkan Harga Tawaranmu</h5>
            <p class="modal_subtitle">
              Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>
            <div class="modal_product">
              <div class="modal_img_product">
                <img src="../assets/profile2.jpg" />
              </div>
              <div class="modal_info_product">
                <h3 class="modal_info_product_title">Pemuas Birahi</h3>
                <p class="modal_info_product_kota">Rp 350.000</p>
              </div>
            </div>
            <form @submit.prevent="postTawaran">
              <div class="form_tawar">
                <h3 class="form-tawar_title">Ditawar</h3>
                <input v-model="form" type="text" />
              </div>
              <div>
                <button class="btn_kirim">Kirim</button>
              </div>
            </form>
            <button type="button" class="modal_close" data-bs-dismiss="modal">
              X
            </button>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.modal-dialog {
  width: 20rem;
}
.modal-content {
  padding-top: 2rem;
}
.modal_title {
  font-size: 1rem;
}
.modal_subtitle {
  font-size: 0.813rem;
}
.modal_product {
  width: 100%;
  background-color: rgb(241, 240, 240);
  display: flex;
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
}
.modal_img_product {
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-right: 0.5rem;
}
.modal_info_product_title {
  font-size: 1rem;
  margin: 0;
}
.modal_info_product_kota {
  font-size: 0.813rem;
}
.form_tawar {
  margin-top: 0.7rem;
}
.form-tawar_title {
  font-size: 1rem;
  margin: 0;
}
.form_tawar input {
  width: 100%;
  padding: 0.3rem 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  outline: none;
  margin-top: 0.3rem;
}
.btn_kirim {
  width: 100%;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: var(--first-color);
  color: var(--text-color-light);
  border-radius: 1rem;
}
.btn_kirim:hover {
  background-color: var(--first-color-alt);
}
.modal_close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.section {
  margin-top: 7rem;
}
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
  height: 500px;
  overflow: hidden;
  border-radius: 1rem;
}
.card-detail {
  width: 400px;
  background-color: var(--body-color);
}
.btn-edit {
  border: 1px solid var(--first-color);
  color: var(--title-color);
}
.btn-terbitkan {
  background-color: var(--first-color);
  color: var(--text-color-light);
}
.penjual_image {
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  overflow: hidden;
}
.penjual_image img {
  height: 100%;
  object-fit: cover;
}
.info_penjual {
  width: 400px;
  background-color: var(--body-color);
  margin-top: 1rem;
  padding: 0.5rem;
  column-gap: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.info_penjual_title {
  font-size: 1.25rem;
  margin: 0;
}
.info_penjual_kota {
  font-size: 0.813rem;
}
.card_description {
  width: 50%;
  background-color: var(--body-color);
}

@media screen and (max-width: 767px) {
  .wrap {
    grid-template-columns: 1fr;
  }
  .card-detail {
    width: 100%;
  }
  .info_penjual {
    width: 100%;
  }
  .card_image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 1rem;
  }
  .card_description {
    width: 100%;
  }
  .modal-dialog {
    width: 96%;
  }
}
</style>
