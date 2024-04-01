import request from '@/utils/request'

// 查询新闻分类列表
export function listPresscategory (query) {
  return request({
    url: '/living/press/category/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询新闻分类详细
export function getPresscategory (id) {
  return request({
    url: '/living/press/category/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增新闻分类
// export function addPresscategory (data) {
//   return request({
//     url: '/living/press/category',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改新闻分类
// export function updatePresscategory (data) {
//   return request({
//     url: '/living/press/category',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除新闻分类
// export function delPresscategory (id) {
//   return request({
//     url: '/living/press/category/' + id,
//     method: 'delete'
//   })
// }
