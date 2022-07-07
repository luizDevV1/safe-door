import { createRouter, createWebHistory } from 'vue-router'
import home_hooks from './hooks/home.hooks'
import accounts_hooks from './hooks/pages.account'

const router = createRouter({
    history: createWebHistory(),
    routes: [home_hooks, ...accounts_hooks],
})

export default router
