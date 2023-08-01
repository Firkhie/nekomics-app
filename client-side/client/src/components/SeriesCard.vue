<template>
  <div v-if="isLoading" class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
    <p>LOADING</p>>
  </div>
  <div v-else 
    class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70"
    v-for="comic in seriesComics"
    :key="comic.id"
    @click.prevent="submitDetailComicId(comic.id)"
  >
    <div
      :style="{ backgroundImage: `url(${comic.coverArt})` }"
      class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
    ></div>
    <div class="flex-1 flex flex-col justify-between text-justify ">
      <div class="flex flex-col gap-[3px] md:gap-2">
        <h6 class="h-13 line-clamp-2">{{ comic.title }}</h6>
        <div class="flex flex-row gap-2">
          <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md" v-for="genre in limitedGenres(comic)">{{ genre }}</span>
        </div>
        <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
          {{ comic.description }} 
        </p>
        <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
          <i class="fa-regular fa-star"></i>
          <p>{{ comic.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'SeriesCard',
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(useCounterStore, ['seriesComics'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchSeriesComics']),
    ...mapActions(useCounterStore, ['fetchDetailComic']),
    async fetchData() {
      try {
        await this.fetchSeriesComics()
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },
    limitedGenres(comic) {
      return comic.tags.slice(0, 4)
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
