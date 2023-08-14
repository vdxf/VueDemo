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
          component: () => import('@/views/HomeView.vue')
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
    }
  ]
})

export default router
