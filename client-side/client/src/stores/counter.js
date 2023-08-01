import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    totalComics: 0,
    sortByQuery: '',
    popularComics: [],
    latestComics: [],
    seriesComics: [],
    detailComic: {},
    chapterPages: '',
    bookmarks: [],
    histories: []
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
    },
    async fetchPopularComics() {
      try {
        let popularComics = await axios.get(`${this.baseUrl}/comics/popularcomics`)
        this.popularComics = popularComics.data.comicsData
      } catch (err) {
        console.log(err)
      }
    },
    async fetchLatestComics() {
      try {
        let latestComics = await axios.get(`${this.baseUrl}/comics/latestcomics`)
        this.latestComics = latestComics.data.comicsData
      } catch (err) {
        console.log(err)
      }
    },
    async fetchSeriesComics(query = 'Latest Upload', page = 0) {
      try {
        let seriesComics = await axios.get(`${this.baseUrl}/comics/seriescomics?query=${query}&&page=${page}`)
        this.seriesComics = seriesComics.data.comicsData
        this.totalComics = seriesComics.data.totalComics
      } catch (err) {
        console.log(err)
      }
    },
    async fetchDetailComic(comicId) {
      try {
        const detailComic = await axios.get(`${this.baseUrl}/comics/detail/${comicId}`)
        this.detailComic = detailComic.data
        this.router.push('/detail')
      } catch (err) {
        console.log(err)
      }
    },
    async fetchChapterPages(comicId, chapterId) {
      try {
        const chapterPages = await axios({
          method: 'get',
          url: `${this.baseUrl}/comics/read/${comicId}/${chapterId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          responseType: 'arraybuffer'
        })
        const blob = new Blob([chapterPages.data], { type: 'image/jpeg' })
        this.chapterPages = URL.createObjectURL(blob)
        this.router.push('/read')
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
      } catch (err) {
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
        console.log(this.bookmarks)
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
      } catch (err) {
        console.log(err)
      }
    },
    async midtransDonation(donateAmount, email) {
      try {
        const midtransToken = await axios({
          url: `${this.baseUrl}/generate-mt-token`,
          method: 'post',
          data: { donateAmount, email }
        })
        window.snap.pay(midtransToken.data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            alert("waiting your payment!"); console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
})