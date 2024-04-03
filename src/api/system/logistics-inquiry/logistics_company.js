import request from '@/utils/request'

// 查询物流公司信息列表列表
export function listLogistics_company(query) {
  return request({
    url: '/logistics-inquiry/logistics_company/list',
    // headers: {
    //   isToken: false
    // },
    method: 'get',
    params: query
  })
}

// 查询物流公司信息列表详细
export function getLogistics_company(id) {
  return request({
    url: '/logistics-inquiry/logistics_company/' + id,
    // headers: {
    //   isToken: false
    // },
    method: 'get'
  })
}

// // 新增物流公司信息列表
// export function addLogistics_company(data) {
//   return request({
//     url: '/logistics-inquiry/logistics_company',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改物流公司信息列表
// export function updateLogistics_company(data) {
//   return request({
//     url: '/logistics-inquiry/logistics_company',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除物流公司信息列表
// export function delLogistics_company(id) {
//   return request({
//     url: '/logistics-inquiry/logistics_company/' + id,
//     method: 'delete'
//   })
// }
