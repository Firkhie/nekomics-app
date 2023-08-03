<template>
  <Navbar />
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <section class="w-full">
      <div class="bg-[#1E1F1F] py-3 px-3 lg:text-base md:text-sm text-xs">
        <div class="flex gap-2">
          <input 
            ref="searchInput"
            type="text" 
            placeholder="Type comic title..." 
            class="w-full py-3 px-4 outline-none bg-[#121213]" 
          >
          <div 
            class="flex items-center justify-center gap-2 px-5 bg-white/5 hover:opacity-70 cursor-pointer" 
            @click="submitSearchQuery"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
        </div>
      </div>
      <div class="relative flex items-center justify-between gap-2 mt-3 lg:text-base md:text-sm text-xs">
        <div id="sort-by-btn" class="relative w-[220px] cursor-pointer group" @click="toggleSortBy">
          <div class="flex justify-between items-center py-2 px-4 bg-[#333434] rounded-sm">
            <div>
              <p class="md:text-sm text-xs text-white/20">Sort By</p>
              <span id="sort-by-selected">Latest Upload</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul id="sort-by-menu" class="absolute flex-col bg-[#333434] rounded-sm w-full cursor-pointer top-[50px] md:top-[59px] lg:top-[62px] left-0 hidden group-open:block">
            <li class="p-4 hover:bg-white/5">Latest Upload</li>
            <li class="p-4 hover:bg-white/5">Oldest Upload</li>
            <li class="p-4 hover:bg-white/5">Title Descending</li>
            <li class="p-4 hover:bg-white/5">Title Ascending</li>
            <li class="p-4 hover:bg-white/5">Year Descending</li>
            <li class="p-4 hover:bg-white/5">Year Ascending</li>
          </ul>
        </div>
        <div class="flex gap-2 md:gap-3">
          <button><i class="fa-solid fa-list px-4 md:px-5 py-3 md:py-4 bg-[#1E1F1F] hover:opacity-70 text-base md:text-lg lg:text-xl"></i></button>
          <button><i class="fa-solid fa-grip px-4 md:px-5 py-3 md:py-4 bg-[#1E1F1F] hover:opacity-70 text-base md:text-lg lg:text-xl"></i></button>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3 mt-3">
        <SeriesCard
          :isLoading="isLoading"
          :searchQuery="searchQuery"
          :currentIndex="currentIndex"
          @isLoading="handleIsLoading"
        />
      </div>
      <div class="flex items-center justify-center mt-6 lg:text-base md:text-sm text-xs">
        <div class="flex items-center justify-center gap-2 flex-wrap">
          <button 
            class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] h-10 gap-2" 
            @click.prevent="prevButtonHandler"
            :disabled="currentIndex === 0"
          ><i class="fa-solid fa-chevron-left text-xs"></i>Prev</button>

          <button 
            class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/40 h-10"
          >{{ currentIndex + 1 }}</button>
          <button 
            class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/10 hover:bg-white/20 h-10"
            @click.prevent="numberHandler(currentIndex + 2)"
          >{{ currentIndex + 2 }}</button>
          <button 
            class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/10 hover:bg-white/20 h-10"
            @click.prevent="numberHandler(currentIndex + 3)"
          >{{ currentIndex + 3 }}</button>
          
          <button 
            class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] h-10 gap-2" 
            @click.prevent="nextButtonHandler"
            :disabled="currentIndex === totalPages - 1"
          >Next<i class="fa-solid fa-chevron-right text-xs"></i></button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import SeriesCard from '../components/SeriesCard.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'SeriesPage',
  components: {
    SeriesCard,
    Navbar
},
  data() {
    return {
      isLoading: true,
      searchQuery: '',
      currentIndex: 0,
    }
  },
  computed: {
    ...mapState(useCounterStore, ['totalComics']),
    totalPages() {
      return Math.ceil(this.totalComics / 8);
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchSeriesComics']),
    // Sort By Comics
    toggleSortBy() {
      let sortByBtn = document.querySelector('#sort-by-btn');
      let sortBySelected = document.querySelector('#sort-by-selected');
      let sortByMenu = document.querySelectorAll('#sort-by-menu li');
      sortByBtn.classList.toggle("open");
      sortByMenu.forEach((menu) => {
          menu.addEventListener("click", () => {
              sortBySelected.innerText = menu.innerText;
              this.searchQuery = sortBySelected.innerText
              this.isLoading = true
              this.currentIndex = 0
          });
      });
    },
    // Search Title
    submitSearchQuery() {
      this.isLoading = true
      this.searchQuery = this.$refs.searchInput.value
      this.currentIndex = 0
    },
    // Pagination
    prevButtonHandler() {
      if (this.currentIndex > 0) {
        this.currentIndex--
        this.isLoading = true
      }
    },
    nextButtonHandler() {
      if (this.currentIndex < this.totalPages - 1) {
        this.currentIndex++
        this.isLoading = true
      }
    },
    numberHandler(pageNumber) {
      this.currentIndex = pageNumber - 1; // Kurangi 1 karena indeks dimulai dari 0
      this.isLoading = true
    },
    handleIsLoading(changeStatus) {
      this.isLoading = changeStatus
    }
  }
}
</script>

<style scoped></style>
