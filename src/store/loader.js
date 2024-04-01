import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useLoaderStore =
  defineStore('loader', () => {
    const loading = ref(false)

    function isLoading() {
      loading.value = true
    }

    function notLoading() {
      loading.value = false
    }

    return {loading, isLoading, notLoading}
  })