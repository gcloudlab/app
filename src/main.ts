import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import piniaStore from '@/plugins/pinia';
import Vue3Lottie from '@/plugins/vue3-lottie';
import VMdPreview from '@/plugins/v-md-preview';
import VMdEditor from '@/plugins/v-md-editor';

const app = createApp(App);
app.use(Vue3Lottie);
app.use(router);
app.use(piniaStore);
app.use(VMdPreview);
app.use(VMdEditor);
app.mount('#app');
