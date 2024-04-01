import request from '@/utils/request'

// 查询追回主线索管理列表
export function listClueMain(query) {
  return request({
    url: '/lootedRelics/clueMain/list',
    method: 'get',
    params: query
  })
}

// 查询追回主线索管理详细
export function getClueMain(id) {
  return request({
    url: '/lootedRelics/clueMain/' + id,
    method: 'get'
  })
}

// 查询遗失文物追回线索中间列表
export function listMapping(query) {
  return request({
    url: '/lootedRelics/clueMain/mapping/list',
    method: 'get',
    params: query
  })
}

//通过遗失文物id查询全部线索信息
export function getClueByLostHeritageId(lostheritageId) {
  return request({
    url: '/lootedRelics/clueMain/clueList/' + lostheritageId,
    method: 'get'
  })
}

// 新增追回主线索管理
export function addClueMain(data) {
  return request({
    url: '/lootedRelics/clueMain',
    method: 'post',
    data: data
  })
}

export function feedbackClue(data) {
  return request({
    url: '/lootedRelics/clueMain/clue_mapping',
    method: 'post',
    data: data
  })
}