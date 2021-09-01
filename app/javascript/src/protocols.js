import { createApp } from 'vue'
import RdO from '@/components/RdO.vue'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(RdO)
    // app.config.performance = true;
    app.mount('#vue-app')
  })
}