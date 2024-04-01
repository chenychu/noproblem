import request from '@/utils/request'

// 查询轮播广告列表
export function listRotation(query) {
  return request({
    url: '/living/rotation/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询轮播广告详细
export function getRotation(id) {
  return request({
    url: '/living/rotation/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增轮播广告
// export function addRotation(data) {
//   return request({
//     url: '/living/rotation',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改轮播广告
// export function updateRotation(data) {
//   return request({
//     url: '/living/rotation',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除轮播广告
// export function delRotation(id) {
//   return request({
//     url: '/living/rotation/' + id,
//     method: 'delete'
//   })
// }
