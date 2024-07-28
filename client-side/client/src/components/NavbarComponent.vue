<template>
  <header class="w-full h-16 md:h-20 z-50 mb-8 md:mb-12 bg-[#1E1F1F] text-white relative">
    <!-- DESKTOP -->
    <nav
      class="items-center justify-between h-full w-full px-8 max-w-screen-xl mx-auto hidden lg:flex"
    >
      <div class="flex items-center justify-between gap-6 text-base">
        <router-link to="/"><img src="../assets/logo.png" class="h-7 mr-3" /></router-link>
        <router-link to="/series" class="hover:text-white/80">Series</router-link>
        <router-link to="/bookmark" class="hover:text-white/80">Bookmarks</router-link>
        <router-link to="/donate" class="hover:text-white/80">Donate</router-link>
        <router-link to="/about" class="hover:text-white/80">About</router-link>
      </div>
      <div class="flex items-center justify-between gap-6 text-base" v-if="!access_token">
        <router-link to="/login" class="hover:text-white/80">Log In</router-link>
        <router-link to="/register" class="px-4 py-2 rounded-[5px] bg-[#FC304B] hover:bg-[#E32B43]"
          >Sign Up</router-link
        >
      </div>
      <div class="flex items-center justify-between gap-6 text-base" v-if="access_token">
        <p>Welcome, {{ username }}</p>
        <router-link
          to="/"
          class="px-4 py-2 rounded-[5px] bg-[#FC304B] hover:bg-[#E32B43]"
          @click.prevent="clickLogout"
          >Log Out</router-link
        >
      </div>
    </nav>
    <!-- MOBILE -->
    <nav class="items-center justify-between h-full w-full px-6 md:px-8 mx-auto flex lg:hidden">
      <div class="flex items-center justify-between gap-6">
        <router-link to="/"><img src="../assets/logo.png" class="h-6 md:h-7" /></router-link>
      </div>
      <div class="flex items-center justify-between gap-4 md:gap-6 lg:text-base md:text-sm text-xs">
        <router-link
          to="/register"
          class="px-3 md:px-4 py-[7px] rounded-[4px] bg-[#FC304B] hover:bg-[#E32B43]"
          v-if="!access_token"
          >Sign Up</router-link
        >
        <router-link
          to="/"
          class="px-3 md:px-4 py-[7px] rounded-[4px] bg-[#FC304B] hover:bg-[#E32B43]"
          v-if="access_token"
          @click.prevent="clickLogout"
          >Log Out</router-link
        >
        <div
          id="mobile-menu-btn"
          class="group peer w-fit flex flex-col gap-1 cursor-pointer"
          @click="toggleMenu"
        >
          <div class="burger-bar group-open:top-[8px] group-open:rotate-45"></div>
          <div class="burger-bar opacity-100 group-open:opacity-0"></div>
          <div class="burger-bar group-open:-top-[6.2px] group-open:-rotate-45"></div>
        </div>
        <div
          class="absolute top-[66px] md:top-[80px] left-0 w-full bg-[#1E1F1F] hidden peer-open:block"
        >
          <router-link to="/series" class="mobile-menu-item" @click="closeMenu">Series</router-link>
          <router-link to="/bookmark" class="mobile-menu-item" @click="closeMenu"
            >Bookmarks</router-link
          >
          <router-link to="/donate" class="mobile-menu-item" @click="closeMenu">Donate</router-link>
          <router-link to="/about" class="mobile-menu-item" @click="closeMenu">About</router-link>
          <router-link to="/login" class="mobile-menu-item" @click="closeMenu" v-if="!access_token"
            >Login</router-link
          >
          <p
            class="flex w-full items-center justify-center p-4 transition-color font-bold text-sm md:text-base border-t-2 border-[#FC304B]"
            v-if="access_token"
          >
            Welcome, {{ username }}
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'NavbarComponent',
  methods: {
    toggleMenu() {
      let mobileMenuBtn = document.querySelector('#mobile-menu-btn')
      mobileMenuBtn.classList.toggle('open')
    },
    closeMenu() {
      let mobileMenuBtn = document.querySelector('#mobile-menu-btn')
      mobileMenuBtn.classList.remove('open')
    },
    ...mapActions(useCounterStore, ['handleLogout']),
    clickLogout() {
      this.handleLogout()
    }
  },
  computed: {
    access_token() {
      return localStorage.access_token
    },
    username() {
      return localStorage.username
    }
  }
}
</script>

<style scoped></style>
