import { defineStore } from "pinia";
import { instance } from "../plugin/Api";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("userData")),
  }),
  getters: {},
  actions: {
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
              localStorage.setItem("userData", JSON.stringify(res.data));
              this.userData = res.data;
              router.push("/");
            });
          router.push("/login");
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
});
