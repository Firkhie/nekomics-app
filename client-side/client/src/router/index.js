import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BookmarkPage from '../views/BookmarkPage.vue'
import DetailComicPage from '../views/DetailComicPage.vue'
import DonationPage from '../views/DonationPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import SeriesPage from '../views/SeriesPage.vue'
import ReadComicPage from '../views/ReadComicPage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesPage
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookmarkPage
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonationPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailComicPage
    },
    {
      path: '/read',
      name: 'read',
      component: ReadComicPage
    },
  ]
})

export default router
