<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
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
        <div class="flex flex-col justify-between p-4 bg-[#1E1F1F] min-h-[300px] md:min-h-[350px] rounded-sm">
          <div class="flex flex-col gap-2 md:gap-3">
            <h4 class="line-clamp-2">{{ detailComic.title }}</h4>
            <div class="flex gap-2">
              <span class="px-4 bg-white/30 text-xs md:text-sm rounded-lg" v-for="genre in limitGenres">{{ genre }}</span>
            </div>
            <p class="text-white/40 max-h-[120px] scroll-container overflow-auto">
              {{ detailComic.description }}
            </p>
          </div>
          <div class="flex gap-3">
            <a href="#" class="py-2 md:py-3 px-3 md:px-5 bg-[#FC304B] hover:bg-[#E32B43] lg:text-base md:text-sm text-xs">First Chapter</a>
            <a href="#" class="py-2 md:py-3 px-3 md:px-6 bg-[#FC304B] hover:bg-[#E32B43] lg:text-base md:text-sm text-xs">Latest Chapter</a>
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

export default {
    name: 'DetailComicPage',
    components: {
      DetailChapterCard
    },
    computed: {
      ...mapState(useCounterStore, ['detailComic']),
      limitGenres() {
        return this.detailComic.tags.slice(0, 5)
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['createBookmark']),
      submitCreateBookmark(comicId) {
        this.createBookmark(comicId)
      }
    }
}
</script>

<style scoped></style>
