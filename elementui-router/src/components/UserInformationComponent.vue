<template>
    <div>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="age" label="Age" width="100"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserInformationComponent',
    data() {
      return {
        users: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await this.$axios.get('/');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>