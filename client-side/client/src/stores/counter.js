import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    comics: [],
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async handleLogin(email, password) {
      try {
        let user = await axios({
          method: 'post',
          url: `${this.baseUrl}/login`,
          data: { email, password }
        })
        localStorage.setItem('access_token', user.data.access_token)
        localStorage.setItem('username', user.data.username)
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async handleRegister(username, email, password) {
      try {
        await axios({
          method: 'post',
          url: `${this.baseUrl}/register`,
          data: { username, email, password }
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },
    handleLogout() {
      try {
        localStorage.clear()
      } catch (err) {
        console.log(err)
      }
    }
  },
})