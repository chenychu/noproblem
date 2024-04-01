// 修改 body 的属性
export const modifyPageAttributes = (boolean) => {
  // const mainApp = document.getElementById('main-app')
  if (boolean) {
    document.body.classList.add('no-scrollbar')
  } else {
    document.body.classList.remove('no-scrollbar')
  }
}

export const goToRelicDetail = (id) => {
  window.open(`/relic/detail/${id}`, '_blank')
}