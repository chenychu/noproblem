import request from '@/utils/request'

// 查询智慧巴士订单列表
export function listOrder(query) {
  return request({
    url: '/bus/order/list',
    method: 'get',
    params: query
  })
}

// 查询智慧巴士订单详细
export function getOrder(id) {
  return request({
    url: '/bus/order/' + id,
    method: 'get'
  })
}

// 新增智慧巴士订单
export function addOrder(data) {
  return request({
    url: '/bus/order',
    method: 'post',
    data: data
  })
}

// // 修改智慧巴士订单
// export function updateOrder(data) {
//   return request({
//     url: '/bus/order',
//     method: 'put',
//     data: data
//   })
// }

// 删除智慧巴士订单
export function delOrder(id) {
  return request({
    url: '/bus/order/' + id,
    method: 'delete'
  })
}
