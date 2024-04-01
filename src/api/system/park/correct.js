import request from '@/utils/request'

// 查询停车场纠错信息列表
export function listCorrect(query) {
  return request({
    url: '/park/correct/list',
    method: 'get',
    params: query
  })
}

// 查询停车场纠错信息详细
export function getCorrect(id) {
  return request({
    url: '/park/correct/' + id,
    method: 'get'
  })
}

// // 新增停车场纠错信息
// export function addCorrect(data) {
//   return request({
//     url: '/park/correct',
//     method: 'post',
//     data: data
//   })
// }

// // 修改停车场纠错信息
// export function updateCorrect(data) {
//   return request({
//     url: '/park/correct',
//     method: 'put',
//     data: data
//   })
// }

// 删除停车场纠错信息
export function delCorrect(id) {
  return request({
    url: '/park/correct/' + id,
    method: 'delete'
  })
}
