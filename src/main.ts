import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from './store'

const app = createApp(App)
app.use(router)
app.use(piniaStore)
app.mount('#app')
