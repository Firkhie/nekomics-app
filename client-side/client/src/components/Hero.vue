<template>
  <section class="relative w-full overflow-hidden text-white md:mt-5">
    <!-- BACKGROUND -->
    <div
      style="background-image: url('src/assets/cover-6.jpg')"
      class="absolute w-full h-full -z-20 bg-center bg-cover bg-no-repeat blur-2xl"
    ></div>
    <!-- CAROUSEL ITEMS -->
    <div
      class="flex transition ease-in-out delay-300"
      id="hero-carousel"
      style=" -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;"
      ref="heroCarouselItems"
      @mousedown="handleDragStart"
      @touchstart="handleDragStart"
      @mousemove="handleDragMove"
      @touchmove="handleDragMove"
      @mouseup="handleDragEnd"
      @touchend="handleDragEnd"
    >
      <div
        class="hero-carousel-item min-w-full flex py-4 md:py-8 lg:py-10 px-5 sm:px-20 md:px-24 lg:px-36 justify-between gap-4 md:gap-5 lg:gap-8"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-7 justify-start sm:justify-center">
          <h4 class="line-clamp-1 md:line-clamp-2">{{ item.title }}</h4>
          <p class="line-clamp-2 md:line-clamp-3 text-sm md:text-base">
            {{ item.description }}
          </p>
          <button 
            class="py-[6px] sm:py-3 px-3 sm:px-6 bg-[#FC304B] hover:bg-[#E32B43] rounded-sm lg:text-base md:text-sm text-xs w-fit" 
            @dragstart="handleDragPrevent" 
            @click="handleButtonClick"
          >Read Now</button>
        </div>
        <div class="max-w-[100px] md:max-w-[180px] lg:max-w-[250px]">
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-full h-auto rounded-sm bg-center bg-cover"
            @dragstart="handleDragPrevent"
          />
        </div>
      </div>
    </div>
    <!-- CAROUSEL BUTTON -->
    <button
      class="prev-button absolute xs:left-5 xs:-bottom-1 sm:top-1/2 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2"
      @click="prevButtonHandler"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      class="next-button absolute xs:left-[55px] xs:-bottom-1 sm:top-1/2 sm:right-6 md:right-8 lg:right-10 transform -translate-y-1/2"
      @click="nextButtonHandler"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      items: [
        {
          title: "Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis dolore obcaecati quasi est ad deserunt autem aliquid libero, facere odit incidunt deleniti doloribus quas ipsam optio aut nihil tempore. Rose then set Shifa through a series of training exercises, telling him, 'If you want to be an adventurer, you have to be able to do this!' Shifa believes Rose's words and tries his best to complete the ordeal. However, Rose's training becomes more and more extreme in order to prevent her brother from being in danger when he becomes an adventurer.",
          imageUrl: "src/assets/cover.jpg",
        },
        {
          title: "Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis dolore obcaecati quasi est ad deserunt autem aliquid libero, facere odit incidunt deleniti doloribus quas ipsam optio aut nihil tempore. Rose then set Shifa through a series of training exercises, telling him, 'If you want to be an adventurer, you have to be able to do this!' Shifa believes Rose's words and tries his best to complete the ordeal. However, Rose's training becomes more and more extreme in order to prevent her brother from being in danger when he becomes an adventurer.",
          imageUrl: "src/assets/cover-2.jpg",
        },
        {
          title: "Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa ni Natteita Otouto",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis dolore obcaecati quasi est ad deserunt autem aliquid libero, facere odit incidunt deleniti doloribus quas ipsam optio aut nihil tempore. Rose then set Shifa through a series of training exercises, telling him, 'If you want to be an adventurer, you have to be able to do this!' Shifa believes Rose's words and tries his best to complete the ordeal. However, Rose's training becomes more and more extreme in order to prevent her brother from being in danger when he becomes an adventurer.",
          imageUrl: "src/assets/cover-3.jpg",
        },
        // Tambahkan data item carousel selanjutnya sesuai kebutuhan Anda
      ],
      currentIndex: 0,
      itemWidth: 0,
      isDragging: false,
      touchStartX: 0,
      touchMoveX: 0,
      touchOffsetX: 0,
    };
  },
  methods: {
    handleButtonClick() {
      console.log("Tombol 'Read Now' diklik!");
    },
    handleDragPrevent(e) {
      e.preventDefault();
    },
    handleDragStart(e) {
      this.isDragging = true;
      this.stopAutoplay();
      this.touchStartX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
      this.$refs.heroCarouselItems.style.transition = "none";
    },
    handleDragMove(e) {
      if (!this.isDragging) return;
      this.touchMoveX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      this.touchOffsetX = this.touchMoveX - this.touchStartX;
      const dragDistance = -this.currentIndex * this.itemWidth + this.touchOffsetX;
      this.$refs.heroCarouselItems.style.transform = `translateX(${dragDistance}px)`;
    },
    handleDragEnd() {
      this.isDragging = false;
      this.startAutoplay();

      const swipeThreshold = this.itemWidth / 3;
      if (Math.abs(this.touchOffsetX) > swipeThreshold) {
        if (this.touchOffsetX > 0) {
          this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        } else {
          this.currentIndex = (this.currentIndex + 1) % this.items.length;
        }
      }

      this.$refs.heroCarouselItems.style.transition = "transform 0.3s ease-in-out";
      this.$refs.heroCarouselItems.style.transform = `translateX(${-this.currentIndex * this.itemWidth}px)`;
    },
    moveCarousel() {
      this.$refs.heroCarouselItems.style.transition = "transform 0.3s ease-in-out";
      this.$refs.heroCarouselItems.style.transform = `translateX(${-this.currentIndex * this.itemWidth}px)`;
    },
    autoplay() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.moveCarousel();
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },
    startAutoplay() {
      if (!this.autoplayInterval) {
        this.autoplayInterval = setInterval(this.autoplay, 4000);
      }
    },
    prevButtonHandler() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.moveCarousel();
    },
    nextButtonHandler() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.moveCarousel();
    },
    // Tambahkan method untuk menangani perubahan ukuran layar (resize)
    resizeHandler() {
      this.itemWidth = this.$refs.heroCarouselItems.clientWidth;
      this.moveCarousel();
    }
  },
  mounted() {
    this.itemWidth = this.$refs.heroCarouselItems.clientWidth;
    window.addEventListener("resize", this.resizeHandler);
    this.startAutoplay();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
    this.stopAutoplay();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
    this.stopAutoplay();
  },
};
</script>

<style scoped>
</style>