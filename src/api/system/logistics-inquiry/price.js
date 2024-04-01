import request from '@/utils/request'

// 查询物流公司价格列表
export function listPrice(query) {
  return request({
    url: '/logistics-inquiry/price/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询物流公司价格详细
export function getPrice(id) {
  return request({
    url: '/logistics-inquiry/price/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增物流公司价格
// export function addPrice(data) {
//   return request({
//     url: '/logistics-inquiry/price',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改物流公司价格
// export function updatePrice(data) {
//   return request({
//     url: '/logistics-inquiry/price',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除物流公司价格
// export function delPrice(id) {
//   return request({
//     url: '/logistics-inquiry/price/' + id,
//     method: 'delete'
//   })
// }
