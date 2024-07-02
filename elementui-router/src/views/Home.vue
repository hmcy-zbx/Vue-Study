<template>
    <div>
        <el-button @click="$router.push('/settings')">Go to Settings</el-button>
        <home-component />
    </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue';

export default {
    name: 'HomePage',
    components: {
        HomeComponent
    }
}
</script>