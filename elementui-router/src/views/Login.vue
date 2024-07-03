<template>
  <div class="login">
    <img src="../assets/logo.png">
    <el-form :model="loginForm">
      <el-form-item label="Username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin() {
      try{
        const response = await axios.post('http://localhost:3000/login', this.loginForm);
        if (response.status === 200) {
          localStorage.setItem('loggedIn', true);
          this.$router.push('/home');
          this.$emit('login-success'); // 通知父组件登录成功
        }
      }
      catch (error) {
        if (error.response && error.response.status === 401) {
          this.$message.error('Invalid credentials');
        } else {
          this.$message.error('An error occurred');
        }
    }
  }
}
};
</script>

<style>
.login {
  max-width: 300px;
  margin: 100px auto;
}
</style>