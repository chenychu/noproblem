import request from '@/utils/request'

// 查询手机话费余额信息列表
export function listPhone(query) {
  return request({
    url: '/living/phone/list',
    method: 'get',
    params: query
  })
}

// 查询手机话费余额信息详细
export function getPhone(id) {
  return request({
    url: '/living/phone/' + id,
    method: 'get'
  })
}

// 新增手机话费余额信息
export function addPhone(data) {
  return request({
    url: '/living/phone',
    method: 'post',
    data: data
  })
}

// 修改手机话费余额信息
export function updatePhone(data) {
  return request({
    url: '/living/phone',
    method: 'put',
    data: data
  })
}

// 删除手机话费余额信息
export function delPhone(id) {
  return request({
    url: '/living/phone/' + id,
    method: 'delete'
  })
}
