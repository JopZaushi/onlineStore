import { createApp } from "vue";
import router from "./router/index";
//import store from "./store";
import App from "./App.vue";
//import BootstrapVue from 'bootstrap-vue';
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

app.use(router);
//app.use(BootstrapVue);
//app.use(IconsPlugin);
app.mount("#app");
