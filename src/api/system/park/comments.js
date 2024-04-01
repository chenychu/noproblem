import request from '@/utils/request'

// 查询新闻评论列表
export function listComments (query) {
  return request({
    url: '/park/press/comments/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询新闻评论详细
export function getComments (id) {
  return request({
    url: '/park/press/comments/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增新闻评论
export function addComments (data) {
  return request({
    url: '/park/press/comments',
    method: 'post',
    data: data
  })
}

// // 修改新闻评论
// export function updateComments (data) {
//   return request({
//     url: '/park/press/comments',
//     method: 'put',
//     data: data
//   })
// }

// 删除新闻评论
export function delComments (id) {
  return request({
    url: '/park/press/comments/' + id,
    method: 'delete'
  })
}
