<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <section class="flex flex-col w-full">
      <ul class="flex flex-row gap-4 md:gap-12 md:text-2xl text-base font-medium md:font-bold">
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Reading History</a></li>
        </ul>
        <hr class="border-white/10 my-3 md:my-8">
      <!-- BOOKMARKS -->
      <Bookmark />
      <!-- READING HISTORY -->
      <!-- <History /> -->
    </section>
  </main>
</template>

<script>
import Bookmark from '../components/Bookmark.vue';
import History from '../components/History.vue';

export default {
  name: 'BookmarkPage',
  components: {
    Bookmark,
    History
  }
}
</script>

<style scoped></style>
