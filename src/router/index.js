import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/userInfo',
    children: [
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('@/views/userInfo/index.vue')
      },
      {
        path: 'mySeek',
        name: 'mySeek',
        component: () => import('@/views/mySeek/index.vue')
      },
      {
        path: 'allSeek',
        name: 'allSeek',
        component: () => import('@/views/allSeek/index.vue')
      },
      {
        path: 'localSeek',
        name: 'localSeek',
        component: () => import('@/views/localSeek/index.vue')
      },
      {
        path: 'myReply',
        name: 'myReply',
        component: () => import('@/views/myReply/index.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/order/index.vue')
      },
      {
        path: 'report',
        name: 'report',
        component: () => import('@/views/report/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
