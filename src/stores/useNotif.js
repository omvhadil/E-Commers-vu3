import { defineStore } from "pinia";
import { instance } from "../plugin";

export const useNotifStore = defineStore("notif", {
  state: () => ({
    notification: [],
  }),
  getters: {},
  actions: {
    async getNotif() {
      await instance.get("/notification").then((res) => {
        this.notification = res.data;
      });
    },
  },
});
