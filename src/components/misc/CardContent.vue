<template>
  <router-link
    to="/marketplace/1"
    class="transition-all duration-300 hover:scale-[1.03]"
  >
    <MiscCardBase class="w-full p-5 space-y-3">
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="thumbnail"
          loading="lazy"
          class="aspect-square w-full md:w-[245px] rounded-[20px]"
        >
        <!-- Like Action -->
        <button 
          class="absolute top-3 right-3 bg-white p-2 rounded-full"
          :class="{
            'bg-[#FFECE8]': isLiked,
          }"
          @click="handlelike($event)"
        >
          <SvgLove
            :color="isLiked ? '#FF4014' : '#121212'"
            :border-only="isLiked"
          />
        </button>
        <!-- Rate Information -->
        <div class="absolute bottom-3 right-3 bg-white rounded-full">
          <div class="flex items-center py-1 px-2">
            <div class="flex gap-x-1">
              <img
                :src="providerLogo"
                alt="branding"
                class="w-[20px]"
              >
              <p class="text-black">
                {{ provider }}
              </p>
            </div>
            <span class="w-1 h-1 rounded-full bg-black mx-2" />
            <div class="flex items-center gap-x-1">
              <SvgStar />
              <p class="text-black font-light">
                {{ rating }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-medium text-black">
          {{ title }}
        </h1>
        <div class="flex gap-x-1 mt-2">
          <div class="flex items-center gap-x-1 border py-1 px-2 rounded-full">
            <SvgMaps /> {{ location }}
          </div>
          <div class="flex items-center gap-x-1 border py-1 px-2 rounded-full">
            <SvgClock /> {{ duration }}
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-3">
        <div
          v-if="discount > 0"
          class="flex items-center gap-x-3"
        >
          <span class="text-sm text-[#AAAAAA] line-through">{{ price }}</span>
          <div class="flex justify-center items-center bg-[#FF4014] rounded-full py-1 px-2">
            <span class="text-[9px] text-white">{{ discount }}% off</span>
          </div>
        </div>
        <span class="text-xl font-extrabold leading-loose">{{ totalPriceAfterDiscount }} {{ id }}</span>
      </div>
    </MiscCardBase>
  </router-link>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: 'Open Trip Labuan Bajo',
    },
    location: {
      type: String,
      default: 'Lampung',
    },
    duration: {
      type: String,
      default: '3D + 2M',
    },
    price: {
      type: Number,
      default: 3600000,
    },
    discount: {
      type: Number,
      default: 50,
    },
    rating: {
      type: Number,
      default: 4.9,
    },
    providerLogo: {
      type: String,
      default: '/img/logo/branding.png',
    },
    provider: {
      type: String,
      default: 'Trivus',
    },
    like: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['like'],
  data() {
    return {
      isLiked: false,
    }
  },
  computed: {
    totalPriceAfterDiscount() {
      return this.price - (this.price * this.discount) / 100
    },
  },
  watch: {
    like: {
      handler(newval) {
        this.isLiked = newval
      },
      immediate: true,
    }
  },
  methods: {
    handlelike(event) {
      event.preventDefault()
      this.isLiked = !this.isLiked
    }
  }
}
</script>
<style>
    
</style>