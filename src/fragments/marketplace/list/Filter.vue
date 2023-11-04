<template>
  <div class="bg-white py-6">
    <div class="container flex flex-col lg:flex-row justify-between items-center gap-y-5 lg:gap-y-0 mx-auto px-5 lg:px-20">
      <h1 class="text-3xl font-bold text-black">
        Cari paket perjalanan
      </h1>
      <div class="w-full md:w-fit flex flex-col md:flex-row items-center gap-y-5 md:gap-y-0 border rounded-2xl md:rounded-full px-5 py-3">
        <div class="w-full flex flex-col gap-y-1">
          <label
            for="destination"
            class="text-xs"
          >Pilih Destinasi</label>
          <div class="flex items-center gap-x-1">
            <SvgMaps />
            <input
              type="text"
              placeholder="Kamu mau jalan ke mana?"
              class="bg-transparent focus:outline-none"
            >
          </div>
        </div>
        
        <div class="hidden md:block w-[0.5px] h-1/2 bg-[#AAAAAA] mx-5" />

        <div class="w-full md:w-32 flex flex-col gap-y-1">
          <label
            for="destination"
            class="text-xs"
          >Tipe Paket Perjalanan</label>
          <div class="flex items-center gap-x-1">
            <input
              type="text"
              placeholder="Pilih tipe"
              class="bg-transparent focus:outline-none"
            >
          </div>
        </div>

        <div class="hidden md:block w-[0.5px] h-1/2 bg-[#AAAAAA] mx-5" />

        <div class="w-full md:w-32 flex flex-col gap-y-1">
          <label
            for="destination"
            class="text-xs"
          >Kapan Berangkat</label>
          <div class="flex items-center gap-x-1">
            <input
              type="text"
              placeholder="Flexible"
              class="bg-transparent focus:outline-none"
            >
          </div>
        </div>

        <!-- Button Table and Desktop -->
        <button class="hidden md:block bg-[#1127E3] rounded-full p-3 ml-5">
          <SvgFinder />
        </button>

        <!-- Button Mobile -->
        <MiscButton 
          text="Cari"
          class="block md:hidden w-full"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>