import request from '@/utils/request'

// 查询公共交通站点列表
export function listStopline(query) {
  return request({
    url: '/bus/stopline/list',
    // headers: {
    //   isToken: false
    // },
    method: 'get',
    params: query
  })
}

// 查询公共交通站点详细
export function getStopline(id) {
  return request({
    url: '/bus/stopline/' + id,
    // headers: {
    //   isToken: false
    // },
    method: 'get'
  })
}

// // 新增公共交通站点
// export function addStopline(data) {
//   return request({
//     url: '/bus/stopline',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改公共交通站点
// export function updateStopline(data) {
//   return request({
//     url: '/bus/stopline',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除公共交通站点
// export function delStopline(id) {
//   return request({
//     url: '/bus/stopline/' + id,
//     method: 'delete'
//   })
// }
