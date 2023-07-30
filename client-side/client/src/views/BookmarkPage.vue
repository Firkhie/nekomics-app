<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 md:mt-8 text-white flex-grow">
    <section class="flex flex-col w-full">
      <ul class="flex flex-row gap-4 md:gap-12 md:text-2xl text-base font-medium md:font-bold">
        <li><p @click="chooseSection('bookmark')" class="cursor-pointer hover:text-white/80">Bookmarks</p></li>
        <li><p @click="chooseSection('history')" class="cursor-pointer hover:text-white/80">Reading History</p></li>
      </ul>
      <hr class="border-white/10 mb-3 md:mb-8 mt-3 md:mt-5">
      <!-- BOOKMARKS -->
      <Bookmark v-if="section === 'bookmark'"/>
      <!-- READING HISTORY -->
      <History v-if="section === 'history'"/>
    </section>
  </main>
</template>

<script>
import Bookmark from '../components/Bookmark.vue';
import History from '../components/History.vue';

export default {
  name: 'BookmarkPage',
  data() {
    return {
      section: 'bookmark'
    }
  },
  components: {
    Bookmark,
    History
  },
  methods: {
    chooseSection(input) {
      this.section = input
    }
  }
}
</script>

<style scoped></style>
