export default [
  {
    path: "/",
    component: () => import("../pages/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import("../pages/works.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: () => import("../pages/reviews.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("../pages/login.vue"),
    meta: {
      public: true
    }
  }
];