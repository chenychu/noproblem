import request from '@/utils/request'

// 查询充值记录列表
export function listRecharge(query) {
  return request({
    url: '/park/recharge/list',
    method: 'get',
    params: query
  })
}

// 查询充值记录详细
export function getRecharge(id) {
  return request({
    url: '/park/recharge/' + id,
    method: 'get'
  })
}

// 新增充值记录
export function addRecharge(data) {
  return request({
    url: '/park/recharge/pay',
    method: 'post',
    data: data
  })
}

// // 修改充值记录
// export function updateRecharge(data) {
//   return request({
//     url: '/park/recharge',
//     method: 'put',
//     data: data
//   })
// }

// 删除充值记录
export function delRecharge(id) {
  return request({
    url: '/park/recharge/' + id,
    method: 'delete'
  })
}
