<script setup>
import MyInput from "../components/MyInput.vue";
import MyTextarea from "../components/MyTextarea.vue";
import MySelect from "../components/MySelect.vue";
import { ref } from "vue";

const kota = ref(["Probolinggo", "Jombang"]);
</script>
<template>
  <div class="container section">
    <div class="wrap ms-auto me-auto mt-5 pb-5">
      <div
        class="card-image-profile curpoin d-flex align-items-center justify-content-center"
      >
        <i class="ri-camera-line" style="font-size: 2rem"></i>
      </div>
      <MyInput title="nama" type="text" />
      <MySelect title="Kota" :data="kota" />
      <MyTextarea title="Alamat" />
      <MyInput title="Nomor Telepon" />
      <!-- ============== Button simpan ========= -->
      <div class="d-grid mt-4">
        <button class="btn btn-success" type="button">Simpan</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  width: 500px;
}
.card-image-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  margin-left: auto;
  margin-right: auto;
}
</style>
