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
