<template>
  <div>
    <h1>Страница 3: Форма обратной связи</h1>
    <p>Заполните форму для отправки демонстрационного POST-запроса на Jsonplaceholder.</p>
    
    <form @submit.prevent="store.sendmessage()">
      <div style="margin-bottom: 12px;">
        <label for="first_name" style="display: block; margin-bottom: 4px;">Ваше имя:</label>
        <input 
          type="text" 
          id="first_name" 
          v-model="store.firstname"  
          placeholder="Введите ваше имя" 
          required 
          style="padding: 6px; width: 250px;"
        />
      </div>
      
      <div style="margin-bottom: 12px;">
        <label for="second_name" style="display: block; margin-bottom: 4px;">Ваша фамилия:</label>
        <input 
          type="text" 
          id="second_name" 
          v-model="store.secondname" 
          placeholder="Введите вашу фамилию" 
          required 
          style="padding: 6px; width: 250px;"
        />
      </div>
      
      <button type="submit" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; cursor: pointer;">
        Отправить POST запрос
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAppStore } from '../store/store' // импортируем наше хранилище

const store = useAppStore() // получаем доступ к объекту через ключи которого выводим данные
</script>