<template>
  <div v-if="isLoading" class="w-full h-full flex p-3 gap-3 bg-white/10 animate-pulse" v-for="index in 3" :key="index">
    <div class="w-[60px] sm:min-w-[70px] h-[82px] sm:h-[100px] bg-[#515050] rounded-md"></div>
    <div class="w-full flex flex-col justify-between">
      <div class="w-full flex flex-col gap-[6px] sm:gap-2">
        <div class="w-2/3 h-[17px] sm:h-[20px] bg-[#515050] rounded-full"></div>
        <div class="w-full h-[12px] sm:h-[15px] bg-[#515050] rounded-full"></div>
        <div class="w-full h-[12px] sm:h-[15px] bg-[#515050] rounded-full"></div>
      </div>
      <div class="w-1/2 h-[12px] sm:h-[14px] bg-[#515050] rounded-full"></div>
    </div>
  </div>
  <div
    v-else
    class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer"
    v-for="comic in visibleComics"
    :key="comic.id"
    @click.prevent="submitComicId(comic.id)"
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
      isLoading: true,
      screenWidth: window.innerWidth
    }
  },
  computed: {
    ...mapState(useCounterStore, ['latestComics']),
    comicToShow() {
      if (this.screenWidth >= 1280) {
        return 9
      } else {
        return 8
      }
    },
    visibleComics() {
      return this.latestComics.slice(0, this.comicToShow)
    }
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
    submitComicId(comicId) {
      localStorage.setItem('comicId', comicId)
      this.$router.push('/detail')
    },
    handleResize() {
      this.screenWidth = window.innerWidth
    }
  },
  created() {
    this.fetchData()
    window.addEventListener('resize', this.handleResize)
  },
  watch: {
    screenWidth(newWidth) {
      this.$nextTick(() => {
        this.comicsToShow = this.calculateComicsToShow(newWidth);
        this.visibleComics = this.latestComics.slice(0, this.comicsToShow);
      });
    }
  }
}
</script>

<style scoped></style>