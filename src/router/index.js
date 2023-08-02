import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router';
import Home from "src/pages/HomePage/HomePage.vue";
import Settings from "src/pages/SettingsPage/SettingsPage.vue";
import AboutPage from "src/pages/AboutPage/AboutPage.vue";
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/settings",
        component: Settings
    },
    {
        path: "/about",
        component: AboutPage
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})