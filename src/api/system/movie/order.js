import request from '@/utils/request'

// 查询电影订单列表
export function listOrder(query) {
  return request({
    url: '/movie/order/list',
    method: 'get',
    params: query
  })
}

// 查询电影订单详细
export function getOrder(id) {
  return request({
    url: '/movie/order/' + id,
    method: 'get'
  })
}

// 新增电影订单
export function addOrder(data) {
  return request({
    url: '/movie/order',
    method: 'post',
    data: data
  })
}

// 修改电影订单
export function updateOrder(data) {
  return request({
    url: '/movie/order',
    method: 'put',
    data: data
  })
}

// 删除电影订单
export function delOrder(id) {
  return request({
    url: '/movie/order/' + id,
    method: 'delete'
  })
}
