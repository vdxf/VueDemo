import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vant from 'vant'
import './assets/js/flexible.js'
import 'vant/lib/index.css'
import '@/assets/icon/iconfont.css'
import { Toast } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant)
app.use(Toast)

app.mount('#app')
