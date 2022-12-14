<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const data = reactive({
  form: {
    namaUser: "",
    password: "",
  },
});

// const onLogin = async () => {
//   const getLogin = {
//     username: data.form.namaUser,
//     password: data.form.password,
//   };
//   await postUsers(getLogin)
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(() => {
//       alert("salah cuy");
//     });
// };
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
          <form @submit.prevent="onLogin">
            <h2 class="mb-3">Masuk</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                v-model="data.form.namaUser"
                type="text"
                placeholder="username"
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
                v-model="data.form.password"
                type="password"
                placeholder="Password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="d-grid">
              <button class="btn btn_masuk mt-2" type="submit">Masuk</button>
            </div>
            <div class="text-center mt-3">
              <p>
                belum punya akun?
                <span
                  @click="router.push('/register')"
                  class="daftar_title fw-bold"
                  role="button"
                  tabindex="0"
                  >Daftar disini</span
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
.daftar_title {
  color: var(--first-color);
}
.btn_masuk {
  background-color: var(--first-color);
  color: var(--text-color-light);
}
</style>
