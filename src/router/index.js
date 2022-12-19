import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/PrimaryLayout.vue"),
      children: [
        {
          path: "/",
          name: "Home View",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/detailsellerproduct/:id",
          name: "deatil seller peoduct",
          component: () => import("../views/detailSellerProduct.vue"),
        },
        {
          path: "/reviewproduct",
          name: "review",
          props: (router) => ({
            ...router.params,
          }),
          component: () => import("../views/ReviewProduct.vue"),
        },
        {
          path: "/tokosaya",
          name: "toko saya",
          component: () => import("../views/productPenjual/TokoSaya.vue"),
          children: [
            {
              path: "",
              name: "toko saya",
              component: () =>
                import("../views/productPenjual/ProductToko.vue"),
            },
            {
              path: "/tokosaya/diminati",
              name: "diminati",
              component: () => import("../views/productPenjual/Diminati.vue"),
            },
            {
              path: "/tokosaya/terjual",
              name: "terjual",
              component: () => import("../views/productPenjual/Tejual.vue"),
            },
          ],
        },
        {
          path: "/profilesaya",
          name: "profile saya",
          component: () => import("../views/ProfileSaya.vue"),
        },
        {
          path: "/forminfoakun",
          name: "Info Akun",
          component: () => import("../views/FormInfoAkun.vue"),
        },
        {
          path: "/formtambahproduct",
          name: "Form Tambah Product",
          component: () => import("../views/FormTambahProduct.vue"),
        },
        {
          path: "/infopenawar",
          name: "Info Penawar",
          component: () => import("../views/InfoPenawar.vue"),
        },
        {
          path: "/detailproduct/:id",
          name: "Detail Product",
          component: () => import("../views/DetailProoduct.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/FullLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../views/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/Register.vue"),
        },
      ],
    },
  ],
});

export default router;
