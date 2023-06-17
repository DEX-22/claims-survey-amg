import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import {RouterView} from 'vue-router'

const app = createApp(App)

// app.component('RouterView',RouterView)


app.use(createPinia())
app.use(router)

app.mount('#app')
