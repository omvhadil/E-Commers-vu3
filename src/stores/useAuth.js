import { defineStore } from "pinia";
import { instance } from "../plugin/Api";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("users")) || null,
  }),
  getters: {
    // ======== Access Token ========
    getToken() {
      return this.userData?.access_token;
    },
  },
  actions: {
    // =========== Register =========
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
    // =========== Login =============
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
    // ========== LogOut ============
    logOut() {
      localStorage.removeItem("users");
      this.userData = null;
      router.push("/login");
    },
  },
});
