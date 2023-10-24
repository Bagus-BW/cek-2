<template>
  <MiscCardBase class="w-full p-5 space-y-3">
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="thumbnail"
        loading="lazy"
        class="aspect-square w-full md:w-[245px] rounded-[20px]"
      >
    </div>
    <div class="flex flex-col">
      <h1 class="text-xl font-medium text-black">
        Open Trip Labuan Bajo
      </h1>
      <div class="flex gap-x-1">
        <div class="border py-1 px-2 rounded-full">
          Lampung
        </div>
        <div class="border py-1 px-2 rounded-full">
          3D + 2M
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