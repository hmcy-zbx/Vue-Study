<template>
  <div>
    <h1>User Information</h1>
    <UserInformationComponent />
  </div>
</template>

<script>
import UserInformationComponent from '@/components/UserInformationComponent.vue';

export default {
  name: 'UserInformationPage',
  components: {
    UserInformationComponent
  }
};
</script>