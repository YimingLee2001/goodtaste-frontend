import request from './request'

export const login = (user) => {
  console.log(user)
  return request({
    url: '/user/login',
    method: 'POST',
    data: user
  })
}

export const signup = (user) => {
  return request({
    url: '/user/signup',
    method: 'POST',
    data: user
  })
}

export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'POST'
  })
}

export const userPage = (pageQueryNickname) => {
  return request({
    url: '/user/pagebynickname',
    method: 'GET',
    params: {
      page: pageQueryNickname.page,
      pageSize: pageQueryNickname.pageSize,
      nickname: pageQueryNickname.nickname
    }
  })
}

export const userGetById = (uid) => {
  return request({
    url: '/user/getbyid',
    method: 'GET',
    params: {
      uid: uid
    }
  })
}

export const userUpdateById = (user) => {
  return request({
    url: '/user/updatebyid',
    method: 'POST',
    data: user
  })
}

export const userUpdatePasswordById = (user) => {
  return request({
    url: '/user/updatepasswordbyid',
    method: 'POST',
    data: user
  })
}
