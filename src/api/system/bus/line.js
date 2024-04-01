import request from '@/utils/request'

// 查询公共交通线路列表
export function listLine(query) {
  return request({
    url: '/bus/line/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询公共交通线路详细
export function getLine(id) {
  return request({
    url: '/bus/line/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增公共交通线路
// export function addLine(data) {
//   return request({
//     url: '/bus/line',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改公共交通线路
// export function updateLine(data) {
//   return request({
//     url: '/bus/line',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除公共交通线路
// export function delLine(id) {
//   return request({
//     url: '/bus/line/' + id,
//     method: 'delete'
//   })
// }
