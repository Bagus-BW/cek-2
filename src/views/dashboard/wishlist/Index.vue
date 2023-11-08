<template>
  <MiscCardBase class="h-full flex flex-col">
    <h1 class="text-[21px] font-bold text-black p-7">
      Wishlist
    </h1>
    <div class="h-full flex flex-col px-7">
      <div
        v-if="data"
        class="grid grid-cols-12 gap-5 mt-5 mb-10"
      >
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 border rounded-[20px] ">
          <MiscCardContent like />
        </div>
      </div>
      <div
        v-else
        class="h-full flex flex-col justify-center items-center gap-y-5 p-7"
      >
        <div class="bg-[#ECECEC] p-2 rounded-full">
          <SvgNote />
        </div>
        <div class="w-[200px] flex flex-col text-center">
          <h1 class="text-base font-bold text-black">
            Wishlist
          </h1>
          <p class="text-sm text-[#7F7F7F]">
            Belum ada wishlist yang kamu tambahkan nih.
          </p>
        </div>
      </div>
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 'up-coming-trip',
      data: []
    }
  }
}
</script>