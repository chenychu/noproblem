import request from '@/utils/request'

// 查询轮播广告列表
export function listAdbanner (query) {
  return request({
    url: '/logistics-inquiry/ad-banner/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询轮播广告详细
export function getAdbanner (id) {
  return request({
    url: '/logistics-inquiry/ad-banner/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// // 新增轮播广告
// export function addAdbanner (data) {
//   return request({
//     url: '/logistics-inquiry/ad-banner',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改轮播广告
// export function updateAdbanner (data) {
//   return request({
//     url: '/logistics-inquiry/ad-banner',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除轮播广告
// export function delAdbanner (id) {
//   return request({
//     url: '/logistics-inquiry/ad-banner/' + id,
//     method: 'delete'
//   })
// }
