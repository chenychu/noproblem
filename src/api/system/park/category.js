import request from '@/utils/request'

// 查询新闻分类列表
export function listCategory (query) {
  return request({
    url: '/park/press/category/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询新闻分类详细
export function getCategory (id) {
  return request({
    url: '/park/press/category/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增新闻分类
// export function addCategory (data) {
//   return request({
//     url: '/park/press/category',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改新闻分类
// export function updateCategory (data) {
//   return request({
//     url: '/park/press/category',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除新闻分类
// export function delCategory (id) {
//   return request({
//     url: '/park/press/category/' + id,
//     method: 'delete'
//   })
// }
