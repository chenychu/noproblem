import request from '@/utils/request'

// 查询新闻信息列表列表
export function listPress (query) {
  return request({
    url: '/park/press/press/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询新闻信息列表详细
export function getPress (id) {
  return request({
    url: '/park/press/press/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 新增新闻信息列表
export function addPress (data) {
  return request({
    url: '/park/press/press',
    method: 'post',
    data: data
  })
}

// 修改新闻信息列表
export function updatePress (data) {
  return request({
    url: '/park/press/press',
    method: 'put',
    data: data
  })
}

// 删除新闻信息列表
export function delPress (id) {
  return request({
    url: '/park/press/press/' + id,
    method: 'delete'
  })
}
