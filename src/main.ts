import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import piniaStore from './store';
import './assets/style/tailwindcss.css';

const app = createApp(App);
app.use(router);
app.use(piniaStore);
app.mount('#app');
