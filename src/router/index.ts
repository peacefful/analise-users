import { createRouter, createWebHistory } from 'vue-router'
import UsersActive from '@/views/UsersActive.vue'
import UsersTable from '@/views/UsersTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UsersTable',
      component: UsersTable,
    },
    {
      path: '/active-users',
      name: 'UsersActive',
      component: UsersActive,
    },
  ],
})

export default router
