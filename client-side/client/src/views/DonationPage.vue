<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <section class="max-w-[700px] max-h-[600px] mx-auto flex flex-col bg-[#1E1F1F] items-center px-4 py-8 md:p-12 lg:text-base md:text-sm text-xs md:mt-5">
      <img src="../assets/logo.png" class="h-6 sm:h-7 md:h-9" />
      <div class="grid grid-cols-2 gap-2 w-full mt-10 mb-3 md:mb-5">
        <button class="p-4 bg-white/10 hover:bg-white/20 rounded-sm">Rp. 10.000</button>
        <button class="p-4 bg-white/10 hover:bg-white/20 rounded-sm">Rp. 20.000</button>
        <button class="p-4 bg-white/10 hover:bg-white/20 rounded-sm">Rp. 50.000</button>
        <button class="p-4 bg-white/10 hover:bg-white/20 rounded-sm">Rp. 100.000</button>
      </div>
      <hr class="w-full border-[#FF3852]">
      <form id="donate-form" class="flex flex-col gap-2 w-full mt-3 md:mt-5">
        <div class="user-input-form">
          <i class="fa-solid fa-rupiah-sign"></i>
          <input
            class="bg-transparent outline-none w-full"
            type="text"
            id="donate-username"
            placeholder="Your donation amount"
            autocomplete="off"
            required
          />
        </div>
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
        <button type="submit" class="w-full min-h-[48px] rounded-full bg-[#FC304B] hover:bg-[#E32B43] font-bold my-3 md:my-5">Donate</button>
      </form>
      <div class="flex gap-2 sm:gap-3 items-center justify-center p-2 bg-white/5 rounded-md">
        <i class="fa-solid fa-circle-exclamation text-[#9a2b3a]"></i>
        <p class="text-white/40 sm:text-xs text-[11px]">This donation page is only used for learning, in fact we will not be able to receive a penny of money that has been donated</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'DonationPage'
}
</script>

<style scoped></style>
