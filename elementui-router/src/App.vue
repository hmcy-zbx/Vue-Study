<template>
  <el-row>
    <el-col :span="4">
      <el-menu :router="true" default-active="/home" class="el-menu-vertical-demo">
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/settings">Settings</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.el-menu-vertical-demo {
  height: 100vh;
  border-right: 1px solid #e0e0e0;
}
</style>