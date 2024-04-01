import request from '@/utils/request'

// 查询停车记录列表
export function listLotrecord (query) {
  return request({
    url: '/park/lot/record/list',
    method: 'get',
    params: query
  })
}

// 查询停车记录详细
export function getLotrecord (id) {
  return request({
    url: '/park/lot/record/' + id,
    method: 'get'
  })
}

// 新增停车记录
export function addLotrecord (data) {
  return request({
    url: '/park/lot/record',
    method: 'post',
    data: data
  })
}

// // 修改停车记录
// export function updateLotrecord (data) {
//   return request({
//     url: '/park/lot/record',
//     method: 'put',
//     data: data
//   })
// }

// 删除停车记录
export function delLotrecord (id) {
  return request({
    url: '/park/lot/record/' + id,
    method: 'delete'
  })
}
