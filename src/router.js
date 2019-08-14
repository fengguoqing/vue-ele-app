import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/goods",
      name: "goods",
      component: () => import("./views/goods/goods.vue")
    },
    {
      path: "/ratings",
      name: "ratings",
      component: () => import("./views/ratings/ratings.vue")
    },
    {
      path: "/seller",
      name: "seller",
      component: () => import("./views/seller/seller.vue")
    }
  ]
});
