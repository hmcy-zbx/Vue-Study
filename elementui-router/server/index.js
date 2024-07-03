const express = require('express');  
const app = express();  
const port = 3000; // 你可以选择任何未被占用的端口  
const db = require('./db')

// 设置中间件以允许跨域请求（可选，根据你的需求）  
app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  next();  
});  

app.use(express.json());

//配置对外接口
app.get('/', (req, res) => {
  var sql = 'select * from user'
  db.query(sql, (err, data) => {
      if(err) {
          return res.send({
            status: 400,
            message: "查询失败"
          })
      } else{
        console.log('查询结果：', data)
		res.json(data); 
      }
  })
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: '用户密码不能为空' });
  }
  const query = 'SELECT * FROM user WHERE name = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: '数据库错误' });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ message: '登录成功' });
    } else {
      res.status(401).json({ error: '网络错误' });
    }
  });
});

// 设置路由和响应  这是之前的
/*
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
*/
// 启动服务器  
app.listen(port, () => {  
  console.log(`Server is running on http://localhost:${port}`);  
});