import request from '@/utils/request'

// 查询电影新闻列表
export function listPresspress(query) {
  return request({
    url: '/movie/presspress/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询电影新闻详细
export function getPresspress(id) {
  return request({
    url: '/movie/presspress/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增电影新闻
export function addPresspress(data) {
  return request({
    url: '/movie/presspress',
    method: 'post',
    data: data
  })
}

// 修改电影新闻
export function updatePresspress(data) {
  return request({
    url: '/movie/presspress',
    method: 'put',
    data: data
  })
}

// 删除电影新闻
export function delPresspress(id) {
  return request({
    url: '/movie/presspress/' + id,
    method: 'delete'
  })
}
