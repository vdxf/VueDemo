import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: () => import('@/views/MainView'),
        meta: {
            title: 'vant',
            station: 0,
        },

    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView'),
        meta: {
            title: '首页',
            station: 1,
        },
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('@/views/AccountView'),
        meta: {
            title: '记账',
            station: 2,
        },
    },
    {
        path: '/bill',
        name: 'bill',
        component: () => import('@/views/BillView'),
        meta: {
            title: '账单',
            station: 3,
        },
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/ChartView'),
        meta: {
            title: '分析',
            station: 4,
        },
    },
    {
        path: '/consumption',
        name: 'consumption',
        component: () => import('@/views/ConsumptionView'),
        meta: {
            title: '消费',
            station: 5,
        },
    },
    {
        path: '/entry',
        name: 'entry',
        component: () => import('@/views/EntryView'),
        meta: {
            title: '入账',
            station: 5,
        },
    },
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/NotFound'),
        meta: {
            title: '404',
            station: 6,
        }
    }
]
const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    const {title} = to.meta || {}
    document.title = title || 'test'
})
export default router