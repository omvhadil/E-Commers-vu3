<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores";

const router = useRouter();

const users = reactive({
  fullname: "",
  email: "",
  password: "",
});

const onRegister = () => {
  useAuthStore().register(users);
};
</script>
<template>
  <div class="container p-0" style="max-width: 100%">
    <div class="row">
      <div class="col-6">
        <div style="width: 100%; height: 100vh">
          <img src="../assets/hero-login.jpg" alt="" class="image-hero" />
        </div>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <div class="content-login">
          <form @submit.prevent="onRegister">
            <h2 class="mb-3">Daftar</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input
                v-model="users.fullname"
                type="text"
                class="form-control"
                placeholder="Name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                v-model="users.email"
                type="email"
                placeholder="Username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="users.password"
                type="password"
                placeholder="Pasword"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="d-grid">
              <button class="btn btn_daftar mt-2" type="submit">Daftar</button>
            </div>
            <div class="text-center mt-3">
              <p>
                sudah punya akun?
                <span
                  @click="router.push('/login')"
                  class="login_title fw-bold"
                  role="button"
                  tabindex="0"
                  >Masuk disini</span
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image-hero {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-login {
  width: 400px;
  padding: 1rem;
}
.container {
  overflow: hidden;
}
.login_title {
  color: var(--first-color);
}
.btn_daftar {
  background-color: var(--first-color);
  color: var(--text-color-light);
}
</style>
