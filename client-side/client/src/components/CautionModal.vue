<template>
  <div>
    <!-- Modal Background Overlay -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <!-- Modal Content -->
      <div class="relative w-auto max-w-xl">
        <div class="rounded-lg shadow-lg relative flex flex-col w-full bg-white overflow-hidden">
          <!-- Header -->
          <div
            class="flex items-center justify-between px-5 py-2 border-b border-solid border-blueGray-200"
          >
            <h3 class="text-lg font-semibold text-red-600">⚠️ Important Notice</h3>
            <button class="text-black text-2xl font-semibold" v-on:click="toggleModal">×</button>
          </div>
          <!-- Body -->
          <div class="relative p-5 flex-auto bg-yellow-50">
            <p class="text-black text-base font-bold mb-2">
              Please read this carefully before using the website:
            </p>
            <p class="text-blueGray-800 text-sm">
              🕒 <strong>Server Sleep Alert:</strong> If the website is inactive for more than
              <strong>15 minutes</strong>, the server will go to sleep to save resources. When you
              return, it might take about <strong>50 seconds or more</strong> for the server to wake
              up.
            </p>
            <p class="text-blueGray-800 text-sm mt-3">
              Please <strong>wait a moment</strong> if you notice the website is unresponsive. Once
              the server is back up, you can continue using the site as usual.
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
