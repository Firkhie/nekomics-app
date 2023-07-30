<template>
  <main class="relative w-full px-3 md:px-8 lg:px-32 mt-5 text-white flex-grow">
    <section class="w-full">
      <div class="bg-[#1E1F1F] py-3 px-3 lg:text-base md:text-sm text-xs">
        <div class="flex gap-2">
          <input type="text" placeholder="Search..." class="w-full py-3 px-4 outline-none bg-[#121213]">
          <div class="flex items-center justify-center gap-2 px-5 bg-white/5 cursor-pointer">
            <i class="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between gap-2 mt-3 lg:text-base md:text-sm text-xs">
        <div id="sort-by-btn" class="relative w-[220px] cursor-pointer group">
          <div class="flex justify-between items-center py-2 px-4 bg-[#1E1F1F] rounded-sm">
            <div>
              <p class="md:text-sm text-xs text-white/20">Sort By</p>
              <span id="sort-by-selected">Latest Upload</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul id="sort-by-menu" class="absolute flex-col bg-[#1E1F1F] rounded-sm w-full cursor-pointer top-[62px] left-0 hidden group-open:block">
            <li class="p-4 hover:bg-white/5">Latest Upload</li>
            <li class="p-4 hover:bg-white/5">Oldest Upload</li>
            <li class="p-4 hover:bg-white/5">Title Ascending</li>
            <li class="p-4 hover:bg-white/5">Title Descending</li>
          </ul>
        </div>
        <div class="flex gap-2 md:gap-3">
          <button><i class="fa-solid fa-list p-[15px] md:p-5 bg-[#1E1F1F] text-base sm:text-lg md:text-xl"></i></button>
          <button><i class="fa-solid fa-grip p-[15px] md:p-5 bg-[#1E1F1F] text-base sm:text-lg md:text-xl"></i></button>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3 mt-3">
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-[125px] md:min-h-[220px] bg-[#1E1F1F] p-2 md:p-5 gap-3 md:gap-4 md:text-base text-sm cursor-pointer hover:opacity-70">
          <div
            style="background-image: url('../assets/cover.jpg')"
            class='min-w-[64px] md:min-w-[115px] h-auto rounded-sm bg-center bg-cover'
          ></div>
          <div class="flex-1 flex flex-col justify-between text-justify ">
            <div class="flex flex-col gap-[3px] md:gap-2">
              <h6 class="h-13 line-clamp-2">Damedol to Sekai ninoFan Da medol to Sekai ni  no Fan </h6>
              <div class="flex gap-2">
                <span class="px-2 bg-white/20 text-xs md:text-sm rounded-md">Action</span>
              </div>
              <p class="h-6 md:h-12 line-clamp-1 md:line-clamp-2 text-white/40">
                Lorem ipsum dolor, siti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque optio dolorum quibusdam rem suscipit, nemo officia cum possimus adipisci consequuntur recusandae sapiente porro, incidunt exercitationem sit rerum. Laudantium, adipisci!. 
              </p>
              <div class="flex items-center gap-2 md:text-base sm:text-sm text-xs">
                <i class="fa-regular fa-star"></i>
                <p>9.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-6 lg:text-base md:text-sm text-xs">
        <div class="flex items-center justify-center gap-2 flex-wrap">
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] h-10 gap-2"><i class="fa-solid fa-chevron-left text-xs"></i> Prev</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/10 hover:bg-white/20 h-10">1</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/10 hover:bg-white/20 h-10">2</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-white/10 hover:bg-white/20 h-10">275</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-sm bg-[#FC304B] hover:bg-[#E32B43] h-10 gap-2">Next <i class="fa-solid fa-chevron-right text-xs"></i></button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SeriesPage'
}
</script>

<style scoped></style>
