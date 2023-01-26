import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

import "./style.css";
import "./assets/css/custom.css";
import "./assets/css/choose-us.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
