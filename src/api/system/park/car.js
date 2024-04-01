import request from '@/utils/request'

// 查询用户车辆信息列表
export function listCar(query) {
  return request({
    url: '/park/car/list',
    method: 'get',
    params: query
  })
}

// 查询用户车辆信息详细
export function getCar(id) {
  return request({
    url: '/park/car/' + id,
    method: 'get'
  })
}

// 新增用户车辆信息
export function addCar(data) {
  return request({
    url: '/park/car',
    method: 'post',
    data: data
  })
}

// 修改用户车辆信息
export function updateCar(data) {
  return request({
    url: '/park/car',
    method: 'put',
    data: data
  })
}

// 删除用户车辆信息
export function delCar(id) {
  return request({
    url: '/park/car/' + id,
    method: 'delete'
  })
}
