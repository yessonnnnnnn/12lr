<template>
  <div>
    <h1>Страница 2: Список пользователей с сервера</h1>
    <p>Данные подгружаются автоматически при открытии страницы через Pinia Action.</p>
    
    <div v-if="!store.fetchdata">Загрузка данных...</div>
    
    <ul v-else style="list-style-type: square; padding-left: 20px;">
      <li v-for="user in store.fetchdata" :key="user.id" style="margin-bottom: 8px;">
        <strong>Имя:</strong> {{ user.name }} | <strong>Email:</strong> {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '../store/store' // импортируем наше хранилище

const store = useAppStore() // получаем доступ к объекту хранилища

// Запускаем функцию получения данных с API при монтировании (рендеринге) компонента
onMounted(() => {
  store.getApidata()
})
</script>