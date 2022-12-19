import { defineStore } from "pinia";
import { instance } from "../plugin";

export const useSellerStore = defineStore("seller", {
  state: () => ({
    orderProduct: [],
  }),
  getters: {},
  actions: {
    async getSellerProduct() {
      await instance
        .get("/seller/order", {
          params: {
            status: "",
          },
        })
        .then(({ data }) => {
          this.orderProduct = data;
        });
    },
  },
});
