<script setup>
import MyInput from "../components/MyInput.vue";
import MyTextarea from "../components/MyTextarea.vue";
import MySelect from "../components/MySelect.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const kategori = ref(["Aksesories", "Sparepat"]);
const router = useRouter();
</script>
<template>
  <div class="container section">
    <div class="wrap ms-auto me-auto mt-5 pb-5">
      <MyInput title="Nama Barang" type="text" />
      <MyInput title="Harga Barang" type="text" />
      <MySelect title="Kategori" :data="kategori" />
      <MyTextarea title="Description" />

      <!-- ============== Button simpan ========= -->
      <div class="d-flex gap-2 mt-4" style="width: 100%">
        <button
          @click="router.push('/reviewproduct')"
          class="btn border-success text-success"
          style="width: 50%"
          type="button"
        >
          Review
        </button>
        <button class="btn btn-success" style="width: 50%" type="button">
          Terbitkan
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  width: 500px;
}
.card-image-tambah {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  margin-left: auto;
  margin-right: auto;
}
</style>
