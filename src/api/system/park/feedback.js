import request from '@/utils/request'

// 查询意见反馈列表
export function listFeedback(query) {
  return request({
    url: '/park/feedback/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询意见反馈详细
export function getFeedback(id) {
  return request({
    url: '/park/feedback/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增意见反馈
export function addFeedback(data) {
  return request({
    url: '/park/feedback',
    method: 'post',
    data: data
  })
}

// 修改意见反馈
export function updateFeedback(data) {
  return request({
    url: '/park/feedback',
    method: 'put',
    data: data
  })
}

// 删除意见反馈
export function delFeedback(id) {
  return request({
    url: '/park/feedback/' + id,
    method: 'delete'
  })
}
