import request from '@/utils/request'

// 查询积分事件列表
export function listScore(query) {
  return request({
    url: '/park/score/list',
    method: 'get',
    params: query
  })
}

// 查询积分事件详细
export function getScore(id) {
  return request({
    url: '/park/score/' + id,
    method: 'get'
  })
}

// 新增积分事件
export function addScore(data) {
  return request({
    url: '/park/score',
    method: 'post',
    data: data
  })
}

// 修改积分事件
export function updateScore(data) {
  return request({
    url: '/park/score',
    method: 'put',
    data: data
  })
}

// 删除积分事件
export function delScore(id) {
  return request({
    url: '/park/score/' + id,
    method: 'delete'
  })
}
