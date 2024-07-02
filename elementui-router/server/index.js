const express = require('express');  
const app = express();  
const port = 3000; // 你可以选择任何未被占用的端口  
  
// 设置中间件以允许跨域请求（可选，根据你的需求）  
app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  next();  
});  
  
// 设置路由和响应  
app.get('/', (req, res) => {  
  // 创建一个对象，其中包含你想要返回的数据  
  const data = [  
  { id: 1, name: 'Alice', age:18, email: 'alice@example.com' },  
  { id: 2, name: 'Bob', age:19, email: 'bob@example.com' },  
  // ...更多用户  
  ];  
  
  // 使用res.json()方法发送JSON响应  
  res.json(data);  
});  
  
// 启动服务器  
app.listen(port, () => {  
  console.log(`Server is running on http://localhost:${port}`);  
});