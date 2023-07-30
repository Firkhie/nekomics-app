<template>
  <footer class="flex-shrink-0 mt-16 w-full h-[205px] z-20 bg-[#1E1F1F] text-white font-bold">
    <!-- DESKTOP -->
    <div class="hidden flex-row px-8 lg:px-32 items-center justify-center py-12 md:flex">
      <div class="flex items-center justify-start flex-1 gap-5 md:text-base text-sm">
        <router-link to="/about">About</router-link>
        <p class="text-center cursor-pointer">Privacy Policy</p>
        <p class="text-center cursor-pointer">Terms of Service</p>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <router-link to="/"><img src="../assets/logo.png" class="h-6 md:h-7" /></router-link>
      </div>
      <div class="flex flex-1 items-center justify-end gap-5">
        <p class="text-center md:text-base text-sm">Contact Us</p>
        <a href="https://wa.me/083834572348" target="_blank"><i class="fa-brands fa-whatsapp md:text-2xl text-xl cursor-pointer"></i></a>
        <a href="mailto:alfalakhie@gmail.com" target="_blank"><i class="fa-solid fa-envelope md:text-2xl text-xl cursor-pointer"></i></a>
        <a href="https://www.linkedin.com/in/firdigalfalakhi/" target="_blank"><i class="fa-brands fa-linkedin md:text-2xl text-xl cursor-pointer"></i></a>
        <a href="https://github.com/Firkhie" target="_blank"><i class="fa-brands fa-github md:text-2xl text-xl cursor-pointer"></i></a>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="flex flex-col px-6 md:px-8 py-6 md:hidden md:text-base text-sm">
      <div class="flex-1 flex items-center">
        <router-link to="/"><img src="../assets/logo.png" class="h-6 md:h-7 mb-4" /></router-link>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <router-link to="/about">About</router-link>
        <p class="cursor-pointer">Privacy Policy</p>
        <p class="cursor-pointer">Terms of Service</p>
        <div class="flex flex-1 items-center gap-3 sm:gap-5">
          <a href="https://wa.me/083834572348" target="_blank"><i class="fa-brands fa-whatsapp md:text-2xl text-xl cursor-pointer"></i></a>
          <a href="mailto:alfalakhie@gmail.com" target="_blank"><i class="fa-solid fa-envelope md:text-2xl text-xl cursor-pointer"></i></a>
          <a href="https://www.linkedin.com/in/firdigalfalakhi/" target="_blank"><i class="fa-brands fa-linkedin md:text-2xl text-xl cursor-pointer"></i></a>
          <a href="https://github.com/Firkhie" target="_blank"><i class="fa-brands fa-github md:text-2xl text-xl cursor-pointer"></i></a>
        </div>
      </div>
    </div>
    <hr class="border-white/10 mx-6 md:mx-8 lg:mx-32" />
    <p class="py-5 text-center text-zinc-500 font-normal md:text-base sm:text-sm text-xs">
      © 2023 Nekomics. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped></style>
