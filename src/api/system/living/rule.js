import request from '@/utils/request'

// 查询话费充值优惠策略列表
export function listRule(query) {
  return request({
    url: '/living/rule/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询话费充值优惠策略详细
export function getRule(id) {
  return request({
    url: '/living/rule/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增话费充值优惠策略
// export function addRule(data) {
//   return request({
//     url: '/living/rule',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改话费充值优惠策略
// export function updateRule(data) {
//   return request({
//     url: '/living/rule',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除话费充值优惠策略
// export function delRule(id) {
//   return request({
//     url: '/living/rule/' + id,
//     method: 'delete'
//   })
// }
