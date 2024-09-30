<template>
  <HeroComponent />
  <main class="relative w-full max-w-screen-xl px-3 md:px-8 mx-auto text-white flex-grow">
    <!-- ! HOME - POPULAR TODAY -->
    <section
      class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] md:mt-5 flex flex-col items-center gap-2 md:gap-5"
    >
      <div class="w-full flex justify-between items-center">
        <h5>Popular Today</h5>
        <router-link to="/series" class="text-base text-white/40 hidden sm:block"
          >See More</router-link
        >
      </div>
      <hr class="w-full" />
      <div
        class="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 mt-3 md:text-base text-sm"
      >
        <HomePopularCard />
      </div>
      <router-link
        to="/series"
        class="flex items-center justify-center gap-1 w-fit py-2 px-3 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] mt-2 lg:text-base md:text-sm text-xs sm:hidden"
        >See More<i class="fa-solid fa-angles-right"></i
      ></router-link>
    </section>

    <!-- ! HOME - LATEST UPDATES -->
    <section
      class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] flex flex-col items-center gap-2 md:gap-5 mt-5 md:mt-10"
    >
      <div class="w-full flex justify-between items-center">
        <h5>Latest Updates</h5>
        <router-link to="/series" class="text-base text-white/40 hidden sm:block"
          >See More</router-link
        >
      </div>
      <hr class="w-full" />
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3 md:gap-x-4 mt-3 md:text-base text-sm"
      >
        <HomeLatestCard />
      </div>
      <router-link
        to="/series"
        class="flex items-center justify-center gap-1 w-fit py-2 px-3 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] mt-2 lg:text-base md:text-sm text-xs sm:hidden"
        >See More<i class="fa-solid fa-angles-right"></i
      ></router-link>
    </section>
  </main>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'
import HomePopularCard from '../components/HomePopularCard.vue'
import HomeLatestCard from '../components/HomeLatestCard.vue'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'HomePage',
  components: {
    HeroComponent,
    HomePopularCard,
    HomeLatestCard
  },
  methods: {
    ...mapActions(useCounterStore, ['notify'])
  },
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
