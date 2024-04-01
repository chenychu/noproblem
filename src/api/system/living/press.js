import request from '@/utils/request'

// 查询生活缴费新闻列表
export function listPress (query) {
  return request({
    url: '/living/press/press/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询生活缴费新闻详细
export function getPress (id) {
  return request({
    url: '/living/press/press/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增生活缴费新闻
export function addPress (data) {
  return request({
    url: '/living/press/press',
    method: 'post',
    data: data
  })
}

// 修改生活缴费新闻
export function updatePress (data) {
  return request({
    url: '/living/press/press',
    method: 'put',
    data: data
  })
}

// 删除生活缴费新闻
export function delPress (id) {
  return request({
    url: '/living/press/press/' + id,
    method: 'delete'
  })
}
