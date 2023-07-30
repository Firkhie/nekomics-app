<template>
  <section class="relative w-full overflow-hidden text-white md:mt-10">
    <!-- BACKGROUND -->
    <div style="background-image: url('../assets/cover-6.jpg')" class="absolute w-full h-full -z-20 bg-center bg-cover bg-no-repeat blur-2xl"></div>
    <!-- CAROUSEL ITEMS -->
    <div class="flex transition ease-in-out delay-300" id="hero-carousel" style=" -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;">
      <div class="hero-carousel-item min-w-full flex py-4 md:py-8 lg:py-10 px-5 sm:px-20 md:px-24 lg:px-36 justify-between gap-4 md:gap-5 lg:gap-8">
        <div class="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-7 justify-start sm:justify-center">
          <h4 class="line-clamp-1 md:line-clamp-2">
            Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa
            ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara,
            Tondemonai Tsuyosa ni Natteita Otouto
          </h4>
          <p class="line-clamp-2 md:line-clamp-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            perferendis dolore obcaecati quasi est ad deserunt autem aliquid
            libero, facere odit incidunt deleniti doloribus quas ipsam optio
            aut nihil tempore. Rose then set Shifa through a series of
            training exercises, telling him, "If you want to be an adventurer,
            you have to be able to do this!" Shifa believes Rose's words and
            tries his best to complete the ordeal. However, Rose's training
            becomes more and more extreme in order to prevent her brother from
            being in danger when he becomes an adventurer lorem
          </p>
          <a href="#" class="py-[6px] sm:py-3 px-3 sm:px-6 bg-[#FC304B] hover:bg-[#E32B43] rounded-sm lg:text-base md:text-sm text-xs w-fit">Read Now</a>
        </div>
        <div class="max-w-[100px] md:max-w-[180px] lg:max-w-[250px]">
          <img src="../assets/cover.jpg" alt="" class="w-full h-auto rounded-sm bg-center bg-cover" />
        </div>
      </div>
      <div class="hero-carousel-item min-w-full flex py-4 md:py-8 lg:py-10 px-5 sm:px-20 md:px-24 lg:px-36 justify-between gap-4 md:gap-5 lg:gap-8">
        <div class="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-7 justify-start sm:justify-center">
          <h4 class="line-clamp-1 md:line-clamp-2">
            Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa
            ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara,
            Tondemonai Tsuyosa ni Natteita Otouto
          </h4>
          <p class="line-clamp-2 md:line-clamp-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            perferendis dolore obcaecati quasi est ad deserunt autem aliquid
            libero, facere odit incidunt deleniti doloribus quas ipsam optio
            aut nihil tempore. Rose then set Shifa through a series of
            training exercises, telling him, "If you want to be an adventurer,
            you have to be able to do this!" Shifa believes Rose's words and
            tries his best to complete the ordeal. However, Rose's training
            becomes more and more extreme in order to prevent her brother from
            being in danger when he becomes an adventurer lorem
          </p>
          <a href="#" class="py-[6px] sm:py-3 px-3 sm:px-6 bg-[#FC304B] hover:bg-[#E32B43] rounded-sm lg:text-base md:text-sm text-xs w-fit">Read Now</a>
        </div>
        <div class="max-w-[100px] md:max-w-[180px] lg:max-w-[250px]">
          <img src="../assets/cover-2.jpg" alt="" class="w-full h-auto rounded-sm bg-center bg-cover" />
        </div>
      </div>
      <div class="hero-carousel-item min-w-full flex py-4 md:py-8 lg:py-10 px-5 sm:px-20 md:px-24 lg:px-36 justify-between gap-4 md:gap-5 lg:gap-8">
        <div class="flex flex-1 flex-col gap-2 sm:gap-3 md:gap-7 justify-start sm:justify-center">
          <h4 class="line-clamp-1 md:line-clamp-2">
            Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara, Tondemonai Tsuyosa
            ni Natteita Otouto Ane ni Iwareru ga Mama ni Tokkun wo Shiteitara,
            Tondemonai Tsuyosa ni Natteita Otouto
          </h4>
          <p class="line-clamp-2 md:line-clamp-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            perferendis dolore obcaecati quasi est ad deserunt autem aliquid
            libero, facere odit incidunt deleniti doloribus quas ipsam optio
            aut nihil tempore. Rose then set Shifa through a series of
            training exercises, telling him, "If you want to be an adventurer,
            you have to be able to do this!" Shifa believes Rose's words and
            tries his best to complete the ordeal. However, Rose's training
            becomes more and more extreme in order to prevent her brother from
            being in danger when he becomes an adventurer lorem
          </p>
          <a href="#" class="py-[6px] sm:py-3 px-3 sm:px-6 bg-[#FC304B] hover:bg-[#E32B43] rounded-sm lg:text-base md:text-sm text-xs w-fit">Read Now</a>
        </div>
        <div class="max-w-[100px] md:max-w-[180px] lg:max-w-[250px]">
          <img src="../assets/cover-3.jpg" alt="" class="w-full h-auto rounded-sm bg-center bg-cover" />
        </div>
      </div>
    </div>
    <!-- CAROUSEL BUTTON -->
    <button class="prev-button absolute xs:left-5 xs:-bottom-1 sm:top-1/2 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="next-button absolute xs:left-[55px] xs:-bottom-1 sm:top-1/2 sm:right-6 md:right-8 lg:right-10 transform -translate-y-1/2">
      <i class="fas fa-chevron-right"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped></style>
