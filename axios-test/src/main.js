import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // 设置为你的 Express 服务器地址
  timeout: 1000,
});

const app = createApp(App);

// 全局注册 axios 实例
app.config.globalProperties.$axios = axiosInstance;

app.mount('#app');