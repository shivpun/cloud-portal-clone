import { createRouter, createWebHistory } from 'vue-router'
import AzurePortalView from '@/views/azure-portal/AzurePortalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'azure-portal-view',
      component: AzurePortalView
    }
  ]
})

export default router
