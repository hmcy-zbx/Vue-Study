import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';
import axios from 'axios';

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

// 创建 axios 实例
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // 设置为你的 Express 服务器地址
    timeout: 1000,
  });
app.config.globalProperties.$axios = axiosInstance;

app.mount('#app')
