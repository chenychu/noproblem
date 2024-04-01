import request from '@/utils/request'

// 查询城市影院信息列表
export function listTheatre(query) {
  return request({
    url: '/movie/theatre/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询城市影院信息详细
export function getTheatre(id) {
  return request({
    url: '/movie/theatre/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增城市影院信息
// export function addTheatre(data) {
//   return request({
//     url: '/movie/theatre',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改城市影院信息
// export function updateTheatre(data) {
//   return request({
//     url: '/movie/theatre',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除城市影院信息
// export function delTheatre(id) {
//   return request({
//     url: '/movie/theatre/' + id,
//     method: 'delete'
//   })
// }
