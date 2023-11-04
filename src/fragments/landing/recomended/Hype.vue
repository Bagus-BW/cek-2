<template>
  <div class="container mx-auto flex flex-col px-5 lg:px-20 mt-[120px]">
    <div class="flex flex-col md:items-center">
      <p class="text-xs md:text-sm text-black">
        UDAH MAIN KE SINI BELUM?
      </p>
      <h1 class="text-2xl md:text-4xl font-bold text-black">
        Destinasi Yang Lagi Hype
      </h1>
    </div>
    <routerLink
      to=""
      class="relative mt-10"
    >
      <swiper-container
        ref="swiperEl"
        slides-per-view="1"
        space-between="0"
        :breakpoints="{
          '760': {
            slidesPerView: '3',
            spaceBetween: 10,
          },
        }"
        @slidechange="activeIndexChange"
      >
        <swiper-slide
          v-for="index in 10"
          :key="index"
        >
          <div 
            class="relative img-background-ovelay"
            :class="{
              'md:scale-90': slideActiveIndex + 1 !== index - 1,
            }"
          >
            <img
              src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="thumbnail"
              class="aspect-square object-cover w-full md:w-[370px] rounded-2xl"
            >
            <div class="absolute bottom-5 left-5 flex flex-col z-10">
              <h1 class="text-[27px] text-white">
                Copacabana
              </h1>
              <p class="text-xl text-white">
                Beach
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <!-- Left Controller -->
      <button 
        class="absolute top-1/2 -left-2 -translate-y-1/2 bg-white  border border-[#1127E3] p-3 rounded-full z-10"
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
            stroke="#1127E3"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <!-- Right Controller -->
      <button 
        class="absolute top-1/2 -right-2 -translate-y-1/2 bg-white  border border-[#1127E3] p-3 rounded-full rotate-180 z-10"
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
    </routerLink>
  </div>
</template>
  <script>
  export default {
    data() {
      return {
        slideActiveIndex: 0
      }
    },
    methods: {
    activeIndexChange(ev) {
        this.slideActiveIndex = ev.detail[0].activeIndex
      },
    }
  }
  </script>
  <style scoped>
  .img-background-ovelay::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-image: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 90%);
    z-index: 1;
    border-radius: 16px;
  }
  </style>