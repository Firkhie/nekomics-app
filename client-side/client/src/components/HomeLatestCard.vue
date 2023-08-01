<template>
  <div v-if="isLoading" class="w-full h-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
    <p>LOADING</p>
  </div>
  <div
    v-else
    class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer"
    v-for="comic in latestComics"
    :key="comic.id"
    @click.prevent="submitDetailComicId(comic.id)"
  >
    <div class="w-[60px] sm:min-w-[70px] h-[82px] sm:h-[100px]">
      <img v-bind:src="comic.coverArt" alt="" class="w-full h-full object-cover object-center rounded-sm" />
    </div>
    <div class="w-full flex flex-col gap-1">
      <p class="line-clamp-2 font-bold">{{ comic.title }}</p>
      <p class="text-white/40 md:text-sm text-xs">Chapter {{ comic.latestChapter }}</p>
      <div class="flex justify-between items-center">
        <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
          <i class="fa-regular fa-star"></i>
          <p>{{ comic.rating }}</p>
        </div>
        <p class="text-xs md:text-sm text-white/40">{{ comic.updatedAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'HomeLatestCard',
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(useCounterStore, ['latestComics'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchLatestComics']),
    ...mapActions(useCounterStore, ['fetchDetailComic']),
    async fetchData() {
      try {
        await this.fetchLatestComics()
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },
    submitDetailComicId(comicId) {
      this.fetchDetailComic(comicId)
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped></style>