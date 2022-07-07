import { RouteRecordRaw } from 'vue-router'
import Home from '../../../views/pages/home.vue'

const home_hooks: RouteRecordRaw = {
    path: '/',
    name: 'Home',
    component: Home,
}

export default home_hooks
