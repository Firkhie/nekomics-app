<template>
  <div v-if="isLoading" class="w-full hover:opacity-70 cursor-pointer">
    <p>LOADING</p>
  </div>
  <div
    v-else
    class="w-full hover:opacity-70 cursor-pointer"
    v-for="comic in popularComics"
    :key="comic.id"
    @click.prevent="submitDetailComicId(comic.id)"
  >
    <img
      v-bind:src="comic.coverArt"
      alt=""
      class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm"
    />
    <p class="line-clamp-2 font-bold mt-1">{{ comic.title }}</p>
    <p class="text-white/40 md:text-sm text-xs">Chapter {{ comic.latestChapter }}</p>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'HomePopularCard',
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(useCounterStore, ['popularComics'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchPopularComics']),
    ...mapActions(useCounterStore, ['fetchDetailComic']),
    async fetchData() {
      try {
        await this.fetchPopularComics()
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
