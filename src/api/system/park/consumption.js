import request from '@/utils/request'

// 查询车辆行驶里程信息列表
export function listConsumption (query) {
  return request({
    url: '/park/car/consumption/list',
    method: 'get',
    params: query
  })
}

// 查询车辆行驶里程信息详细
export function getConsumption (id) {
  return request({
    url: '/park/car/consumption/' + id,
    method: 'get'
  })
}

// 新增车辆行驶里程信息
export function addConsumption (data) {
  return request({
    url: '/park/car/consumption',
    method: 'post',
    data: data
  })
}

// 修改车辆行驶里程信息
export function updateConsumption (data) {
  return request({
    url: '/park/car/consumption',
    method: 'put',
    data: data
  })
}

// 删除车辆行驶里程信息
export function delConsumption (id) {
  return request({
    url: '/park/car/consumption/' + id,
    method: 'delete'
  })
}
