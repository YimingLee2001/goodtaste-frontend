import request from './request'

export const statPageByCityTime = (pageQueryCityTime) => {
  return request({
    url: 'stat/pagebycitytime',
    method: 'GET',
    params: {
      page: pageQueryCityTime.page,
      pageSize: pageQueryCityTime.pageSize,
      startTime: pageQueryCityTime.startTime,
      endTime: pageQueryCityTime.endTime,
      city: pageQueryCityTime.city
    }
  })
}

export const statListByCityTime = (listQueryCityTime) => {
  return request({
    url: 'stat/listbycitytime',
    method: 'GET',
    params: {
      city: listQueryCityTime.city,
      startTime: listQueryCityTime.startTime,
      endTime: listQueryCityTime.endTime
    }
  })
}
