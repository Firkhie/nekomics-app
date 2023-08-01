<template>
  <div
    class="bg-white/5 p-3 cursor-pointer hover:bg-white/10"
    v-for="chapter in detailComic.detailChapters"
    :key="chapter.chapterId"
    @click="submitChapterPagesId(detailComic.id, chapter.chapterId)"
  >
    <div class="w-full flex justify-between items-center">
      <p>Chapter {{ chapter.chapter }}</p>
      <p class="text-white/40 md:text-sm text-xs">{{ chapter.publishAt }}</p>
    </div>
    <p class="text-white/40">{{ chapter.scanGroup }}</p>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'DetailChapterCard',
  computed: {
    ...mapState(useCounterStore, ['detailComic'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchChapterPages']),
    submitChapterPagesId(comicId, chapterId) {
      this.fetchChapterPages(comicId, chapterId)
    }
  }
}
</script>

<style scoped></style>
