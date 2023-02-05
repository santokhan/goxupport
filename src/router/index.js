import { createRouter, createWebHistory } from "vue-router";

const services = [{
  path: "/services/plumbing",
  name: "plumbing",
  component: () => import("../views/Plumbing.vue"),
},
{
  path: "/services/home-cleaning",
  name: "home-cleaning",
  component: () => import("../views/HomeCleaning.vue"),
},
{
  path: "/services/painting",
  name: "painting",
  component: () => import("../views/Painting.vue"),
},
{
  path: "/services/fumigation",
  name: "fumigation",
  component: () => import("../views/Fumigation.vue"),
},
{
  path: "/services/electrical",
  name: "electrical",
  component: () => import("../views/Electricals.vue"),
},
{
  path: "/services/moving-help",
  name: "moving-help",
  component: () => import("../views/MovingHelp.vue"),
},
{
  path: "/services/air-condition",
  name: "air-condition",
  component: () => import("../views/AirCondition.vue"),
},
{
  path: "/services/cctv",
  name: "cctv",
  component: () => import("../views/AirCondition.vue"),
},
{
  path: "/services/it-service",
  name: "it-service",
  component: () => import("../views/ITService.vue"),
},
{
  path: "/services/maintenance",
  name: "maintenance",
  component: () => import("../views/HomeMaintenance.vue"),
},
{
  path: "/services/wifi",
  name: "wifi",
  component: () => import("../views/WiFi.vue"),
},
{
  path: "/services/general-cleaning",
  name: "general-cleaning",
  component: () => import("../views/ITService.vue"),
},
]

const others = [
  {
    path: "/services/tv",
    name: "tv",
    component: () => import("../views/others/TV.vue"),
  },
  {
    path: "/services/dish",
    name: "dish",
    component: () => import("../views/others/Dish.vue"),
  },
  {
    path: "/services/disposal",
    name: "disposal",
    component: () => import("../views/others/Disposal.vue"),
  },
  {
    path: "/services/theatre",
    name: "theatre",
    component: () => import("../views/others/Theatre.vue"),
  },
  {
    path: "/services/tiles",
    name: "tiles",
    component: () => import("../views/others/Tiles.vue"),
  },
  {
    path: "/services/handrail",
    name: "handrail",
    component: () => import("../views/others/Handrail.vue"),
  },
  {
    path: "/services/curtains",
    name: "curtains",
    component: () => import("../views/others/Curtains.vue"),
  },
  {
    path: "/services/window",
    name: "window",
    component: () => import("../views/others/Window.vue"),
  },
]

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/Help.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../views/Terms.vue"),
  },
  {
    path: "/happiness",
    name: "happiness",
    component: () => import("../views/Happiness.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/cancellation-policy",
    name: "cancellation-policy",
    component: () => import("../views/Cancellation.vue"),
  },
  {
    path: "/become-a-pro",
    name: "become-a-pro",
    component: () => import("../views/BecomeAPro.vue"),
  },
  ...services,
  ...others
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes
});
