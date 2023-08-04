<template>
  <div class="bg-[#1E1F1F]">
    <div class="grid grid-cols-1 scroll-container overflow-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]">
      <div v-if="isLoading" class="flex justify-between gap-1 min-h-[75px] md:min-h-[140px] p-2 md:p-3 bg-white/10 animate-pulse">
        <div class="flex gap-2 md:gap-4">
          <div class="w-[40px] md:w-[72px] h-auto bg-[#515050] rounded-md"></div>
          <div class="flex flex-col min-w-[150px] sm:min-w-[400px] gap-2">
            <div class="w-full h-[12px] md:h-[17px] rounded-full bg-[#515050]"></div>
            <div class="w-1/3 h-[12px] md:h-[17px] rounded-full bg-[#515050]"></div>
          </div>
        </div>
        <div class="w-1/6 sm:w-1/12 h-[10px]  md:h-[15px] rounded-full bg-[#515050]"></div>
      </div>
      <div
        v-else-if="!isLoading && histories.length > 0"
        class="flex justify-between gap-1 border-white/5 border-b-[1px] min-h-[75px] md:min-h-[140px] p-2 md:p-4 cursor-pointer hover:bg-[#212121]"
        v-for="(history, index) in histories"
        :key="index"
        @click="submitChapterPagesId(history.comicId, history.title, history.chapterId, history.chapter)"
      >
        <div class="flex gap-2 md:gap-4">
          <div
            :style="{ backgroundImage: `url(${history.coverArt})` }"
            class='w-[40px] md:w-[72px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex flex-col w-[160px] md:w-auto">
            <p class="md:text-base text-sm line-clamp-2">{{ history.title }}</p>
            <p class="text-white/40 md:text-base text-xs">Chapter {{ history.chapter }}</p>
          </div>
        </div>
        <p class="md:text-base text-xs">{{ history.openedAt }}</p>
      </div>
      <div v-else class="flex gap-2 items-center md:text-base text-sm w-full h-full bg-[#121213]">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <p>History data not found</p>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'History',
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(useCounterStore, ['histories'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchHistories']),
    ...mapActions(useCounterStore, ['fetchChapterPages']),
    async fetchData() {
      try {
        await this.fetchHistories()
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
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
