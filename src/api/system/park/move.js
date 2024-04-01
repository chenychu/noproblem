import request from '@/utils/request'

// 查询车辆申请挪车记录列表
export function listMove(query) {
  return request({
    url: '/park/car/move/list',
    method: 'get',
    params: query
  })
}

// 查询车辆申请挪车记录详细
export function getMove(id) {
  return request({
    url: '/park/car/move/' + id,
    method: 'get'
  })
}

// 新增车辆申请挪车记录
export function addMove(data) {
  return request({
    url: '/park/car/move',
    method: 'post',
    data: data
  })
}

// 修改车辆申请挪车记录
export function updateMove(data) {
  return request({
    url: '/park/car/move',
    method: 'put',
    data: data
  })
}

// 删除车辆申请挪车记录
export function delMove(id) {
  return request({
    url: '/park/car/move/' + id,
    method: 'delete'
  })
}
