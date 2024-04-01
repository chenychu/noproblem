import request from '@/utils/request'

// 查询字典数据列表
export function getDictListData(type) {
  return request({
    url: '/system/dict/data/type/' + type,
    method: 'get',
  })
}