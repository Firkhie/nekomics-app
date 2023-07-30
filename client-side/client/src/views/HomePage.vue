<template>
  <Hero />
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <!-- ! HOME - POPULAR TODAY -->
    <section class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] md:mt-5 flex flex-col gap-2 md:gap-5">
      <div class="flex justify-between items-center">
        <h5>Popular Today</h5>
        <a href="#" class="lg:text-base md:text-sm text-xs text-white/40">See More</a>
      </div>
      <hr />
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 mt-3 md:text-base text-sm">
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover-2.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover-3.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover-2.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
        <div class="w-full hover:opacity-70 cursor-pointer">
          <img src="../assets/cover-3.jpg" alt="" class="w-full h-[175px] md:h-[255px] object-cover object-center rounded-sm" />
          <p class="line-clamp-2 font-bold mt-1">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
          <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
        </div>
      </div>
    </section>

    <!-- ! HOME - LATEST UPDATES -->
    <section class="w-full p-4 sm:p-8 rounded-sm bg-[#1E1F1F] flex flex-col gap-2 md:gap-5 mt-5 md:mt-10">
      <div class="flex justify-between items-center">
        <h5>Latest Updates</h5>
        <a href="#" class="lg:text-base md:text-sm text-xs text-white/40">See More</a>
      </div>
      <hr />
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3 md:gap-x-4 mt-3 md:text-base text-sm">
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
        <div class="w-full flex p-3 gap-3 bg-white/10 hover:opacity-70 cursor-pointer">
          <div>
            <img src="../assets/cover.jpg" alt="" class="max-w-[60px] sm:max-w-[70px] bg-center bg-cover rounded-sm" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <p class="line-clamp-2 font-bold">Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara</p>
            <p class="text-white/40 md:text-sm text-xs">Chapter 2</p>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center gap-1 md:gap-2 md:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
              <p class="text-xs md:text-sm text-white/40">34 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
    name: 'HomePage',
    components: { 
      Hero
    }
}
</script>

<style scoped></style>
