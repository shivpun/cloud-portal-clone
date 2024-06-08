import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AzurePortalApp from "@/application/azure-portal-apps/AzurePortalApp.vue"
import router from './router'

const app = createApp(AzurePortalApp)

app.use(createPinia())
app.use(router)

app.mount('#cloud-app')
