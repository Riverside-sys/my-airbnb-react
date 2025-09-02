/* 进行axios的二次封装 */

import axios from 'axios'

// 引入配置文件
import { BASE_URL, TIMEOUT } from './config'

// 第一步：利用axios对象的create方法，创建axios实例
let request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 第二步：请求拦截器
request.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// 第三步：响应拦截器
request.interceptors.response.use(res => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return res.data
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// 对外暴露
export default request


