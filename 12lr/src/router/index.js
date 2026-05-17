import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'
import FormView from '../views/FormView.vue'

const routes = [
  { path: '/', component: HomeView },     // 1 страница: Общая информация
  { path: '/data', component: DataView }, // 2 страница: Вывод данных с API
  { path: '/form', component: FormView }  // 3 страница: Форма отправки
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router