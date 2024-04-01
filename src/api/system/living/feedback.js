import request from '@/utils/request'

// 查询生活缴费意见反馈列表
export function listFeedback(query) {
  return request({
    url: '/living/feedback/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询生活缴费意见反馈详细
export function getFeedback(id) {
  return request({
    url: '/living/feedback/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增生活缴费意见反馈
export function addFeedback(data) {
  return request({
    url: '/living/feedback',
    method: 'post',
    data: data
  })
}

// 修改生活缴费意见反馈
export function updateFeedback(data) {
  return request({
    url: '/living/feedback',
    method: 'put',
    data: data
  })
}

// 删除生活缴费意见反馈
export function delFeedback(id) {
  return request({
    url: '/living/feedback/' + id,
    method: 'delete'
  })
}
