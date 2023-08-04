<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-6 mt-2">
    <div v-if="isLoading" class="flex flex-row w-full h-[120px] md:min-h-[210px] bg-white/10 p-2 md:p-5 gap-3 md:gap-4 animate-pulse">
      <div class="min-w-[64px] md:min-w-[115px] h-full rounded-md bg-[#515050]"></div>
      <div class="flex-1 flex flex-col gap-3 md:gap-4">
        <div class="w-full h-[15px] md:h-[20px] rounded-full bg-[#515050]"></div>
        <div class="w-full flex flex-col gap-2 md:gap-3">
          <div class="w-full h-[12px] md:h-[17px] rounded-full bg-[#515050]"></div>
          <div class="w-full h-[12px] md:h-[17px] rounded-full bg-[#515050]"></div>
        </div>
        <div class="w-full flex justify-between pt-3">
          <div class="w-1/3 h-[10px] md:h-[15px] rounded-full bg-[#515050]"></div>
          <div class="w-1/3 h-[10px] md:h-[15px] rounded-full bg-[#515050]"></div>
        </div>
      </div>
    </div>
    <div 
      v-else-if="!isLoading && bookmarks.length > 0"
      class="flex flex-row w-full h-[120px] md:min-h-[210px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm"
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
      >
      <div
        :style="{ backgroundImage: `url(${bookmark.coverArt})` }"
        class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
      ></div>
      <div class="flex-1 flex flex-col justify-between text-justify md:gap-2 overflow-hidden">
        <div class="flex flex-col gap-[3px] md:gap-2">
          <h6 class="h-13 line-clamp-2">{{ bookmark.title }}</h6>
          <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
            {{ bookmark.description }}
          </p>
        </div>
        <div class="flex items-center justify-end sm:justify-between">
          <p class="md:text-base text-sm md:font-bold italic hidden sm:block">{{ bookmark.author }}</p>
          <div class="flex gap-[5px] md:gap-2">
            <a href="#" class="flex items-center justify-center bg-[#FC304B] hover:bg-[#E32B43] py-1 md:py-2 px-4 md:px-5 rounded-sm md:text-sm text-xs" @click.prevent="submitComicId(bookmark.id)">Read Now</a>
            <button class="flex items-center justify-center"><i class="fa-solid fa-trash bg-[#4252FF] hover:bg-[#3C4BEC] py-2 md:py-3 px-3 md:px-4 rounded-sm md:text-sm text-xs" @click.prevent="submitDeleteBookmarkById(bookmark.id)"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex gap-2 items-center md:text-base text-sm w-full h-full -mt-[5px]">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <p>Bookmarks data not found</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'Bookmark',
  data() {
    return {
      isLoading: true,
      deleteBookmark: false
    }
  },
  computed: {
    ...mapState(useCounterStore, ['bookmarks'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchBookmarks']),
    ...mapActions(useCounterStore, ['fetchDetailComic']),
    ...mapActions(useCounterStore, ['deleteBookmarkById']),
    async fetchData() {
      try {
        await this.fetchBookmarks()
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },
    submitComicId(comicId) {
      localStorage.setItem('comicId', comicId)
      this.$router.push('/detail')
    },
    async submitDeleteBookmarkById(comicId) {
      try {
        await this.deleteBookmarkById(comicId)
      } catch (err) {
        console.error(err)
      } finally {
        this.fetchData()
      }
    }
  },
  created() {
    this.fetchData()
  },
}
</script>

<style scoped></style>
