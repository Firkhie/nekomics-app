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
      component: HomePage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesPage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookmarkPage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonationPage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { hideNavbarFooter: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: { hideNavbarFooter: true }
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailComicPage,
      meta: { hideNavbarFooter: false }
    },
    {
      path: '/read',
      name: 'read',
      component: ReadComicPage,
      meta: { hideNavbarFooter: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')

  if (to.name === 'bookmark' && !isAuthenticated) next({ name: 'login' })
  if (to.name === 'login' && isAuthenticated) next({ name: 'home' })
  if (to.name === 'register' && isAuthenticated) next({ name: 'home' })
  else next()
})

export default router
