import request from '@/utils/request'

// 查询影片场次列表
export function listTheatretimes(query) {
  return request({
    url: '/movie/theatre/times/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询影片场次详细
export function getTheatretimes(id) {
  return request({
    url: '/movie/theatre/times/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增影片场次
// export function addTheatretimes(data) {
//   return request({
//     url: '/movie/theatre/times',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改影片场次
// export function updateTheatretimes(data) {
//   return request({
//     url: '/movie/theatre/times',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除影片场次
// export function delTheatretimes(id) {
//   return request({
//     url: '/movie/theatre/times/' + id,
//     method: 'delete'
//   })
// }
