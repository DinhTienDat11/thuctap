import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 👉 import router

const app = createApp(App)
app.use(router) // 👉 gắn router vào app
app.mount('#app')
 