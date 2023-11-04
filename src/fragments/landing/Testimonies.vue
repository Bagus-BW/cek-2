<template>
  <div class="container flex flex-col mt-[120px] mx-auto px-5 lg:px-20">
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
          @click="preveSlide"
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
          @click="nextSlide"
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
    <div class="mt-8">
      <swiper-container
        ref="swiperEl"
        slides-per-view="auto"
        centered-slides="true"
        loop="true"
      >
        <swiper-slide
          v-for="index in 10"
          :key="index"
          class="w-full md:w-[60%] lg:w-[40%] relative md:-left-[20%] lg:-left-[30%]"
          :class="{
            'md:!scale-[0.8] relative -bottom-[40px]': slideActiveIndex < index - 1,
            'md:-ml-20': slideActiveIndex + 1 < index - 1,
            'md:-ml-7': slideActiveIndex + 1 === index - 1,
          }"
        >
          <MiscCardBase 
            class="w-fit p-10 border"
            :class="{
              '!bg-[#1127E3]': slideActiveIndex === index - 1,
            }"
          >
            <div class="flex justify-center items-center gap-x-3">
              <div class="flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="thumbnail"
                  class="aspect-square object-cover w-[80px] rounded-full"
                >
                <div 
                  class="text-black flex flex-col items-center gap-y-3"
                  :class="{
                    'text-white': slideActiveIndex === index - 1,
                  }"
                >
                  <h1 class="text-3xl font-bold mt-5">
                    Bintang Asyura
                  </h1>
                  <p class="text-lg font-light text-center">
                    Trivenly makes it easy for me to go on vacation with my family. It's very easy to use, this is what makes me like it more than others. What a good experience! I think i will use it again for my next vacation. Thx!
                  </p>
                </div>
                <div class="flex items-center gap-x-5 mt-10">
                  <div 
                    class="text-xl text-black"
                    :class="{
                      'text-white': slideActiveIndex === index - 1,
                    }"
                  >
                    5.0 <span class="text-base opacity-60">/5.0 rating</span>
                  </div>
                  <svg
                    width="140"
                    height="29"
                    viewBox="0 0 140 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2615 3.47791C13.5595 2.56083 14.8569 2.56083 15.1549 3.47791L17.1134 9.50583C17.2467 9.91596 17.6289 10.1936 18.0601 10.1936H24.3983C25.3625 10.1936 25.7635 11.4276 24.9834 11.9943L19.8557 15.7198C19.5068 15.9733 19.3608 16.4226 19.4941 16.8327L21.4527 22.8606C21.7507 23.7777 20.701 24.5403 19.9209 23.9735L14.7933 20.2481C14.4444 19.9946 13.972 19.9946 13.6231 20.2481L8.49543 23.9735C7.71532 24.5403 6.66568 23.7777 6.96366 22.8606L8.92225 16.8327C9.05551 16.4226 8.90952 15.9733 8.56064 15.7198L3.43299 11.9944C2.65287 11.4276 3.0538 10.1936 4.01807 10.1936H10.3562C10.7874 10.1936 11.1696 9.91596 11.3029 9.50583L13.2615 3.47791Z"
                      :fill="slideActiveIndex === index - 1 ? 'white' : 'black'"
                    />
                    <path
                      d="M41.1326 3.47791C41.4306 2.56083 42.728 2.56083 43.026 3.47791L44.9845 9.50583C45.1178 9.91596 45.5 10.1936 45.9312 10.1936H52.2694C53.2336 10.1936 53.6346 11.4276 52.8545 11.9943L47.7268 15.7198C47.3779 15.9733 47.2319 16.4226 47.3652 16.8327L49.3238 22.8606C49.6218 23.7777 48.5721 24.5403 47.792 23.9735L42.6644 20.2481C42.3155 19.9946 41.8431 19.9946 41.4942 20.2481L36.3665 23.9735C35.5864 24.5403 34.5368 23.7777 34.8348 22.8606L36.7933 16.8327C36.9266 16.4226 36.7806 15.9733 36.4317 15.7198L31.3041 11.9944C30.524 11.4276 30.9249 10.1936 31.8892 10.1936H38.2273C38.6585 10.1936 39.0407 9.91596 39.174 9.50583L41.1326 3.47791Z"
                      :fill="slideActiveIndex === index - 1 ? 'white' : 'black'"
                    />
                    <path
                      d="M69.0046 3.47791C69.3026 2.56083 70.6 2.56083 70.898 3.47791L72.8566 9.50583C72.9899 9.91596 73.3721 10.1936 73.8033 10.1936H80.1414C81.1057 10.1936 81.5066 11.4276 80.7265 11.9943L75.5989 15.7198C75.25 15.9733 75.104 16.4226 75.2373 16.8327L77.1959 22.8606C77.4938 23.7777 76.4442 24.5403 75.6641 23.9735L70.5364 20.2481C70.1875 19.9946 69.7151 19.9946 69.3663 20.2481L64.2386 23.9735C63.4585 24.5403 62.4088 23.7777 62.7068 22.8606L64.6654 16.8327C64.7987 16.4226 64.6527 15.9733 64.3038 15.7198L59.1762 11.9944C58.396 11.4276 58.797 10.1936 59.7612 10.1936H66.0994C66.5306 10.1936 66.9128 9.91596 67.0461 9.50583L69.0046 3.47791Z"
                      :fill="slideActiveIndex === index - 1 ? 'white' : 'black'"
                    />
                    <path
                      d="M96.8757 3.47791C97.1737 2.56083 98.4711 2.56083 98.7691 3.47791L100.728 9.50583C100.861 9.91596 101.243 10.1936 101.674 10.1936H108.013C108.977 10.1936 109.378 11.4276 108.598 11.9943L103.47 15.7198C103.121 15.9733 102.975 16.4226 103.108 16.8327L105.067 22.8606C105.365 23.7777 104.315 24.5403 103.535 23.9735L98.4075 20.2481C98.0586 19.9946 97.5862 19.9946 97.2373 20.2481L92.1097 23.9735C91.3296 24.5403 90.2799 23.7777 90.5779 22.8606L92.5365 16.8327C92.6698 16.4226 92.5238 15.9733 92.1749 15.7198L87.0472 11.9944C86.2671 11.4276 86.6681 10.1936 87.6323 10.1936H93.9705C94.4017 10.1936 94.7839 9.91596 94.9172 9.50583L96.8757 3.47791Z"
                      :fill="slideActiveIndex === index - 1 ? 'white' : 'black'"
                    />
                    <path
                      d="M124.747 3.47791C125.045 2.56083 126.342 2.56083 126.64 3.47791L128.599 9.50583C128.732 9.91596 129.114 10.1936 129.545 10.1936H135.884C136.848 10.1936 137.249 11.4276 136.469 11.9943L131.341 15.7198C130.992 15.9733 130.846 16.4226 130.979 16.8327L132.938 22.8606C133.236 23.7777 132.186 24.5403 131.406 23.9735L126.279 20.2481C125.93 19.9946 125.457 19.9946 125.108 20.2481L119.981 23.9735C119.201 24.5403 118.151 23.7777 118.449 22.8606L120.408 16.8327C120.541 16.4226 120.395 15.9733 120.046 15.7198L114.918 11.9944C114.138 11.4276 114.539 10.1936 115.503 10.1936H121.842C122.273 10.1936 122.655 9.91596 122.788 9.50583L124.747 3.47791Z"
                      :fill="slideActiveIndex === index - 1 ? 'white' : 'black'"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </MiscCardBase>
        </swiper-slide>
      </swiper-container>
    </div>
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
    nextSlide(){
      this.$refs.swiperEl.swiper.slideNext()

      if(this.slideActiveIndex === 9){
        this.slideActiveIndex = 0
      }else{
        this.slideActiveIndex = this.slideActiveIndex + 1
      }
    },
    preveSlide(){
      this.$refs.swiperEl.swiper.slidePrev()

      if(this.slideActiveIndex === 0){
        this.slideActiveIndex = 9
      }else{
        this.slideActiveIndex = this.slideActiveIndex - 1
      }
    }
  }
}
</script>