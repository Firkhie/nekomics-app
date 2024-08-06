import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    // baseUrl: 'https://nekomics-app.onrender.com',
    totalComics: 0,
    sortByQuery: '',
    popularComics: [],
    latestComics: [],
    seriesComics: [],
    detailComic: {},
    chapterPages: {},
    bookmarks: [],
    histories: []
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    notify(message, type) {
      toast(message, { autoClose: 1000, type: type, theme: 'dark' })
    },
    async handleLogin(email, password) {
      try {
        let user = await axios({
          method: 'post',
          url: `${this.baseUrl}/login`,
          data: { email, password }
        })
        localStorage.setItem('access_token', user.data.access_token)
        localStorage.setItem('username', user.data.username)

        localStorage.setItem('notify_type', 'success')
        localStorage.setItem('notify_message', 'Login success!')
        this.router.push('/')
      } catch (err) {
        this.notify(err.response.data.message, 'error')
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

        localStorage.setItem('notify_type', 'success')
        localStorage.setItem('notify_message', 'Register success!')

        this.router.push('/login')
      } catch (err) {
        this.notify(err.response.data.message, 'error')
        console.log(err)
      }
    },
    handleLogout() {
      try {
        localStorage.clear()

        localStorage.setItem('notify_type', 'success')
        localStorage.setItem('notify_message', 'Logout success!')

        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },
    async fetchPopularComics() {
      try {
        let popularComics = await axios.get(`${this.baseUrl}/comics/popularcomics`)
        this.popularComics = popularComics.data.comicsData
        this.popularComics.map((data) => {
          const coverArt = `${this.baseUrl}/comics/coverart/${data.id}/${data.coverFileName}`
          return (data['coverArt'] = coverArt)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchLatestComics() {
      try {
        let latestComics = await axios.get(`${this.baseUrl}/comics/latestcomics`)
        this.latestComics = latestComics.data.comicsData
        this.latestComics.map((data) => {
          const coverArt = `${this.baseUrl}/comics/coverart/${data.id}/${data.coverFileName}`
          return (data['coverArt'] = coverArt)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchSeriesComics(query = 'Latest Upload', page = 0) {
      try {
        let seriesComics = await axios.get(
          `${this.baseUrl}/comics/seriescomics?query=${query}&&page=${page}`
        )
        this.seriesComics = seriesComics.data.comicsData
        this.seriesComics.map((data) => {
          const coverArt = `${this.baseUrl}/comics/coverart/${data.id}/${data.coverFileName}`
          return (data['coverArt'] = coverArt)
        })
        this.totalComics = seriesComics.data.totalComics
      } catch (err) {
        console.log(err)
      }
    },
    async fetchDetailComic() {
      try {
        let comicId = localStorage.getItem('comicId')
        const detailComic = await axios.get(`${this.baseUrl}/comics/detail/${comicId}`)
        this.detailComic = detailComic.data
        const coverArt = `${this.baseUrl}/comics/coverart/${detailComic.data.id}/${detailComic.data.coverFileName}`
        this.detailComic['coverArt'] = coverArt
      } catch (err) {
        console.log(err)
      }
    },
    async fetchChapterPages() {
      try {
        let comicId = localStorage.getItem('comicId')
        let chapterId = localStorage.getItem('chapterId')
        const chapterPages = await axios({
          method: 'get',
          url: `${this.baseUrl}/comics/read/${comicId}/${chapterId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.chapterPages = chapterPages.data
        this.chapterPages['chapterArt'] = []
        this.chapterPages.chapterArr.map((data) => {
          const chapterArt = `${this.baseUrl}/comics/chapterpages/${this.chapterPages.chapterHash}/${data}`
          return this.chapterPages['chapterArt'].push(chapterArt)
        })
        console.log(this.chapterPages, 'terbaru')
      } catch (err) {
        console.log(err)
      }
    },
    async createBookmark(comicId) {
      try {
        await axios({
          method: 'post',
          url: `${this.baseUrl}/bookmarks`,
          data: { comicId },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.notify('Add bookmark success!', 'success')
      } catch (err) {
        this.notify(err.response.data.message, 'error')
        console.log(err)
      }
    },
    async deleteBookmarkById(comicId) {
      try {
        await axios({
          method: 'delete',
          url: `${this.baseUrl}/bookmarks/${comicId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.notify('Delete bookmark success!', 'success')
      } catch (err) {
        console.log(err)
      }
    },
    async fetchBookmarks() {
      try {
        const bookmarks = await axios({
          method: 'get',
          url: `${this.baseUrl}/bookmarks`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.bookmarks = bookmarks.data
        this.bookmarks.map((data) => {
          const coverArt = `${this.baseUrl}/comics/coverart/${data.id}/${data.coverFileName}`
          return (data['coverArt'] = coverArt)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchHistories() {
      try {
        const histories = await axios({
          method: 'get',
          url: `${this.baseUrl}/histories`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.histories = histories.data
        console.log(this.histories)
        this.histories.map((data) => {
          const coverArt = `${this.baseUrl}/comics/coverart/${data.comicId}/${data.coverFileName}`
          return (data['coverArt'] = coverArt)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async midtransDonation(donateAmount, email) {
      try {
        if (!donateAmount || !email) {
          this.notify('Please fill in both the donation amount and email.', 'error')
          return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          this.notify('Please enter a valid email address.', 'error')
          return
        }
        const midtransToken = await axios({
          url: `${this.baseUrl}/generate-mt-token`,
          method: 'post',
          data: { donateAmount, email }
        })
        window.snap.pay(midtransToken.data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert('payment success!')
            console.log(result)
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert('waiting your payment!')
            console.log(result)
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert('payment failed!')
            console.log(result)
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment')
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
