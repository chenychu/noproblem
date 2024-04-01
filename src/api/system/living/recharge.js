import request from '@/utils/request'

// 查询缴费记录列表
export function listRecharge(query) {
  return request({
    url: '/living/recharge/list',
    method: 'get',
    params: query
  })
}

// 查询缴费记录详细
export function getRecharge(id) {
  return request({
    url: '/living/recharge/' + id,
    method: 'get'
  })
}

// 新增缴费记录
export function addRecharge(data) {
  return request({
    url: '/living/recharge',
    method: 'post',
    data: data
  })
}

// 修改缴费记录
export function updateRecharge(data) {
  return request({
    url: '/living/recharge',
    method: 'put',
    data: data
  })
}

// 删除缴费记录
export function delRecharge(id) {
  return request({
    url: '/living/recharge/' + id,
    method: 'delete'
  })
}
