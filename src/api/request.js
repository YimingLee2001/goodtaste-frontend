import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code === 1) {
      return data.data
    } else {
      ElMessage.error(data.msg)
      if (data.msg === 'NOTLOGIN') {
        router.push('/login')
      }
      return Promise.reject(new Error(data.msg))
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
