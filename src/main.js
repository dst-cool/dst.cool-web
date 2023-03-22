import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  '@/assets/js/iconfont.js';

import App from './App.vue'
import router from './router'
import mobile from "is-mobile";
import '@/assets/css/main.css'

const app = createApp(App)

app.config.globalProperties.$isMoblie = mobile()


app.use(router)
app.use(createPinia())
app.mount('#app')
