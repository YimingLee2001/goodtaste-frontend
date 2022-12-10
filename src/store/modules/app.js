import { login as loginApi, logout as logoutApi } from '@/api/user'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    // token: localStorage.getItem('token') || '',
    siderType: true,
    avatarUrl: localStorage.getItem('avatarUrl') || '',
    uid: localStorage.getItem('uid') || '',
    province: localStorage.getItem('province') || '',
    city: localStorage.getItem('city') || ''
  }),
  mutations: {
    changeSiderType(state) {
      state.siderType = !state.siderType
    },
    setAvatar(state, avatarUrl) {
      state.avatarUrl = avatarUrl
      localStorage.setItem('avatarUrl', avatarUrl)
    },
    setUid(state, uid) {
      state.uid = uid
      localStorage.setItem('uid', uid)
    },
    setProvince(state, province) {
      state.province = province
      localStorage.setItem('province', province)
    },
    setCity(state, city) {
      state.city = city
      localStorage.setItem('city', city)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((res) => {
            // commit('setToken', res.token)
            commit('setAvatar', res.avatarUrl)
            commit('setUid', res.uid)
            commit('setProvince', res.province)
            commit('setCity', res.city)
            router.replace('/userInfo')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logoutApi()
          .then((res) => {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
