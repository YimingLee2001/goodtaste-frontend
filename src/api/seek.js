import request from './request'

export const seekPageByTopic = (pageQueryTopic) => {
  return request({
    url: 'seek/pagebytopic',
    method: 'GET',
    params: {
      page: pageQueryTopic.page,
      pageSize: pageQueryTopic.pageSize,
      topic: pageQueryTopic.topic
    }
  })
}

export const seekPageByUser = (pageQueryUser) => {
  return request({
    url: 'seek/pagebyuser',
    method: 'GET',
    params: {
      page: pageQueryUser.page,
      pageSize: pageQueryUser.pageSize,
      uid: pageQueryUser.uid
    }
  })
}

export const seekGetById = (sid) => {
  return request({
    url: 'seek/getbyid',
    method: 'GET',
    params: {
      sid: sid
    }
  })
}

export const seekAdd = (seek) => {
  return request({
    url: 'seek/add',
    method: 'POST',
    seek
  })
}

export const seekUpdateById = (seek) => {
  return request({
    url: 'seek/updatebyid',
    method: 'POST',
    seek
  })
}

export const seekRemoveById = (seek) => {
  return request({
    url: 'seek/removebyid',
    methon: 'DELETE',
    seek
  })
}
