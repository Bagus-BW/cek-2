<template>
  <div class="relative flex flex-col h-[250px] mt-[400px] md:mt-[300px] lg:mt-[200px] overflow-hidden">
    <div class="container mx-auto flex flex-col px-5 lg:px-20">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <p class="text-xs md:text-sm text-black">
            KATEGORI
          </p>
          <h1 class="text-xl md:text-3xl font-bold text-black leading-normal">
            Kamu suka yang mana?
          </h1>
        </div>
        <div class="flex gap-x-3">
          <!-- Left Controller -->
          <button 
            class="bg-[#ECECEC] p-3 rounded-full"
            @click="$refs.swiperEl.swiper.slidePrev()"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                stroke="#7F7F7F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- Right Controller -->
          <button 
            class="border border-[#1127E3] p-3 rounded-full rotate-180"
            @click="$refs.swiperEl.swiper.slideNext()"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                stroke="#1127E3"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <routerLink to="" class="mt-8">
        <swiper-container
          ref="swiperEl"
          slides-per-view="auto"
          space-between="20"
          class="absolute"
        >
          <swiper-slide
            v-for="index in 10"
            :key="index"
            class="w-[15%] lg:w-[13%]"
          >
            <MiscCardBase class="w-full p-4">
              <div class="flex justify-center items-center gap-x-3">
                <img
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="thumbnail"
                  class="aspect-square object-cover w-[60px] rounded-2xl"
                >
                <p class="text-xl text-black">
                  Beach
                </p>
              </div>
            </MiscCardBase>
          </swiper-slide>
        </swiper-container>
      </routerLink>
    </div>
  </div>
</template>
<script>
export default {
}
</script>