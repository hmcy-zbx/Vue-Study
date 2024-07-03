<template>
  <div>
    <el-row v-if="loggedIn">
      <el-col :span="4">
        <el-menu :router="true" default-active="/home" class="el-menu-vertical-demo">
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/settings">Settings</el-menu-item>
          <el-menu-item index="/user-information">User Information</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
    <el-row  class="login-container">
      <router-view @login-success="handleLoginSuccess"></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loggedIn: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn
    }
  },
  methods: {
    handleLoginSuccess() {
      this.loggedIn = true;
    }
  },
  watch: {
    loggedIn(newValue) {
      console.log('loggedIn changed:', newValue);
      this.$forceUpdate(); // 强制更新组件
    }
  },
  created() {
    console.log('App created, loggedIn:', this.loggedIn);
  },
  mounted() {
    console.log('App mounted, loggedIn:', this.loggedIn);
  }
};
</script>

<style>
.el-menu-vertical-demo {
  height: 100vh;
  border-right: 1px solid #e0e0e0;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>