import router from "../router";
import { defineStore } from "pinia";
import { instance } from "../plugin/Api";
import { Textsearch } from "../stores/product";
import Swal from "sweetalert2";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("users")) || null,
    product: [],
    productId: [],
    categori: [],
    perPage: 30,
    idCategori: 0,
    Textsearch: "",
  }),
  getters: {
    // ======== Access Token ========
    getToken() {
      return this.userData?.access_token;
    },
  },
  actions: {
    // =========== LogOut ============
    logOut() {
      localStorage.removeItem("users");
      this.userData = null;
      router.push("/login");
    },
    // =========== Load More =======
    loadMore() {
      this.perPage += 30;
    },
    // =========== Post Register =========
    async register(payload) {
      await instance
        .post("/auth/register", payload)
        .then(() => {
          instance
            .post("/auth/login", {
              email: payload.email,
              password: payload.password,
            })
            .then((res) => {
              localStorage.setItem("users", JSON.stringify(res.data));
              this.userData = res.data;
              router.push("/");
            });
          router.push("/login");
        })
        .catch(() => {
          console.log("error");
        });
    },
    // =========== Post Login =============
    async postUsers(getLogin) {
      await instance
        .post("/auth/login", getLogin)
        .then((res) => {
          localStorage.setItem("users", JSON.stringify(res.data));
          this.userData = res.data;
          router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },
    // =========== Get Category ======
    async getCategory() {
      await instance.get("/seller/category").then(({ data }) => {
        console.log();
        this.categori = data;
      });
    },
    // =========== Get Buyer Product ===
    async getProduct() {
      await instance
        .get("/buyer/product", {
          params: {
            page: 1,
            per_page: this.perPage,
            category_id: this.idCategori || null,
            search: Textsearch.value || null,
          },
        })
        .then(({ data }) => {
          this.product = data;
        });
    },
    // =========== Get Buyer Detail Product =======
    async getProductId(idProduct) {
      await instance.get("/buyer/product/" + idProduct).then((Response) => {
        this.productId = Response.data;
      });
    },
    // =========== Get Seller Detail Product =======
    async postProduct(tambah) {
      await instance.post("/seller/product", tambah).then(() => {
        router.push("/tokosaya");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product berhasil ditambah",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
  },
});
