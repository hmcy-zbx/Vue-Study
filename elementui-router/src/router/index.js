import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import SettingsPage from '../views/Settings.vue';
import UserInformationPage from '../views/UserInformation.vue';

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
        path: '/user-information',
        name: 'UserInformationPage',
        component: UserInformationPage
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