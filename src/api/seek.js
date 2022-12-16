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
    data: seek
  })
}

export const seekUpdateById = (seek) => {
  return request({
    url: 'seek/updatebyid',
    method: 'POST',
    data: seek
  })
}

export const seekRemoveById = (seek) => {
  return request({
    url: 'seek/removebyid',
    method: 'DELETE',
    data: seek
  })
}

export const seekPageByCity = (pageQueryCity) => {
  return request({
    url: 'seek/pagebycity',
    method: 'GET',
    params: {
      page: pageQueryCity.page,
      pageSize: pageQueryCity.pageSize,
      city: pageQueryCity.city
    }
  })
}

export const seekConfirmById = (reply) => {
  return request({
    url: 'seek/confirmbyid',
    method: 'POST',
    data: reply
  })
}
