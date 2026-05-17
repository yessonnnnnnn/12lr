import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    fetchdata: null, // сюда сложим массив пользователей с сервера
    firstname: '',   // поле формы: имя
    secondname: ''   // поле формы: фамилия
  }),
  actions: {
    // Метод для получения данных (Страница 2)
    async getApidata() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // делаем запрос на сервер
        const result = await response.json() // преобразуем в объект/массив
        this.fetchdata = result // ложим данные в наше хранилище
        console.log('Данные успешно загружены:', this.fetchdata)
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    },
    // Метод для отправки формы (Страница 3)
    async sendmessage() {
      // создаем объект, который необходимо направить по api
      let ContactForm = {
        title: this.firstname,
        body: this.secondname,
        userId: 1
      }

      try {
        // указываем адрес и метод POST
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({ ContactForm }), // преобразуем наш объект в json формат
          headers: {
            'Content-type': 'application/json; charset=UTF-8' // устанавливаем заголовки
          }
        })
        const json = await response.json()
        
        // Выведем алерт, чтобы препод сразу увидел успешный ответ от API
        alert('Успешно отправлено! Ответ сервера: ' + JSON.stringify(json))
        
        // Очищаем поля ввода после успешной отправки
        this.firstname = ''
        this.secondname = ''
      } catch (error) {
        console.error('Ошибка при отправке:', error)
      }
    }
  }
})