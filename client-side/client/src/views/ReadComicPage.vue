<template>
  <main class="relative w-full max-w-screen-xl px-6 md:px-8 mx-auto mt-5 lg:mt-12 text-white flex-grow">
    <section class="relative w-full flex flex-col md:text-base text-sm">
      <div class="flex flex-col justify-center items-center">
        <h4 class="text-center">{{ comicName }} Chapter {{ chapter }}</h4>
        <p class="text-center">
          All chapters are in
          <router-link to="/detail" class="text-[#FC304B] hover:text-[#E32B43] cursor-pointer">{{
            comicName
          }}</router-link>
        </p>
        <p class="text-white/40 text-center my-3 md:mt-4 md:mb-10">
          All the data including images and translation results from this comic are obtained
          exclusively from the Mangadex API, ensuring that there are no advertisements or any other
          additional elements added to it.
        </p>
      </div>
      <div class="flex flex-row justify-between items-center mb-4 md:mb-10">
        <div
          id="chapter-btn"
          class="relative w-[150px] cursor-pointer group text-xs md:text-sm"
          @click="toggleChapter"
        >
          <div class="flex justify-between items-center py-2 px-4 bg-[#1E1F1F] rounded-sm">
            <div>
              <span id="chapter-selected">Chapter {{ chapter }}</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul
            id="chapter-menu"
            class="absolute flex-col bg-[#1E1F1F] rounded-sm w-full cursor-pointer scroll-container z-30 top-[38px] max-h-[165px] overflow-auto left-0 hidden group-open:block"
          >
            <li
              class="py-2 px-4 hover:bg-white/5"
              v-for="chapter in detailComic.detailChapters"
              :key="chapter.chapterId"
            >
              Chapter {{ chapter.chapter }}
            </li>
          </ul>
        </div>
        <div class="flex gap-2">
          <button
            class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm"
          >
            Prev
          </button>
          <button
            class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm"
          >
            Next
          </button>
        </div>
      </div>
      <div v-if="isLoading" class="flex flex-col justify-between items-center w-max-[700px]">
        <div id="container">
          <svg viewBox="0 0 100 100">
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#fc6767" />
              </filter>
            </defs>
            <circle
              id="spinner"
              style="
                fill: transparent;
                stroke: #fc304b;
                stroke-width: 7px;
                stroke-linecap: round;
                filter: url(#shadow);
              "
              cx="50"
              cy="50"
              r="45"
            />
          </svg>
        </div>
      </div>
      <div
        v-else
        class="flex flex-col justify-between items-center w-max-[700px]"
        v-for="(pageUrl, index) in chapterPages.chapterArt"
        :key="index"
      >
        <img v-bind:src="pageUrl" alt="" />
      </div>
      <div class="flex flex-row justify-between items-center mt-4 md:mt-10">
        <div
          id="chapter-btn"
          class="relative w-[150px] cursor-pointer group text-xs md:text-sm"
          @click="toggleChapter"
        >
          <div class="flex justify-between items-center py-2 px-4 bg-[#1E1F1F] rounded-sm">
            <div>
              <span id="chapter-selected">Chapter {{ chapter }}</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul
            id="chapter-menu"
            class="absolute flex-col bg-[#1E1F1F] rounded-sm w-full cursor-pointer scroll-container z-30 top-[38px] max-h-[165px] overflow-auto left-0 hidden group-open:block"
          >
            <li
              class="py-2 px-4 hover:bg-white/5"
              v-for="chapter in detailComic.detailChapters"
              :key="chapter.chapterId"
            >
              Chapter {{ chapter.chapter }}
            </li>
          </ul>
        </div>
        <div class="flex gap-2">
          <button
            class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm"
          >
            Prev
          </button>
          <button
            class="py-2 px-4 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] text-xs md:text-sm rounded-sm"
          >
            Next
          </button>
        </div>
      </div>
      <div
        id="scroll-top-btn"
        class="fixed z-30 bottom-8 lg:bottom-12 right-7 w-[35px] md:w-[40px] h-[35px] md:h-[40px] flex justify-center items-center rounded-full bg-[#FC304B] hover:bg-[#E32B43] cursor-pointer"
        @click="scrollTop"
      >
        <i class="fa-solid fa-chevron-up text-xs md:text-sm font-bold"></i>
      </div>
      <div class="mt-10 lg:text-base md:text-sm text-xs">
        <h4>Comment</h4>
        <hr class="mt-2 md:mt-5 mb-5 md:mb-10" />
        <Disqus />
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'ReadComicPage',
  components: {},
  data() {
    return {
      isLoading: true,
      comicName: localStorage.getItem('comicName'),
      chapter: localStorage.getItem('chapter')
    }
  },
  computed: {
    ...mapState(useCounterStore, ['chapterPages']),
    ...mapState(useCounterStore, ['detailComic'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchChapterPages']),
    async fetchData() {
      try {
        await this.fetchChapterPages()
      } catch (err) {
        console.error(err)
      } finally {
        if (this.chapterPages.length !== 0) this.isLoading = false
      }
    },
    // submitChapterPagesId(chapterId, chapter) {
    //   localStorage.setItem('chapterId', chapterId)
    //   localStorage.setItem('chapter', chapter)
    // },
    scrollTop() {
      // let scrollTopBtn = document.querySelector('#scroll-top-btn')
      // For Safari
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      // For Chrome, Firefox, IE, and Opera
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    },
    toggleChapter() {
      let chapterBtn = document.querySelector('#chapter-btn')
      let chapterSelected = document.querySelectorAll('#chapter-selected')
      let chapterMenu = document.querySelectorAll('#chapter-menu li')
      chapterBtn.classList.toggle('open')
      chapterMenu.forEach((menu) => {
        menu.addEventListener('click', () => {
          chapterSelected.innerText = menu.innerText
        })
      })
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    chapter() {
      this.fetchData()
    }
  }
}
</script>

<style scoped></style>
