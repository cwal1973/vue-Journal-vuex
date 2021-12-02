import { createApp } from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './router'
import './styles/styles.scss'

createApp(App)
      .use(store)
      .use(router)
      .mount('#app')
