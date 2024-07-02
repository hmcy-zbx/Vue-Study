import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import SettingsPage from '../views/Settings.vue';

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/settings',
        name: 'SettingsPage',
        component: SettingsPage 
    },
    {
        path: '/',
        redirect: '/home'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;