import request from './request'

export const replyAdd = (reply) => {
  return request({
    url: 'reply/add',
    method: 'POST',
    data: reply
  })
}

export const replyUpdateById = (reply) => {
  return request({
    url: 'reply/updatebyid',
    method: 'POST',
    data: reply
  })
}

export const replyPageByUser = (pageQueryUser) => {
  return request({
    url: 'reply/pagebyuser',
    method: 'GET',
    params: {
      page: pageQueryUser.page,
      pageSize: pageQueryUser.pageSize,
      uid: pageQueryUser.uid
    }
  })
}

export const replyRemoveById = (reply) => {
  return request({
    url: 'reply/removebyid',
    method: 'DELETE',
    data: reply
  })
}

export const replyPageBySeek = (pageQuerySeek) => {
  return request({
    url: 'reply/pagebyseek',
    method: 'GET',
    params: {
      page: pageQuerySeek.page,
      pageSize: pageQuerySeek.pageSize,
      sid: pageQuerySeek.sid
    }
  })
}
