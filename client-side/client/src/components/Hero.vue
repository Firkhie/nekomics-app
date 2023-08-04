<template>
  <section class="relative w-full overflow-hidden text-white md:mt-5">
    <!-- BACKGROUND -->
    <div
      :style="{ backgroundImage: 'url(' + image + ')' }"
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
            @click="submitComicId(item.comicId)"
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
import coverImage from '@/assets/cover-1.jpg';
import hero1Image from '@/assets/hero-1.jpg';
import hero2Image from '@/assets/hero-2.jpg';
import hero3Image from '@/assets/hero-3.jpg';

export default {
  name: 'Hero',
  data() {
    return {
      image: coverImage,
      items: [
        {
          comicId: "720466f8-2eee-43a5-893b-67f9190c04ae",
          title: "Isekaigaeri no Moto Yuusha Desuga, Death Game ni Makikomare Mashita",
          description: "He was living a peaceful life as any normal high schooler would, until one day he and his classmates were suddenly brought to uninhabited island.\r\n\r\n“I’ll have you kill each other until there’s only one of you remaining.”\r\n\r\nHearing these words from the man strangely dressed in a military uniform, his classmates panicked. Yes, he was setting up the stage for a death game. One where the strong devoured the weak. The weak would die without mercy and only the strong would taste victory. That was the plan.\r\n\r\nHowever, they were unaware that the hero who was hailed as the strongest had just recently returned from another world. The organizers behind the game were already out of luck by the time the game started as the expectations they had for death game that they had worked so desperately to set up would be unwittingly crushed before them.",
          imageUrl: hero1Image,
        },
        {
          comicId: "94e6f5a4-a215-4f5b-ae82-febc560be66d",
          title: "Villain to Kill",
          description: "You must become the greater evil to fight against the real evil!\"\n \nCassian dies after being framed for the murder of a comrade. Just when he thought it was all over for him, his soul is transferred into a young boy… A popular, top-class Psyker who was everyone's envy turns into a Villain overnight!",
          imageUrl: hero2Image,
        },
        {
          comicId: "4a169ddc-22f9-4566-92c4-0440cec2bb54",
          title: "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome da to Omowareteiru",
          description: "Jin Mita, a farmer living in a small countryside town, discovers an unconscious female knight in his rice field one morning. She calls herself Seraphim, and she seems to have come from another world. She has no knowledge of this world and nowhere to go. Unable to bear seeing her like this, Jin offered to take her in, but apparently the people around him think that Seraphim is his wife...!? A slow life in the countryside begins with a beautiful female knight!",
          imageUrl: hero3Image,
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
    submitComicId(comicId) {
      localStorage.setItem('comicId', comicId)
      this.$router.push('/detail')
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