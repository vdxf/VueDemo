import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

import "@/assets/js/flexible"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})