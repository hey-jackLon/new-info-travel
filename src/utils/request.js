import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  config => {

  },
  error => {
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {

  },
  error => {
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

export default service;
