import request from '@/utils/request'

// 查询电影意见反馈列表
export function listFeedback(query) {
  return request({
    url: '/movie/feedback/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询电影意见反馈详细
export function getFeedback(id) {
  return request({
    url: '/movie/feedback/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增电影意见反馈
export function addFeedback(data) {
  return request({
    url: '/movie/feedback',
    method: 'post',
    data: data
  })
}

// 修改电影意见反馈
export function updateFeedback(data) {
  return request({
    url: '/movie/feedback',
    method: 'put',
    data: data
  })
}

// 删除电影意见反馈
export function delFeedback(id) {
  return request({
    url: '/movie/feedback/' + id,
    method: 'delete'
  })
}
