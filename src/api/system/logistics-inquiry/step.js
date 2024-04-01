import request from '@/utils/request'

// 查询快递单事件列表
export function listStep(query) {
  return request({
    url: '/logistics-inquiry/step/list',
    method: 'get',
    params: query
  })
}

// 查询快递单事件详细
export function getStep(id) {
  return request({
    url: '/logistics-inquiry/step/' + id,
    method: 'get'
  })
}

// 新增快递单事件
export function addStep(data) {
  return request({
    url: '/logistics-inquiry/step',
    method: 'post',
    data: data
  })
}

// 修改快递单事件
export function updateStep(data) {
  return request({
    url: '/logistics-inquiry/step',
    method: 'put',
    data: data
  })
}

// 删除快递单事件
export function delStep(id) {
  return request({
    url: '/logistics-inquiry/step/' + id,
    method: 'delete'
  })
}
