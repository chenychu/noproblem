import request from '@/utils/request'

// 查询缴费分类列表
export function listCategory(query) {
  return request({
    url: '/living/category/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询缴费分类详细
export function getCategory(id) {
  return request({
    url: '/living/category/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增缴费分类
// export function addCategory(data) {
//   return request({
//     url: '/living/category',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改缴费分类
// export function updateCategory(data) {
//   return request({
//     url: '/living/category',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除缴费分类
// export function delCategory(id) {
//   return request({
//     url: '/living/category/' + id,
//     method: 'delete'
//   })
// }
