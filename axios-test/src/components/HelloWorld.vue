<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <!-- 使用v-for遍历users数组，并显示每个用户的name -->
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home Page',
      users: []
    };
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