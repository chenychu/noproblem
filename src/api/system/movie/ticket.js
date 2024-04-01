import request from '@/utils/request'

// 查询电影购票订单明细列表
export function listTicket(query) {
  return request({
    url: '/movie/ticket/list',
    method: 'get',
    params: query
  })
}

// 查询电影购票订单明细详细
export function getTicket(id) {
  return request({
    url: '/movie/ticket/' + id,
    method: 'get'
  })
}

// 新增电影购票订单明细
export function addTicket(data) {
  return request({
    url: '/movie/ticket',
    method: 'post',
    data: data
  })
}

// 修改电影购票订单明细
export function updateTicket(data) {
  return request({
    url: '/movie/ticket',
    method: 'put',
    data: data
  })
}

// 删除电影购票订单明细
export function delTicket(id) {
  return request({
    url: '/movie/ticket/' + id,
    method: 'delete'
  })
}
