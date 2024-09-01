<template>
  <div>
    <!-- Modal Background Overlay -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <!-- Modal Content -->
      <div class="relative w-auto max-w-xl">
        <div class="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-2 border-b border-solid border-blueGray-200">
            <h3 class="text-lg font-semibold">Notice</h3>
            <button class="text-black text-2xl font-semibold" v-on:click="toggleModal">×</button>
          </div>
          <!-- Body -->
          <div class="relative p-5 flex-auto">
            <p class="text-blueGray-500 text-sm">
              If no one uses the website for 15 minutes, the server goes to sleep to save resources.
              When you visit the site again, it might take about 50 seconds or more for the server
              to wake up and start running. Please wait a moment, and once it's back up, you can use
              the website as usual.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'large-modal',
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function () {
      this.showModal = false
      sessionStorage.setItem('modalShown', 'true')
    }
  },
  mounted() {
    if (!sessionStorage.getItem('modalShown')) {
      this.showModal = true
    }
  }
}
</script>
