<template>
  <div id="app">
    <nav style="padding: 15px; background-color: #f0f0f0; margin-bottom: 20px;">
      <router-link to="/" style="margin-right: 15px; font-weight: bold;">Главная</router-link>
      <router-link to="/data" style="margin-right: 15px; font-weight: bold;">Данные с API</router-link>
      <router-link to="/form" style="font-weight: bold;">Форма отправки</router-link>
    </nav>
    
    <main style="padding: 10px;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Компонент просто служит каркасом для SPA
</script>