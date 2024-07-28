<template>
  <main class="relative w-full text-white flex items-center justify-center">
    <div class="w-[520px] h-[575px]">
      <section
        class="max-w-[520px] max-h-[575px] flex flex-col bg-[#1E1F1F] items-center px-4 py-8 md:p-12 lg:text-base md:text-sm text-xs rounded-md"
      >
        <router-link to="/"><img src="../assets/logo.png" class="h-6 sm:h-7 md:h-9" /></router-link>
        <h4 class="mt-6 md:mt-8 mb-8 md:mb-10">Login</h4>
        <form
          id="login-form"
          class="flex flex-col gap-2 md:gap-3 w-full"
          @submit.prevent="submitLogin"
        >
          <div class="user-input-form">
            <i class="fa-regular fa-envelope"></i>
            <input
              v-model="email"
              class="bg-transparent outline-none w-full"
              type="email"
              id="login-email"
              placeholder="Your email"
              autocomplete="off"
              required
            />
          </div>
          <div class="user-input-form">
            <i class="fa-solid fa-lock"></i>
            <input
              v-model="password"
              class="bg-transparent outline-none w-full"
              type="password"
              id="login-password"
              placeholder="Your password"
              autocomplete="off"
              required
            />
          </div>
          <button
            type="submit"
            class="max-w-[488px] min-h-[48px] rounded-full bg-[#FC304B] hover:bg-[#E32B43] font-bold mt-3 md:mt-5 lg:text-base md:text-sm text-xs"
          >
            Login
          </button>
        </form>
        <p class="mt-5">
          Don't have an account?
          <router-link to="/register" class="text-[#FC304B] hover:text-[#E32B43]"
            >Sign Up</router-link
          >
        </p>
        <div
          class="flex gap-1 sm:gap-2 items-center justify-center py-2 px-3 bg-white/5 rounded-md mt-3"
        >
          <div>
            <p class="text-white/40 sm:text-xs text-[11px]">Email:</p>
            <p class="text-white/40 sm:text-xs text-[11px]">Pass:</p>
          </div>
          <div>
            <p class="text-white/40 sm:text-xs text-[11px]">tester1@gmail.com</p>
            <p class="text-white/40 sm:text-xs text-[11px]">123456</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleLogin']),
    submitLogin() {
      this.handleLogin(this.email, this.password)
    },
    ...mapActions(useCounterStore, ['notify'])
  },
  components: {},
  created() {
    const notifyType = localStorage.getItem('notify_type')
    const notifyMessage = localStorage.getItem('notify_message')

    if (notifyType && notifyMessage) this.notify(notifyMessage, notifyType)
    localStorage.removeItem('notify_type')
    localStorage.removeItem('notify_message')
  }
}
</script>

<style scoped></style>
