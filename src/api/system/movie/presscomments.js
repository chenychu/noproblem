import request from '@/utils/request'

// 查询电影评论列表
export function listPresscomments(query) {
  return request({
    url: '/movie/presscomments/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询电影评论详细
export function getPresscomments(id) {
  return request({
    url: '/movie/presscomments/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增电影评论
export function addPresscomments(data) {
  return request({
    url: '/movie/presscomments',
    method: 'post',
    data: data
  })
}

// // 修改电影评论
// export function updatePresscomments(data) {
//   return request({
//     url: '/movie/presscomments',
//     method: 'put',
//     data: data
//   })
// }

// 删除电影评论
export function delPresscomments(id) {
  return request({
    url: '/movie/presscomments/' + id,
    method: 'delete'
  })
}
