<template>
  <MiscCardBase class="h-full flex flex-col">
    <h1 class="text-[21px] font-bold text-black p-7">
      Tiket Saya
    </h1>
    <div class="h-full flex flex-col">
      <div class="relative">
        <div class="flex border-t my-2" />
        <div class="flex mx-5">
          <button
            class="relative text-base font-semibold p-3"
            :class="{
              'active-tab': activeTab === 'up-coming-trip'
            }"
            @click="activeTab = 'up-coming-trip'"
          >
            Trip Mendatang
          </button>
          <button
            class="relative text-base font-semibold p-3"
            :class="{
              'active-tab': activeTab === 'last-trip'
            }"
            @click="activeTab = 'last-trip'"
          >
            Trip Lalu
          </button>
        </div>
        <div class="flex border-b my-2" />
      </div>
      <div
        v-if="data"
        class="flex flex-col mt-5"
      >
        <div class="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 items-center px-7">
          <img
            src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
            alt="thumbnail"
            class="aspect-[3/2] w-full lg:w-fit lg:h-[160px] rounded-xl"
          >
          <div class="w-full lg:w-fit flex flex-col">
            <h1 class="text-xl font-semibold text-black">
              Paket trip Pahawang 5D+4N
            </h1>
            <div class="flex items-center gap-x-2 text-sm font-semibold text-[#636363] -mt-2">
              <p>Paket standard</p>
              <span class="text-3xl">·</span>
              <p>1 Tiket</p>
            </div>
            <p class="text-sm text-[#7F7F7F] -mt-2">
              Kamis, 2 Oktober 2023 - Selasa, 7 Oktober 2023
            </p>
            <div class="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3 mt-5">
              <MiscButton 
                text="Download Tiket"
                class="w-full md:w-[180px] h-14"
              />
              <MiscButton 
                text="Download Itenary"
                border-only
                class="w-full md:w-[180px] h-14"
              />
            </div>
          </div>
        </div>
        <div class="h-[0.5px] w-full bg-[#ECECEC] my-7" />
        <div class="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 items-center px-7">
          <img
            src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
            alt="thumbnail"
            class="aspect-[3/2] w-full lg:w-fit lg:h-[160px] rounded-xl"
          >
          <div class="w-full lg:w-fit flex flex-col">
            <h1 class="text-xl font-semibold text-black">
              Paket trip Pahawang 5D+4N
            </h1>
            <div class="flex items-center gap-x-2 text-sm font-semibold text-[#636363] -mt-2">
              <p>Paket standard</p>
              <span class="text-3xl">·</span>
              <p>1 Tiket</p>
            </div>
            <p class="text-sm text-[#7F7F7F] -mt-2">
              Kamis, 2 Oktober 2023 - Selasa, 7 Oktober 2023
            </p>
            <div class="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3 mt-5">
              <MiscButton 
                text="Download Tiket"
                class="w-full md:w-[180px] h-14"
              />
              <MiscButton 
                text="Download Itenary"
                border-only
                class="w-full md:w-[180px] h-14"
              />
            </div>
          </div>
        </div>
        <div class="h-[0.5px] w-full bg-[#ECECEC] my-7" />
        <div class="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 items-center px-7">
          <img
            src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
            alt="thumbnail"
            class="aspect-[3/2] w-full lg:w-fit lg:h-[160px] rounded-xl"
          >
          <div class="w-full lg:w-fit flex flex-col">
            <h1 class="text-xl font-semibold text-black">
              Paket trip Pahawang 5D+4N
            </h1>
            <div class="flex items-center gap-x-2 text-sm font-semibold text-[#636363] -mt-2">
              <p>Paket standard</p>
              <span class="text-3xl">·</span>
              <p>1 Tiket</p>
            </div>
            <p class="text-sm text-[#7F7F7F] -mt-2">
              Kamis, 2 Oktober 2023 - Selasa, 7 Oktober 2023
            </p>
            <div class="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3 mt-5">
              <MiscButton 
                text="Download Tiket"
                class="w-full md:w-[180px] h-14"
              />
              <MiscButton 
                text="Download Itenary"
                border-only
                class="w-full md:w-[180px] h-14"
              />
            </div>
          </div>
        </div>
        <div class="h-[0.5px] w-full bg-[#ECECEC] my-7" />
      </div>
      <div
        v-else
        class="h-full flex flex-col justify-center items-center gap-y-5 p-7"
      >
        <div class="bg-[#ECECEC] p-2 rounded-full">
          <SvgTicket />
        </div>
        <div class="w-[200px] flex flex-col text-center">
          <h1 class="text-base font-bold text-black">
            Tidak ada tiket
          </h1>
          <p class="text-sm text-[#7F7F7F]">
            Sepertinya kamu belum memesan tiket perjalanan apapun
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
<style>
.active-tab{
  color: #1127E3;
}
.active-tab:after {
  content: '';
  position: absolute;
  bottom: -8.5px;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #1127E3;
}
</style>