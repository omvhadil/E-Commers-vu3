<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { debounce } from "lodash";
import { useRouter } from "vue-router";
import { Textsearch } from "../stores/product";

const router = useRouter();

const delaySearch = debounce((e) => {
  Textsearch.value = e.target.value;
}, 500);
</script>
<template>
  <nav class="navbar navbar-light navbar-expand-lg shadow-sm">
    <div class="container-fluid section">
      <a class="navbar-brand text-success" style="font-weight: 800">
        ALABIMSHOP
      </a>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-4">
          <!-- ===== button login ================ -->
          <!-- <button
            @click="router.push('/login')"
            class="btn d-flex align-items-center btn-success"
            type="submit"
          >
            <i class="ri-login-box-line icon text-white me-2"></i>
            <span>Login</span>
          </button> -->
          <!-- ========== Ketika sudah login ============= -->
          <!-- ========== list ============= -->
          <li class="nav-item nav_link d-flex" style="align-items: center">
            <i class="ri-list-check text-dark icon me-1"></i>
            <span class="text_menu">Product List</span>
          </li>
          <!-- ========== Notification ============ -->
          <li class="nav-item d-flex" style="align-items: center">
            <div class="btn-group">
              <div
                class="nav_link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ri-notification-4-line text-dark icon me-1"></i>
                <span class="text_menu">Notification</span>
              </div>

              <ul
                class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end"
                style="width: 400px"
              >
                <!-- =========== product item 1 ============ -->

                <li
                  @click="router.push('/infopenawar')"
                  style="height: 70px"
                  class="dropdown-item mb-2"
                >
                  <div class="wrap d-flex gap-3">
                    <div
                      class="card-image-product rounded"
                      style="width: 60px; height: 60px; overflow: hidden"
                    >
                      <img
                        src="../assets/jam-tangan1.jfif"
                        style="height: 100%; object-fit: cover"
                      />
                    </div>
                    <div class="detail">
                      <h6 class="m-0">Jam tangan casio</h6>
                      <span class="text-small">Harga : Rp 120.000</span>
                      <p class="text-small">Ditawar : Rp 70.000</p>
                    </div>
                  </div>
                </li>
                <!-- =========== product item 1 ============ -->
                <li style="height: 70px" class="dropdown-item">
                  <div class="wrap d-flex gap-3">
                    <div
                      class="card-image-product rounded"
                      style="width: 60px; height: 60px; overflow: hidden"
                    >
                      <img
                        src="../assets/jam-tangan1.jfif"
                        style="height: 100%; object-fit: cover"
                      />
                    </div>
                    <div class="detail">
                      <h6 class="m-0">Jam tangan casio</h6>
                      <span class="text-small">Harga : Rp 120.000</span>
                      <p class="text-small">Ditawar : Rp 70.000</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!-- ========== Profile ===================== -->
          <li class="nav-item d-flex" style="align-items: center">
            <div class="btn-group">
              <div
                class="card-image me-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/Profile.jpg" class="image-profile" />
              </div>
              <span class="nav_link text_menu">Product List</span>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                <li>
                  <span
                    @click="router.push('/profilesaya')"
                    class="dropdown-item"
                    href="#"
                    >Profile</span
                  >
                </li>
                <li>
                  <span
                    @click="router.push('/tokosaya')"
                    class="dropdown-item"
                    href="#"
                  >
                    Toko Saya
                  </span>
                </li>
                <li>
                  <span
                    @click="router.push('/login')"
                    class="dropdown-item"
                    href="#"
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scope>
.title-icon {
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  color: #000;
}
.nav-item {
  cursor: pointer;
}
.card-image {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.text_menu {
  display: none;
}
/* ======= small ================ */

@media screen and (max-width: 393px) {
  .nav-search {
    width: 200px;
  }
  .navbar-brand {
    display: none;
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
