import request from '@/utils/request'

// 查询快递单主列表
export function listLogistics_info(query) {
  return request({
    url: '/logistics-inquiry/logistics_info/list',
    method: 'get',
    params: query
  })
}

// 查询快递单主详细
export function getLogistics_info(id) {
  return request({
    url: '/logistics-inquiry/logistics_info/' + id,
    method: 'get'
  })
}

// 新增快递单主
export function addLogistics_info(data) {
  return request({
    url: '/logistics-inquiry/logistics_info',
    method: 'post',
    data: data
  })
}

// 修改快递单主
export function updateLogistics_info(data) {
  return request({
    url: '/logistics-inquiry/logistics_info',
    method: 'put',
    data: data
  })
}

// 删除快递单主
export function delLogistics_info(id) {
  return request({
    url: '/logistics-inquiry/logistics_info/' + id,
    method: 'delete'
  })
}
