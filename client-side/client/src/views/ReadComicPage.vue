<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 lg:mt-12 text-white flex-grow">
    <section class="relative w-full flex flex-col md:text-base text-sm">
      <div class="flex flex-col justify-center items-center">
        <h4 class="text-center">Infinite Level up in Murim Chapter 157</h4>
        <p class="text-center">All chapters are in <router-link to="/detail" class="text-[#FC304B] hover:text-[#E32B43] cursor-pointer">Infinite Level up in Murim</router-link></p>
        <p class="text-white/40 text-center my-3 md:mt-4 md:mb-10">All the data including images and translation results from this comic are obtained exclusively from the Mangadex API, ensuring that there are no advertisements or any other additional elements added to it.</p>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div id="chapter-btn" class="relative w-[150px] cursor-pointer group text-xs md:text-sm" @click="toggleChapter">
          <div class="flex justify-between items-center py-2 px-4 bg-[#1E1F1F] rounded-sm">
            <div>
              <span id="chapter-selected">Chapter 5</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul
            id="chapter-menu"
            class="absolute flex-col bg-[#1E1F1F] rounded-sm w-full cursor-pointer scroll-container z-30 top-[38px] max-h-[165px] overflow-auto left-0 hidden group-open:block"
            >
            <li class="py-2 px-4 hover:bg-white/5">Chapter 10</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 9</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 8</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 7</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 6</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 5</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 4</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 3</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 2</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 1</li>
          </ul>
        </div>
        <div class="flex gap-2">
          <a href="#" class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm">Prev</a>
          <a href="#" class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm">Next</a>
        </div>
      </div>
      <div class="flex flex-col justify-between items-center my-4 md:my-10 w-max-[700px]">
        <img v-bind:src="chapterPages" alt="" />
      </div>
      <div class="flex flex-row justify-between items-center">
        <div id="chapter-btn" class="relative w-[150px] cursor-pointer group text-xs md:text-sm">
          <div class="flex justify-between items-center py-2 px-4 bg-[#1E1F1F] rounded-sm">
            <div>
              <span id="chapter-selected">Chapter 5</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul id="chapter-menu" class="absolute flex-col bg-[#1E1F1F] rounded-sm w-full cursor-pointer top-[35px] left-0 hidden group-open:block">
            <li class="py-2 px-4 hover:bg-white/5">Chapter 5</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 4</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 3</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 2</li>
            <li class="py-2 px-4 hover:bg-white/5">Chapter 1</li>
          </ul>
        </div>
        <div class="flex gap-2">
          <a href="#" class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm">Prev</a>
          <a href="#" class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm">Next</a>
        </div>
      </div>
      <div 
        id="scroll-top-btn"
        class="fixed z-30 bottom-8 lg:bottom-12 right-7 w-[35px] md:w-[40px] h-[35px] md:h-[40px] flex justify-center items-center rounded-full bg-[#FC304B] hover:bg-[#E32B43] cursor-pointer"
        @click="scrollTop"
        ><i class="fa-solid fa-chevron-up text-xs md:text-sm font-bold"></i></div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'ReadComicPage',
  computed: {
    ...mapState(useCounterStore, ['chapterPages'])
  },
  methods: {
    scrollTop() {
      let scrollTopBtn = document.querySelector("#scroll-top-btn")
      // For Safari
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      // For Chrome, Firefox, IE, and Opera
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleChapter() {
      let chapterBtn = document.querySelector('#chapter-btn');
      let chapterSelected = document.querySelector('#chapter-selected');
      let chapterMenu = document.querySelectorAll('#chapter-menu li');
      chapterBtn.classList.toggle("open");
      chapterMenu.forEach((menu) => {
          menu.addEventListener("click", () => {
              chapterSelected.innerText = menu.innerText;
          });
      });
    }
  }
}
</script>

<style scoped></style>
