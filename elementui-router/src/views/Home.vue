<template>
    <div>
      <img src="../assets/logo.png">
      <home-component />
      <el-button @click="$router.push('/settings')">Go to Settings</el-button>
    </div>
  </template>
  
  <script>
  import HomeComponent from '@/components/HomeComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      HomeComponent
    }
  };
  </script>