<template>
  <div v-if="isLoading" class="flex flex-col gap-2 w-full h-full p-3 bg-white/10 animate-pulse" v-for="index in 4" :key="index">
    <div class="w-full h-[155px] md:h-[255px] rounded-md bg-[#515050]"></div>
    <div class="w-full h-[13px] md:h-[17px] rounded-full bg-[#515050]"></div>
    <div class="w-1/2 h-[13px] md:h-[17px] rounded-full bg-[#515050]"></div>
  </div>
  <div
    v-else
    class="w-full hover:opacity-70 cursor-pointer"
    v-for="comic in popularComics"
    :key="comic.id"
    @click.prevent="submitComicId(comic.id)"
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
    async fetchData() {
      try {
        await this.fetchPopularComics()
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },
    submitComicId(comicId) {
      localStorage.setItem('comicId', comicId)
      this.$router.push('/detail')
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped></style>
