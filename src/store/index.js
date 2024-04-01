import {createPinia} from 'pinia';
import {useConfigStore} from "@/store/config.js";
import {useLoaderStore} from "@/store/loader.js";
import {createPersistedState} from'pinia-persistedstate-plugin'
const persist = createPersistedState()
const store = createPinia()

store.use(persist)


export {
  store as default,
  useConfigStore,
  useLoaderStore
}
