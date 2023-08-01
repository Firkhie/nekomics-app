<template>
  <div class="bg-[#1E1F1F]">
    <div class="grid grid-cols-1 scroll-container overflow-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]">
      <div
        class="flex justify-between gap-1 border-white/5 border-b-[1px] min-h-[75px] md:min-h-[140px] p-2 md:p-4 cursor-pointer hover:bg-[#212121]"
        v-for="(history, index) in histories"
        :key="index"
        @click="submitChapterPagesId(history.comicId, history.chapterId)"
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
    submitChapterPagesId(comicId, chapterId) {
      this.fetchChapterPages(comicId, chapterId)
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped></style>
