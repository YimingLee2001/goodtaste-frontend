import router from './index'
import store from '@/store'

const whiteList = ['/login', '/signup']
router.beforeEach((to, from, next) => {
  if (store.getters.uid) {
    if (to.path === './login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
