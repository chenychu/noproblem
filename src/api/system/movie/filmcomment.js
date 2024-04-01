import request from '@/utils/request'

// 查询电影评论列表
export function listFilmcomment(query) {
  return request({
    url: '/movie/filmcomment/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询电影评论详细
export function getFilmcomment(id) {
  return request({
    url: '/movie/filmcomment/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增电影评论
export function addFilmcomment(data) {
  return request({
    url: '/movie/filmcomment',
    method: 'post',
    data: data
  })
}

// 修改电影评论
export function updateFilmcomment(data) {
  return request({
    url: '/movie/filmcomment',
    method: 'put',
    data: data
  })
}

// 删除电影评论
export function delFilmcomment(id) {
  return request({
    url: '/movie/filmcomment/' + id,
    method: 'delete'
  })
}
