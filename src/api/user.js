import request from './request'

export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export const signup = (data) => {
  return request({
    url: '/user/signup',
    method: 'POST',
    data
  })
}

export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'POST'
  })
}

export const userPage = (data) => {
  return request({
    url: '/user/page',
    method: 'GET',
    data
  })
}
