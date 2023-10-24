<template>
  <div class="container mx-auto mt-[120px] px-10 lg:px-28">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-7">
        <p class="text-sm">
          BINGUNG NIH...
        </p>
        <h1 class="text-4xl lg:text-6xl font-extrabold text-black leading-[1.2]">
          Mau jalan tapi ga tau kemana? coba tombol ajaib di bawah! 👇
        </h1>
      </div>
      <div class="col-span-12">
        <div class="flex flex-col md:flex-row gap-x-3 mt-[50px] gap-y-5">
          <MiscButton 
            text="Saya ditakdirkan jalan ke mana?"
          />
          <MiscButton 
            text="Explore marketplace"
            border-only
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>