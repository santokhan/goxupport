import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import Services from "../views/Services.vue";
import Happiness from "../views/Happiness.vue";
import Contact from "../views/Contact.vue";
import Help from "../views/Help.vue";
import About from "../views/About.vue";
import Terms from "../views/Terms.vue";

import Plumbing from "../views/Plumbing.vue";
import HomeCleaning from "../views/HomeCleaning.vue";
import Painting from "../views/Painting.vue";
import Fumigation from "../views/Fumigation.vue";
import Electricals from "../views/Electricals.vue";
import AirCondition from "../views/AirCondition.vue";
import MovingHelp from "../views/MovingHelp.vue";
import CCTV from "../views/CCTV.vue";
import WiFi from "../views/WiFi.vue";
import ITService from "../views/ITService.vue";
import Maintenance from "../views/HomeMaintenance.vue";
import GeneralCleaning from "../views/GeneralCleaning.vue";

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/help",
      name: "help",
      component: Help,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/happiness",
      name: "happiness",
      component: Happiness,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/cancellation-policy",
      name: "cancellation-policy",
      component: About,
    },
    {
      path: "/services/plumbing",
      name: "plumbing",
      component: Plumbing,
    },
    {
      path: "/services/home-cleaning",
      name: "home-cleaning",
      component: HomeCleaning,
    },
    {
      path: "/services/painting",
      name: "painting",
      component: Painting,
    },
    {
      path: "/services/fumigation",
      name: "fumigation",
      component: Fumigation,
    },
    {
      path: "/services/electrical",
      name: "electrical",
      component: Electricals,
    },
    {
      path: "/services/moving-help",
      name: "moving-help",
      component: MovingHelp,
    },
    {
      path: "/services/air-condition",
      name: "air-condition",
      component: AirCondition,
    },
    {
      path: "/services/cctv",
      name: "cctv",
      component: CCTV,
    },
    {
      path: "/services/it-service",
      name: "it-service",
      component: ITService,
    },
    {
      path: "/services/maintenance",
      name: "maintenanceit",
      component: Maintenance,
    },
    {
      path: "/services/wifi",
      name: "wifi",
      component: WiFi,
    },
    {
      path: "/services/general-cleaning",
      name: "general-cleaning",
      component: GeneralCleaning,
    },
  ],
});
