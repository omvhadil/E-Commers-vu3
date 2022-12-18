<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../stores";

const router = useRouter();
const idProduct = useRoute().params.id;

onMounted(() => {
  useAuthStore().getProductId(idProduct);
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
          <div class="d-grid gap-2 mt-4">
            <button
              @click="router.push('/formtambahproduct')"
              class="btn btn-terbitkan"
              type="button"
            >
              Saya tertarik dan ingin nego
            </button>
          </div>
        </div>
        <div class="info_penjual border">
          <div class="penjual_image">
            <img src="../assets/hero-login.jpg" alt="" />
          </div>
          <div class="penjual">
            <h3 class="info_penjual_title">Fadilatur Rohman</h3>
            <p class="info_penjual_kota">Probolinggo</p>
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
  </section>
</template>
<style scoped>
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
}
</style>
