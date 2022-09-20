import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import piniaStore from './store';
import Vue3Lottie from 'vue3-lottie';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdPreview.use(githubTheme);

const app = createApp(App);
app.use(Vue3Lottie);
app.use(router);
app.use(piniaStore);
app.use(VMdPreview);
app.mount('#app');
