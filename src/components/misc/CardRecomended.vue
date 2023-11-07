<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <p v-if="title" class="text-xs md:text-sm text-black">
          {{ title }}
        </p>
        <h1 v-if="subTitle" class="text-xl md:text-3xl font-bold text-black leading-normal">
          {{ subTitle }}
        </h1>
      </div>
      <router-link
        to="/marketplace"
        class="text-[#1127E3] transition-all duration-300 hover:brightness-200"
      >
        <div class="flex gap-x-2">
          <span>Lihat Lainnya</span> 
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4297 5.93005L20.4997 12.0001L14.4297 18.0701"
              stroke="#1127E3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="#1127E3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>