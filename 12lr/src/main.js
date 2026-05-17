import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router' // импортируем наш роутер
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia() // создаем объект менеджера состояний

app.use(pinia) // подключаем Pinia как плагин
app.use(router) // подключаем роутер
app.mount('#app')