import request from '@/utils/request'

// 查询影片列表
export function listFilm(query) {
  return request({
    url: '/movie/film/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params: query
  })
}

// 查询影片详细
export function getFilm(id) {
  return request({
    url: '/movie/film/detail/' + id,
    headers: {
      isToken: false
    },
    method: 'get'
  })
}
//想看
export function getFilmLikeById(id) {
  return request({
    url: '/movie/film/like/' + id,
    method: 'get'
  })
}
//看过
export function getFilmFavorite(id) {
  return request({
    url: '/movie/film/favorite/' + id,
    method: 'get'
  })
}


//
// // 修改影片
// export function updateFilm(data) {
//   return request({
//     url: '/movie/film',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除影片
// export function delFilm(id) {
//   return request({
//     url: '/movie/film/' + id,
//     method: 'delete'
//   })
// }
