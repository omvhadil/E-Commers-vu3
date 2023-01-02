<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useSellerStore } from "../stores";
import { formatDate } from "../plugin";

const id = useRoute().params.id;

const onStatus = (status) => {
  const data = {
    status: status,
  };
  useSellerStore()
    .postSellerOrder(id, data)
    .then(() => {
      useSellerStore().getPenawarProduct(id);
    });
};
onMounted(() => {
  useSellerStore().getPenawarProduct(id);
});
</script>
<template>
  <div id="bodi" class="mains">
    <h5 class="title">productmu yang di tawar</h5>
    <!-- ===== Penawar ===== -->
    <div class="box_info_penawar">
      <div class="image_penawar">
        <img :src="useSellerStore().penawar.User?.image_url" alt="" />
      </div>
      <div class="info_penawar">
        <h6 class="info_penawar_title">
          {{ useSellerStore().penawar.User?.full_name }}
        </h6>
        <span class="info_penawar_kota">{{
          useSellerStore().penawar.User?.city
        }}</span>
      </div>
    </div>
    <!-- ===== Product yng di tawar ===== -->
    <div class="product_ditawar">
      <div class="image_product">
        <img
          :src="useSellerStore().penawar.Product?.image_url"
          alt=""
          class="image_product_ditawar"
        />
      </div>
      <div class="detail_ditawar">
        <p class="subtitle">
          <span class="subtitle_text">Productmu yang di tawar</span>
          <span class="subtitle_date">{{
            formatDate(useSellerStore().penawar.updatedAt)
          }}</span>
        </p>
        <h5 class="detail_ditawar_name m-0">
          {{ useSellerStore().penawar.Product?.name }}
        </h5>
        <del class="detail_ditawar_price m-0">
          Rp.
          {{ useSellerStore().penawar.base_price }}
        </del>
        <h5 class="detail_ditawar_tawar">
          Rp.
          {{ useSellerStore().penawar.price }}
        </h5>
        <div v-if="useSellerStore().penawar.status === 'accepted'" class="btns">
          <button class="btnku btn_status">status</button>
          <button class="btnku btn_hubungi">Hubungi</button>
        </div>
        <div
          v-else-if="useSellerStore().penawar.status === 'pending'"
          class="btns"
        >
          <button @click="onStatus('declined')" class="btnku btn_tolak">
            Tolak
          </button>
          <button @click="onStatus('accepted')" class="btnku btn_terima">
            Terima
          </button>
        </div>
        <div v-else class="btns">
          <p>Anda sudah menolak tawaran ini</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  margin-bottom: 1rem;
}
/* === Penawar === */
.box_info_penawar {
  border: 1px solid #ccc;
  padding: 0.5rem;
  display: flex;
  column-gap: 1rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
}
.info_penawar_title {
  font-size: 1.25rem;
  margin: 0;
}
.info_penawar_kota {
  font-size: 0.8rem;
  margin: 0;
}
.image_penawar {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 0.5rem;
}
.image_penawar img {
  width: 100%;
}
/* === Yang Ditawar === */
.product_ditawar {
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  column-gap: 1rem;
  background-color: #fff;
}
.image_product {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 1rem;
}
.detail_ditawar_price {
  font-size: 1rem;
  color: rgb(138, 138, 138);
}
.detail_ditawar_tawar {
  font-size: 1rem;
  color: #000;
  margin-bottom: 1rem;
}
.btnku {
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
}
.btns {
  display: flex;
  column-gap: 1rem;
}
.btn_tolak {
  background-color: transparent;
  border: 2px solid var(--first-color);
  color: var(--first-color);
}
.btn_terima {
  background-color: transparent;
  background-color: var(--first-color);
  color: var(--text-color-light);
}
.btn_status {
  background-color: var(--first-color);
  color: var(--text-color-light);
}
.btn_hubungi {
  background-color: blue;
  color: var(--text-color-light);
}
.subtitle {
  display: flex;
  column-gap: 3rem;
  margin: 0;
  font-size: 0.8rem;
  color: rgb(167, 164, 164);
}
</style>
