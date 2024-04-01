import request from '@/utils/request'

// 查询物流查询新闻咨询列表
export function listPress(query) {
  return request({
    url: '/logistics-inquiry/press/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询物流查询新闻咨询详细
export function getPress(id) {
  return request({
    url: '/logistics-inquiry/press/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增物流查询新闻咨询
export function addPress(data) {
  return request({
    url: '/logistics-inquiry/press',
    method: 'post',
    data: data
  })
}

// 修改物流查询新闻咨询
export function updatePress(data) {
  return request({
    url: '/logistics-inquiry/press',
    method: 'put',
    data: data
  })
}

// 删除物流查询新闻咨询
export function delPress(id) {
  return request({
    url: '/logistics-inquiry/press/' + id,
    method: 'delete'
  })
}
