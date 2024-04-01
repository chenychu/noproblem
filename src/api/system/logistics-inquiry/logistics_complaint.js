import request from '@/utils/request'

// 查询快递投诉列表
export function listLogistics_complaint(query) {
  return request({
    url: '/logistics-inquiry/logistics_complaint/list',
    method: 'get',
    params: query
  })
}

// 查询快递投诉详细
export function getLogistics_complaint(id) {
  return request({
    url: '/logistics-inquiry/logistics_complaint/' + id,
    method: 'get'
  })
}

// 新增快递投诉
export function addLogistics_complaint(data) {
  return request({
    url: '/logistics-inquiry/logistics_complaint',
    method: 'post',
    data: data
  })
}

// 修改快递投诉
export function updateLogistics_complaint(data) {
  return request({
    url: '/logistics-inquiry/logistics_complaint',
    method: 'put',
    data: data
  })
}

// 删除快递投诉
export function delLogistics_complaint(id) {
  return request({
    url: '/logistics-inquiry/logistics_complaint/' + id,
    method: 'delete'
  })
}
