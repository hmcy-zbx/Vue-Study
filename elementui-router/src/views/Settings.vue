<template>
    <div>
        <el-button @click="$router.push('/home')">Go to Home</el-button>
        <settings-component />
    </div>
</template>

<script>
import SettingsComponent from '@/components/SettingsComponent.vue';

export default {
    name: 'SettingsPage',
    components: {
        SettingsComponent
    }
}
</script>