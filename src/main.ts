import { themeOverrides } from './assets/style/theme';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import piniaStore from './store';
import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
import '@/assets/style/tailwindcss.scss';
import '@/assets/style/themeOverride.scss';

const app = createApp(App);
app.use(Vue3Lottie);
app.use(router);
app.use(piniaStore);
app.mount('#app');
