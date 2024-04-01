import request from '@/utils/request'

// 查询用户话费充值记录列表
export function listRecord(query) {
  return request({
    url: '/living/record/list',
    method: 'get',
    params: query
  })
}

// 查询用户话费充值记录详细
export function getRecord(id) {
  return request({
    url: '/living/record/' + id,
    method: 'get'
  })
}

// 新增用户话费充值记录
export function addRecord(data) {
  return request({
    url: '/living/record',
    method: 'post',
    data: data
  })
}

// 修改用户话费充值记录
export function updateRecord(data) {
  return request({
    url: '/living/record',
    method: 'put',
    data: data
  })
}

// 删除用户话费充值记录
export function delRecord(id) {
  return request({
    url: '/living/record/' + id,
    method: 'delete'
  })
}
