<template>
  <header class="w-full h-16 md:h-20 z-20 md:mb-5 bg-[#1E1F1F] text-white">
    <!-- DESKTOP -->
    <nav class="items-center justify-between h-full w-full px-32 hidden lg:flex">
      <div class="flex items-center justify-between gap-6 text-base">
        <a href="#"><img src="../assets/logo.png" class="h-7 mr-3" /></a>
        <a href="#" class="hover:text-white/80">Series</a>
        <a href="#" class="hover:text-white/80">Bookmarks</a>
        <a href="#" class="hover:text-white/80">Donate</a>
        <a href="#" class="hover:text-white/80">About</a>
      </div>
      <div class="flex items-center justify-between gap-6 text-base">
        <a href="#" class="hover:text-white/80">Log In</a>
        <a href="#" class="px-4 py-2 rounded-[5px] bg-[#FC304B] hover:bg-[#E32B43]">Sign Up</a>
      </div>
    </nav>
    <!-- MOBILE -->
    <nav class="items-center justify-between h-full w-full px-6 md:px-8 mx-auto flex lg:hidden">
      <div class="flex items-center justify-between gap-6">
        <a href="#"><img src="../assets/logo.png" class="h-6 md:h-7" /></a>
      </div>
      <div class="flex items-center justify-between gap-4 md:gap-6 lg:text-base md:text-sm text-xs">
        <a href="#" class="px-3 md:px-4 py-[7px] rounded-[4px] bg-[#FC304B] hover:bg-[#E32B43]">Sign Up</a>
        <div id="mobile-menu-btn" class="group peer w-fit flex flex-col gap-1 cursor-pointer">
          <div class="burger-bar group-open:top-[8px] group-open:rotate-45"></div>
          <div class="burger-bar opacity-100 group-open:opacity-0"></div>
          <div class="burger-bar group-open:-top-[6.2px] group-open:-rotate-45"></div>
        </div>
        <div class="absolute top-[66px] md:top-[80px] left-0 w-full bg-[#1E1F1F] hidden peer-open:block">
          <a class="mobile-menu-item">Series</a>
          <a class="mobile-menu-item">Bookmarks</a>
          <a class="mobile-menu-item">Donate</a>
          <a class="mobile-menu-item">About</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped></style>
