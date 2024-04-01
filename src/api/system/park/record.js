import request from '@/utils/request'

// 查询停车记录列表列表
export function listRecord (query) {
  return request({
    url: '/park/lot/record/list',
    method: 'get',
    params: query
  })
}

// 查询停车记录列表详细
export function getRecord (id) {
  return request({
    url: '/park/lot/record/' + id,
    method: 'get'
  })
}

// 新增停车记录列表
export function addRecord (data) {
  return request({
    url: '/park/lot/record',
    method: 'post',
    data: data
  })
}

// // 修改停车记录列表
// export function updateRecord (data) {
//   return request({
//     url: '/park/lot/record',
//     method: 'put',
//     data: data
//   })
// }

// 删除停车记录列表
export function delRecord (id) {
  return request({
    url: '/park/lot/record/' + id,
    method: 'delete'
  })
}
