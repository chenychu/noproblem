import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useConfigStore =
  defineStore('config', () => {
    const assistantNavigation = ref(false)
    const pageLoading = ref(false)

    const setAssistant = (boolean) => {
      assistantNavigation.value = boolean
    }

    const setPageLoading = (boolean) => {
      pageLoading.value = boolean
    }

    return {
      assistantNavigation,
      setAssistant,
      pageLoading,
      setPageLoading
    }
  })
