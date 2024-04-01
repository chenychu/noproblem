import request from '@/utils/request'

// 查询座位信息列表
export function listTheatreseat(query) {
  return request({
    url: '/movie/theatre/seat/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询座位信息详细
export function getTheatreseat(id) {
  return request({
    url: '/movie/theatre/seat/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增座位信息
// export function addTheatreseat(data) {
//   return request({
//     url: '/movie/theatre/seat',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改座位信息
// export function updateTheatreseat(data) {
//   return request({
//     url: '/movie/theatre/seat',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除座位信息
// export function delTheatreseat(id) {
//   return request({
//     url: '/movie/theatre/seat/' + id,
//     method: 'delete'
//   })
// }
