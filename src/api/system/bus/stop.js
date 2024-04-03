import request from '@/utils/request'

// 查询公共交通线路站点中间列表
export function listStop(query) {
  return request({
    url: '/bus/stop/list',
    method: 'get',
    params: query
  })
}

// 查询公共交通线路站点中间详细
export function getStop(id) {
  return request({
    url: '/bus/stop/' + id,
    method: 'get'
  })
}

// // 新增公共交通线路站点中间
// export function addStop(data) {
//   return request({
//     url: '/bus/stop',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改公共交通线路站点中间
// export function updateStop(data) {
//   return request({
//     url: '/bus/stop',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除公共交通线路站点中间
// export function delStop(id) {
//   return request({
//     url: '/bus/stop/' + id,
//     method: 'delete'
//   })
// }
