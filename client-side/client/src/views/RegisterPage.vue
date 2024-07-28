<template>
  <main class="relative w-full text-white flex items-center justify-center">
    <div class="w-[520px] h-[575px]">
      <section
        class="max-w-[520px] max-h-[575px] flex flex-col bg-[#1E1F1F] items-center px-4 py-8 md:p-12 lg:text-base md:text-sm text-xs rounded-md"
      >
      <router-link to="/"><img src="../assets/logo.png" class="h-6 sm:h-7 md:h-9" /></router-link>
        <h4 class="mt-6 md:mt-8 mb-8 md:mb-10">Register</h4>
        <form
          id="register-form"
          class="flex flex-col gap-2 md:gap-3 w-full"
          @submit.prevent="submitRegister"
        >
          <div class="user-input-form">
            <i class="fa-regular fa-user"></i>
            <input
              v-model="username"
              class="bg-transparent outline-none w-full"
              type="text"
              id="register-username"
              placeholder="Your username"
              autocomplete="off"
              required
            />
          </div>
          <div class="user-input-form">
            <i class="fa-regular fa-envelope"></i>
            <input
              v-model="email"
              class="bg-transparent outline-none w-full"
              type="email"
              id="register-email"
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
              id="register-password"
              placeholder="Your password"
              autocomplete="off"
              required
            />
          </div>
          <button
            type="submit"
            class="max-w-[488px] min-h-[48px] rounded-full bg-[#FC304B] hover:bg-[#E32B43] font-bold mt-3 md:mt-5 lg:text-base md:text-sm text-xs"
          >
            Register
          </button>
        </form>
        <p class="mt-5">
          Already have an account?
          <router-link to="/login" class="text-[#FC304B] hover:text-[#E32B43]">Log In</router-link>
        </p>
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleRegister']),
    submitRegister() {
      this.handleRegister(this.username, this.email, this.password)
    }
  },
  components: {}
}
</script>

<style scoped></style>
