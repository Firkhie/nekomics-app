<template>
  <main class="relative min-h-[50vh] w-full max-w-screen-xl px-6 md:px-8 mx-auto text-white flex-grow">
    <section class="flex flex-col w-full">
      <ul class="flex flex-row gap-4 md:gap-12 md:text-2xl text-base font-medium md:font-bold">
        <li>
          <p @click="chooseSection('bookmark')" class="cursor-pointer hover:text-white/80">
            Bookmarks
          </p>
        </li>
        <li>
          <p @click="chooseSection('history')" class="cursor-pointer hover:text-white/80">
            Reading History
          </p>
        </li>
      </ul>
      <hr class="border-white/10 mb-3 md:mb-8 mt-3 md:mt-5" />
      <!-- BOOKMARKS -->
      <BookmarkComponent v-if="section === 'bookmark'" />
      <!-- READING HISTORY -->
      <HistoryComponent v-if="section === 'history'" />
    </section>
  </main>
</template>

<script>
import BookmarkComponent from '../components/BookmarkComponent.vue'
import HistoryComponent from '../components/HistoryComponent.vue'

export default {
  name: 'BookmarkPage',
  data() {
    return {
      section: 'bookmark'
    }
  },
  components: {
    BookmarkComponent,
    HistoryComponent
  },
  methods: {
    chooseSection(input) {
      this.section = input
    }
  }
}
</script>

<style scoped></style>
