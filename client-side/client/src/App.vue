<template>
  <div class="flex flex-col min-h-screen w-full">
    <NavbarComponent v-if="showNavbarFooter" />
    <router-view class="flex-1 w-full" />
    <FooterComponent v-if="showNavbarFooter" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  setup() {
    const route = useRoute();
    const showNavbarFooter = computed(() => !route.meta.hideNavbarFooter);
    return { showNavbarFooter };
  },
}
</script>

<style scoped></style>
