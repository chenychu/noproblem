import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

import { defineStore } from 'pinia';

import { ref } from 'vue';
export const useStore = defineStore('user',()=>{
  //定义状态内容

  //1.响应式变量
  const token = ref('')

  //2.定义一个函数，修改token的值
  const setToken=(userInfo)=>{
    const username = userInfo.username.trim()
    const password = userInfo.password
    const code = userInfo.code
    const uuid = userInfo.uuid
    return new Promise((resolve, reject) => {
      login(username, password, code, uuid).then(res => {
        token.value=res.token;
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

  //3.函数移除token的值
  const removeToken =()=>{
    token.value=''
  }
  return{
    token,setToken,removeToken
  }
},{
  persist:true//持久化存储
});






