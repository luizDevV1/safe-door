import { RouteRecordRaw } from 'vue-router'
import Account from '../../../views/pages/account.vue'

const accounts_hooks: Array<RouteRecordRaw> = [
    {
        path: '/new-account',
        name: 'New account',
        component: Account,
    },
]

export default accounts_hooks
