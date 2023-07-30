<template>
  <footer class="flex-shrink-0 mt-16 w-full h-[205px] z-20 bg-[#1E1F1F] text-white font-bold">
    <!-- DESKTOP -->
    <div class="hidden flex-row px-8 lg:px-32 items-center justify-center py-12 md:flex">
      <div class="flex items-center justify-start flex-1 gap-5 md:text-base text-sm">
        <a href="#">About</a>
        <a href="#" class="text-center">Privacy Policy</a>
        <a href="#" class="text-center">Terms of Service</a>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <img src="../assets/logo.png" class="h-6 md:h-7 cursor-pointer" />
      </div>
      <div class="flex flex-1 items-center justify-end gap-5">
        <p class="text-center md:text-base text-sm">Contact Us</p>
        <i class="fa-brands fa-whatsapp md:text-2xl text-xl cursor-pointer"></i>
        <i class="fa-solid fa-envelope md:text-2xl text-xl cursor-pointer"></i>
        <i class="fa-brands fa-linkedin md:text-2xl text-xl cursor-pointer"></i>
        <i class="fa-brands fa-instagram md:text-2xl text-xl cursor-pointer"></i>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="flex flex-col px-6 md:px-8 py-6 md:hidden md:text-base text-sm">
      <div class="flex-1 flex items-center">
        <img src="../assets/logo.png" class="h-6 md:h-7 mb-4 cursor-pointer"/>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <a href="#">About</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <div class="flex flex-1 items-center gap-3 sm:gap-5">
          <i class="fa-brands fa-whatsapp text-2xl cursor-pointer"></i>
          <i class="fa-solid fa-envelope text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-linkedin text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-instagram text-2xl cursor-pointer"></i>
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
