<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 lg:mt-12 text-white flex-grow">
    <section class="max-w-[520px] max-h-[575px] mx-auto flex flex-col bg-[#1E1F1F] items-center px-4 py-8 md:p-12 lg:text-base md:text-sm text-xs md:mt-5">
      <img src="../assets/logo.png" class="h-6 sm:h-7 md:h-9" />
      <h4 class="mt-6 md:mt-8 mb-8 md:mb-10">Login</h4>
      <form id="login-form" class="flex flex-col gap-2 md:gap-3 w-full ">
        <div class="user-input-form">
          <i class="fa-regular fa-envelope"></i>
          <input
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
            class="bg-transparent outline-none w-full"
            type="password"
            id="login-password"
            placeholder="Your password"
            autocomplete="off"
            required
          />
        </div>
        <button type="submit" class="max-w-[488px] min-h-[48px] rounded-full bg-[#FC304B] hover:bg-[#E32B43] font-bold mt-3 md:mt-5 lg:text-base md:text-sm text-xs">Login</button>
      </form>
      <p class="mt-5">Don't have an account? <a href="#" class="text-[#FC304B] hover:text-[#E32B43]">Sign Up</a></p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped></style>
