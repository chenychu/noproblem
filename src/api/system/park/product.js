import request from '@/utils/request'

// 查询积分商品列表
export function listProduct(query) {
  return request({
    url: '/park/product/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询积分商品详细
export function getProduct(id) {
  return request({
    url: '/park/product/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增积分商品
// export function addProduct(data) {
//   return request({
//     url: '/park/product',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改积分商品
// export function updateProduct(data) {
//   return request({
//     url: '/park/product',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除积分商品
// export function delProduct(id) {
//   return request({
//     url: '/park/product/' + id,
//     method: 'delete'
//   })
// }
