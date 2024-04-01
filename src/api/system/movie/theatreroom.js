import request from '@/utils/request'

// 查询影厅信息列表
export function listTheatreroom(query) {
  return request({
    url: '/movie/theatre/room/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询影厅信息详细
export function getTheatreroom(id) {
  return request({
    url: '/movie/theatre/room/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增影厅信息
// export function addTheatreroom(data) {
//   return request({
//     url: '/movie/theatre/room',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改影厅信息
// export function updateTheatreroom(data) {
//   return request({
//     url: '/movie/theatre/room',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除影厅信息
// export function delTheatreroom(id) {
//   return request({
//     url: '/movie/theatre/room/' + id,
//     method: 'delete'
//   })
// }
