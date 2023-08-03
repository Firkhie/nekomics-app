<template>
  <Navbar />
  <main v-if="isLoading" class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow animate-pulse">
    <section class="w-full flex items-center md:items-start flex-col md:flex-row gap-3 lg:gap-5">
      <!-- LEFT -->
      <div class="flex flex-col items-center md:items-start justify-center md:justify-start gap-3 w-full md:max-w-[240px] lg:max-w-[300px] h-auto md:min-h-[600px]">
        <div class="w-full h-[350px] rounded-sm p-3 bg-white/10">
          <div class="w-full h-full rounded-md bg-[#515050]"></div>
        </div>
        <div class="bg-white/10 w-full h-[50px] rounded-sm p-2 flex justify-center items-center">
          <div class="w-1/2 h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
        </div>
        <div class="flex flex-col gap-3 p-4 bg-white/10 w-full rounded-sm">
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="flex-1 flex flex-col text-justify gap-3 w-full">
        <div class="flex flex-col justify-between p-4 bg-white/10 min-h-[200px] md:min-h-[350px] rounded-sm">
          <div class="flex flex-col gap-2 md:gap-3">
            <div class="w-full h-[17px] md:h-[25px] rounded-full bg-[#515050]"></div>
            <div class="w-full flex flex-row gap-2">
              <div class="w-[100px] h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
              <div class="w-[100px] h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
              <div class="w-[100px] h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            </div>
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            <div class="w-full flex flex-row gap-2 mt-10">
              <div class="w-[100px] h-[15px] md:h-[25px] rounded-full bg-[#515050]"></div>
              <div class="w-[100px] h-[15px] md:h-[25px] rounded-full bg-[#515050]"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 p-4 bg-white/10 rounded-sm">
          <div class="w-full h-[10px] md:h-[20px] rounded-full bg-[#515050]"></div>
          <div class="grid grid-cols-1 gap-3 max-h-[475px] scroll-container overflow-auto">
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
            <div class="w-full h-[10px] md:h-[16px] rounded-full bg-[#515050]"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <main v-else class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <section class="w-full flex items-center md:items-start flex-col md:flex-row gap-3 lg:gap-5 md:text-base text-sm">
    <!-- LEFT -->
    <div class="flex flex-col items-center md:items-start justify-center md:justify-start gap-3 w-full md:max-w-[240px] lg:max-w-[300px] h-auto md:min-h-[850px] lg:text-base md:text-sm text-xs">
        <div class="max-w-[400px] md:w-auto">
          <img v-bind:src="detailComic.coverArt" alt="" class="w-auto h-auto rounded-sm bg-center bg-cover">
        </div>
        <button class="p-3 bg-[#4252FF] hover:bg-[#3C4BEC] w-full rounded-sm flex justify-center items-center gap-3" @click.prevent="submitCreateBookmark(detailComic.id)"><i class="fa-solid fa-bookmark"></i>Bookmark</button>
        <div class="p-4 bg-[#1E1F1F] w-full rounded-sm">
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Type</p>
            <p class="capitalize">{{ detailComic.type }}</p>
          </div>
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Released</p>
            <p>{{ detailComic.year }}</p>
          </div>
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Author</p>
            <p class="capitalize">{{ detailComic.author }}</p>
          </div>
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Updated On</p>
            <p>{{ detailComic.updatedAt }}</p>
          </div>
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Status</p>
            <p class="capitalize">{{ detailComic.status }}</p>
          </div>
          <div class="flex justify-between py-1 md:py-2">
            <p class="text-white/40">Total Chapters</p>
            <p>{{ detailComic.totalChapter }}</p>
          </div>
        </div>
      </div>
    <!-- RIGHT -->
    <div class="flex-1 flex flex-col text-justify gap-3">
        <div class="flex flex-col justify-between p-4 bg-[#1E1F1F] min-h-[320px] md:min-h-[350px] rounded-sm">
          <div class="flex flex-col gap-2 md:gap-3">
            <h4 class="line-clamp-2">{{ detailComic.title }}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 bg-white/30 text-xs md:text-sm rounded-lg" v-for="genre in limitGenres">{{ genre }}</span>
            </div>
            <p class="text-white/40 max-h-[120px] scroll-container overflow-auto">
              {{ detailComic.description }}
            </p>
          </div>
          <div class="flex gap-3">
            <button
              class="py-2 md:py-3 px-3 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] lg:text-base md:text-sm text-xs"
              @click="submitChapterPagesId(detailComic.id, detailComic.title, detailComic.detailChapters[ detailComic.detailChapters.length - 1 ].chapterId, detailComic.detailChapters[ detailComic.detailChapters.length - 1 ].chapter)"
            >First Chapter</button>
            <button
              class="py-2 md:py-3 px-3 md:px-6 bg-[#FC304B] hover:bg-[#E32B43] lg:text-base md:text-sm text-xs"
              @click="submitChapterPagesId(detailComic.id, detailComic.title, detailComic.detailChapters[0].chapterId, detailComic.detailChapters[0].chapter)"
            >Latest Chapter</button>
          </div>
        </div>
        <div class="flex flex-col gap-3 p-4 bg-[#1E1F1F] rounded-sm">
          <p class="font-bold">Chapters</p>
          <hr class="mb-2">
          <div class="grid grid-cols-1 gap-2 max-h-[475px] scroll-container overflow-auto">
            <DetailChapterCard />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import DetailChapterCard from '../components/DetailChapterCard.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'DetailComicPage',
    data() {
      return {
        isLoading: true
      }
    },
    components: {
    DetailChapterCard,
    Navbar
    },
    computed: {
      ...mapState(useCounterStore, ['detailComic']),
      limitGenres() {
        return this.detailComic.tags.slice(0, 5)
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['fetchDetailComic']),
      async fetchData() {
        try {
          await this.fetchDetailComic()
        } catch (err) {
          console.error(err)
        } finally {
          this.isLoading = false
        }
      },
      ...mapActions(useCounterStore, ['createBookmark']),
      submitCreateBookmark(comicId) {
        this.createBookmark(comicId)
      },
      submitChapterPagesId(comicId, comicName, chapterId, chapter) {
      localStorage.setItem('comicId', comicId)
      localStorage.setItem('comicName', comicName)
      localStorage.setItem('chapterId', chapterId)
      localStorage.setItem('chapter', chapter)
      this.$router.push('/read')
    }
    },
    created() {
      this.fetchData()
    }
}
</script>

<style scoped></style>
