import './assets/tailwind.css'
import './assets/main.css'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

import messages from './data/text.json';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import FloatingVue from 'floating-vue'

library.add(far)

// import {RouterView} from 'vue-router'

const app = createApp(App)

const lang = localStorage.getItem('lang');

const i18n = createI18n({
    legacy: false,
    locale: lang || 'en', // Establece el idioma predeterminado
    messages
  });

// app.component('RouterView',RouterView)


app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(FloatingVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


