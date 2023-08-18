import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: 'home',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/user',
          name: 'UserView',
          component: () => import('@/views/UserView.vue'),
          meta: { title: '用户信息' }
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { title: '注册账号' }
    },
    {
      path: '/imagecreate',
      name: 'ImageCreate',
      component: () => import('@/views/ImageCreate.vue'),
      meta: { title: '创建相片' }
    },
    {
      path: '/imagedetail',
      name: 'ImageDetail',
      component: () => import('@/views/ImageDetail.vue'),
      meta: { title: '相片详情' }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: () => import('@/views/NotFount.vue'),
      meta: { title: '404' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    if (to.path === '/login') {
      // 已登录
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (to.path !== '/login' && to.path !== '/register') {
      if (to.path === '/register') {
        next('/register')
      }
      next('/login')
    } else {
      next()
    }
  }
})
router.afterEach((to, from) => {
  const { title } = to.meta || {}
  document.title = title || '立减金'
})

export default router
