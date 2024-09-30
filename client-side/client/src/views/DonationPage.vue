<template>
  <main class="relative w-full max-w-screen-xl px-3 md:px-8 mx-auto text-white flex-grow">
    <section
      class="max-w-[700px] max-h-[600px] mx-auto flex flex-col bg-[#1E1F1F] items-center px-4 py-8 md:p-12 lg:text-base md:text-sm text-xs md:mt-5"
    >
      <img src="../assets/logo.png" class="h-6 sm:h-7 md:h-9" />
      <div class="grid grid-cols-2 gap-2 w-full mt-10 mb-3 md:mb-5">
        <button
          class="p-4 bg-white/10 hover:bg-white/20 rounded-sm"
          @click.prevent="donateAmountBtn(10000)"
        >
          Rp. 10.000
        </button>
        <button
          class="p-4 bg-white/10 hover:bg-white/20 rounded-sm"
          @click.prevent="donateAmountBtn(20000)"
        >
          Rp. 20.000
        </button>
        <button
          class="p-4 bg-white/10 hover:bg-white/20 rounded-sm"
          @click.prevent="donateAmountBtn(50000)"
        >
          Rp. 50.000
        </button>
        <button
          class="p-4 bg-white/10 hover:bg-white/20 rounded-sm"
          @click.prevent="donateAmountBtn(100000)"
        >
          Rp. 100.000
        </button>
      </div>
      <hr class="w-full border-[#FF3852]" />
      <form id="donate-form" class="flex flex-col gap-2 w-full mt-3 md:mt-5">
        <div class="user-input-form">
          <i class="fa-solid fa-rupiah-sign"></i>
          <input
            v-model="donateAmount"
            class="bg-transparent outline-none w-full"
            type="number"
            id="donate-amount"
            placeholder="Your donation amount"
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
            id="email"
            placeholder="Your email"
            autocomplete="off"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full min-h-[48px] rounded-full bg-[#FC304B] hover:bg-[#E32B43] font-bold my-3 md:my-5"
          @click.prevent="submitDonation"
        >
          Donate
        </button>
      </form>
      <div class="flex gap-2 sm:gap-3 items-center justify-center p-2 bg-white/5 rounded-md">
        <i class="fa-solid fa-circle-exclamation text-[#9a2b3a]"></i>
        <p class="text-white/40 sm:text-xs text-[11px]">
          This donation page is only used for learning, in fact we will not be able to receive a
          penny of money that has been donated
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  data() {
    return {
      donateAmount: '',
      email: ''
    }
  },
  name: 'DonationPage',
  methods: {
    ...mapActions(useCounterStore, ['midtransDonation']),
    submitDonation() {
      this.midtransDonation(this.donateAmount, this.email)
    },
    donateAmountBtn(amount) {
      this.donateAmount = amount
    }
  },
  components: {}
}
</script>

<style scoped></style>
