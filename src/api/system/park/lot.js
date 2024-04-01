import request from '@/utils/request'

// 查询停车场信息列表列表
export function listLot(query) {
  return request({
    url: '/park/lot/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询停车场信息列表详细
export function getLot(id) {
  return request({
    url: '/park/lot/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增停车场信息列表
// export function addLot(data) {
//   return request({
//     url: '/park/lot',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改停车场信息列表
// export function updateLot(data) {
//   return request({
//     url: '/park/lot',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除停车场信息列表
// export function delLot(id) {
//   return request({
//     url: '/park/lot/' + id,
//     method: 'delete'
//   })
// }
