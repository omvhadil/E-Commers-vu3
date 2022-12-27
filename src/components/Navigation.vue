<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { debounce } from "lodash";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Textsearch } from "../stores/product";
import { useAuthStore } from "../stores";

const autStore = useAuthStore();
const router = useRouter();
const dropdown = reactive({
  profile: false,
});
const navbar = ref(null);
const logo = ref(null);

window.onscroll = function () {
  var scrollUp = window.pageYOffset;
  if (scrollUp > 80) {
    navbar.value.classList.add("bg-scrool");
    logo.value.classList.add("logo-scrool");
  } else {
    navbar.value.classList.remove("bg-scrool");
    logo.value.classList.remove("logo-scrool");
  }
};
const onlogOut = () => {
  autStore.logOut();
};
const delaySearch = debounce((e) => {
  Textsearch.value = e.target.value;
}, 500);
</script>
<template>
  <nav
    class="navbar navbar-light navbar-expand-lg position-fixed top-0 w-100"
    ref="navbar"
  >
    <div class="container-fluid" id="bodi">
      <!-- === Logo === -->
      <a ref="logo" @click="router.push('/')" class="navbar-brand">
        ♻ SeconHand
      </a>
      <!-- === Searcing === -->
      <form>
        <input
          class="form-control me-2 nav-search"
          type="text"
          placeholder="Cari ..."
          aria-label="Search"
          @input="delaySearch"
        />
      </form>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- === Menu === -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-4">
          <li @click="router.push('/tokosaya')" class="nav-item nav_link">
            <i class="ri-list-check text-dark icon me-1"></i>
          </li>
          <li class="nav-item nav_link">
            <i class="ri-notification-4-line text-dark icon me-1"></i>
          </li>
          <!-- ========== Profile ===================== -->
          <li
            v-if="autStore.getToken"
            class="nav-item"
            @click="dropdown.profile = !dropdown.profile"
          >
            <div class="nav_link">
              <i class="ri-user-3-line text-dark icon me-1"></i>
              <span class="text_menu">Profile</span>
            </div>
            <!-- ---- Dropdown Profile ----  -->
            <div
              class="drop_profile_container"
              :class="{ drop_profile_active: dropdown.profile }"
            >
              <ul class="drop_profile">
                <li class="drop_list_item">
                  <div class="drop_info_profile_image">
                    <img src="../assets/logo.svg" />
                  </div>
                  <h5 class="m-0">Fadilatur Rohman</h5>
                </li>
                <hr />
                <li @click="router.push('/profilesaya')" class="drop_list_item">
                  <i class="ri-user-follow-line"></i>
                  <p class="drop_title m-0">Profile Saya</p>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
                <li @click="router.push('/tawaransaya')" class="drop_list_item">
                  <i class="ri-building-fill"></i>
                  <p class="drop_title m-0">Tawaran Saya</p>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
                <li class="drop_list_item">
                  <i class="ri-heart-2-fill"></i>
                  <p class="drop_title m-0">Whislish</p>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
                <li @click="onlogOut" class="drop_list_item">
                  <i class="ri-logout-box-r-line"></i>
                  <p class="drop_title m-0">Log Out</p>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
              </ul>
            </div>
          </li>
          <!-- ===== button login ================ -->
          <button
            v-else
            @click="router.push('/login')"
            class="btn d-flex align-items-center btn_login"
            type="submit"
          >
            <i class="ri-login-box-line icon text-white me-2"></i>
            <span>Login</span>
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  height: 4rem;
  background-color: var(--body-color);
  z-index: 99;
}
.bg-scrool {
  background-color: var(--first-color);
}
.logo-scrool {
  color: #fff !important;
}
/* ===== Logo =====*/
.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--first-color);
  cursor: pointer;
}
/* ===== Menu =====*/
.icon {
  font-size: 1.3rem;
  font-weight: 300;
}
.nav-item {
  cursor: pointer;
}
.btn_login {
  display: inline-flex;
  background-color: var(--first-color);
  color: var(--text-color-light);
}
/* ===== Toggle =====*/
.navbar-toggler:focus {
  box-shadow: none;
}
.text_menu {
  display: none;
}
.navbar-toggler {
  border: none;
}
.navbar-collapse.show {
  background-color: var(--body-color);
}
/* ===== Modal =====*/
.drop_profile_container {
  position: absolute;
  top: 100%;
  right: 10%;
  width: 15rem;
  max-height: 0px;
  transition: max-height 0.4s;
  overflow: hidden;
}
.drop_profile_active {
  max-height: 400px;
}
.drop_profile {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  display: grid;
  row-gap: 1rem;
}
.drop_list_item {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.drop_list_item:hover {
  font-weight: 700;
}
.drop_info_profile_image {
  width: 30px;
  height: 30px;
}
.drop_title {
  width: 100%;
}
hr {
  margin: 0.1rem 0;
}
/* ====== BreacPoint Mobile Device ====== */
@media screen and (max-width: 567px) {
  /* = Logo = */
  .navbar-brand {
    display: none;
  }
  .nav-search {
    width: 200px;
  }
  .title-icon {
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    color: #000;
  }

  .navbar-collapse {
    padding: 1rem 0.8rem;
  }
  .card-image {
    width: 20px;
    height: 20px;
  }
  .text_menu {
    display: flex;
  }
  .nav_link {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  .nav_link:hover {
    color: blue;
  }
}
</style>
