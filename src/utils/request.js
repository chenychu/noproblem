// index.js
import axios from 'axios';
import router from '@/router/index.js'; // 根据你的路由文件路径来引入
import {ElMessage} from 'element-plus';
import {useLoaderStore} from "@/store/loader.js";
import {useStore} from "@/store/user.js";
const loaderStore = useLoaderStore();

const useStore2 = useStore();

const instance = axios.create({
  // 在这里配置axios实例的一些全局设置
  // baseURL: 'https://api.example.com', // 根据你的API地址来配置
  // 配置请求的根路径
  baseURL: '/api',
  withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前可以做一些处理
    // 例如，添加请求头
    // 自定义获取token的函数，根据你的实际情况实现
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (useStore2.token&& !isToken) {
      config.headers['Authorization'] = 'Bearer ' +useStore2.token;
    }
    config.timeout = 30000
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 取消加载动画
    loaderStore.notLoading();
    // 在这里可以对响应进行处理
    if (response.data.code !== 200)
      ElMessage.error(response.data.msg);

    return response.data;
  },
  (error) => {
    // 取消加载动画
    loaderStore.notLoading();
    if (error.response) {
      // 响应已经接收，但状态码不在2xx范围内
      if (error.response.status === 401) {
        // 401错误，跳转到登录页面
        ElMessage.warning('未登录或登录已过期，请重新登录');
        router.push('/login').then();
      } else if (error.response.status === 500) {
        // 500错误，提示错误信息
        ElMessage.error('系统未知错误，请反馈给管理员');
      } else if (error.response.status === 404) {
        ElMessage.error('请求的资源不存在');
      } else if (error.response.status === 403) {
        ElMessage.error('当前操作没有权限');
      }
    } else if (error.request) {
      // 请求已经发出，但没有收到响应
      ElMessage.error('网络请求失败');
    } else {
      // 在设置请求时触发错误
      ElMessage.error('请求失败：' + error.message);
    }

    // 返回一个Promise对象，用于进一步处理错误
    return Promise.reject(error);
  }
);

export default instance;
