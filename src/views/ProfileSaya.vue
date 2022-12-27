<script setup>
import { useAuthStore } from "@/stores";
import { onMounted } from "vue";

onMounted(() => {
  useAuthStore().getUser();
});
</script>
<template>
  <div id="bodi" class="mains">
    <div class="profile_containers">
      <div>
        <div class="profile_image">
          <img :src="useAuthStore().userId.image_url" />
        </div>
        <botton class="btn_ubah_image">Ubah Foto</botton>
      </div>
      <div>
        <div class="profile_detail">
          <h3>Ubah biodatamu</h3>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Name</p>
            <span class="me-4">{{ useAuthStore().userId.full_name }}</span>
          </div>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Alamat</p>
            <span class="me-4">{{ useAuthStore().userId.address }}</span>
          </div>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Kota</p>
            <span class="me-4">{{ useAuthStore().userId.city }}</span>
          </div>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Nomor Hp</p>
            <span class="me-4">{{ useAuthStore().userId.phone_number }}</span>
          </div>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Email</p>
            <span class="me-4">{{ useAuthStore().userId.email }}</span>
          </div>
          <div class="profile_detail_item">
            <p class="profile_title m-0">Password</p>
            <span class="me-4">{{ useAuthStore().userId.password }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profile_containers {
  display: grid;
  grid-template-columns: 300px auto;
  gap: 2rem;
}
.profile_image {
  width: 300px;
  height: 300px;
  background-color: #ccc;
  border-radius: 1rem;
  overflow: hidden;
}
.profile_detail {
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
}
.profile_detail h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.profile_detail_item {
  display: flex;
  margin-bottom: 1rem;
}
.profile_title {
  width: 150px;
}
.btn_ubah_image {
  width: 100%;
  border: 1px solid #ccc;
  display: block;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 500;
}
.btn_ubah_image:hover {
  background-color: rgb(235, 234, 234);
}
</style>
