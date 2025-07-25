import '@/app/styles/index.scss'

import { createApp } from 'vue'
import App from './app/App.vue'
import router from '@/app/router'
import components from '@/shared/ui'

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(router)

app.mount('#app')
