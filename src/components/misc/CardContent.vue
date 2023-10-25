<template>
  <MiscCardBase class="w-full p-5 space-y-3">
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="thumbnail"
        loading="lazy"
        class="aspect-square w-full md:w-[245px] rounded-[20px]"
      >
      <!-- Like Action -->
      <button class="absolute top-3 right-3 bg-white p-2 rounded-full">
        <SvgLove />
      </button>
      <!-- Rate Information -->
      <div class="absolute bottom-3 right-3 bg-white rounded-full">
        <div class="flex items-center py-1 px-2">
          <div class="flex gap-x-1">
            <img
              src="/img/logo/branding.png"
              alt="branding"
              class="w-[20px]"
            >
            <p class="text-black">
              Trivus
            </p>
          </div>
          <span class="w-1 h-1 rounded-full bg-black mx-2" />
          <div class="flex items-center gap-x-1">
            <SvgStar />
            <p class="text-black font-light">
              4.9
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xl font-medium text-black">
        Open Trip Labuan Bajo
      </h1>
      <div class="flex gap-x-1">
        <div class="flex items-center gap-x-1 border py-1 px-2 rounded-full">
          <SvgMaps /> Lampung
        </div>
        <div class="flex items-center gap-x-1 border py-1 px-2 rounded-full">
          <SvgCLock /> 3D + 2M
        </div>
      </div>
    </div>
    <div class="flex flex-col pt-3">
      <div
        v-if="withDiscount"
        class="flex items-center gap-x-3"
      >
        <span class="text-sm text-[#AAAAAA] line-through">Rp 3.6000.000</span>
        <div class="flex justify-center items-center bg-[#FF4014] rounded-full py-1 px-2">
          <span class="text-[9px] text-white">50% off</span>
        </div>
      </div>
      <span class="text-xl font-extrabold leading-loose">Rp 1.8000.000</span>
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  props: {
    withDiscount: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
<style>
    
</style>