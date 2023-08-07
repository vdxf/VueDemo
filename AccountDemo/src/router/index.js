import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: '/home',
        component: () => import('@/views/MainView'),
        meta: {title: 'vant'},
        children: [
            {
                path: '/home',
                component: () => import('@/views/HomeView'),
                meta: {title: '首页'},
            },
            {
                path: '/account',
                component: () => import('@/views/AccountView'),
                meta: {title: '记账'},
            },
            {
                path: '/bill',
                component: () => import('@/views/BillView'),
                meta: {title: '账单'},
            },
            {
                path: '/chart',
                component: () => import('@/views/ChartView'),
                meta: {title: '分析'},
            },
            {
                path: '/consumption',
                component: () => import('@/views/ConsumptionView'),
                meta: {title: '消费'},
            },
            {
                path: '/entry',
                component: () => import('@/views/EntryView'),
                meta: {title: '入账'},
            },
        ]
    },
]
const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    const {title} = to.meta || {}
    document.title = title || 'test'
})
export default router