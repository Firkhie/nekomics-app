<template>
  <Hero />
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <!-- ! HOME - POPULAR TODAY -->
    <section class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] md:mt-5 flex flex-col gap-2 md:gap-5">
      <div class="flex justify-between items-center">
        <h5>Popular Today</h5>
        <a href="#" class="lg:text-base md:text-sm text-xs text-white/40">See More</a>
      </div>
      <hr />
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 mt-3 md:text-base text-sm">
        <HomePopularCard />
      </div>
    </section>

    <!-- ! HOME - LATEST UPDATES -->
    <section class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] flex flex-col gap-2 md:gap-5 mt-5 md:mt-10">
      <div class="flex justify-between items-center">
        <h5>Latest Updates</h5>
        <a href="#" class="lg:text-base md:text-sm text-xs text-white/40">See More</a>
      </div>
      <hr />
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3 md:gap-x-4 mt-3 md:text-base text-sm">
        <HomeLatestCard />
      </div>
    </section>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';
import HomePopularCard from '../components/HomePopularCard.vue';
import HomeLatestCard from '../components/HomeLatestCard.vue';

export default {
    name: 'HomePage',
    components: {
    Hero,
    HomePopularCard,
    HomeLatestCard
}
}
</script>

<style scoped></style>
