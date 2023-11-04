<template>
  <div class="container mx-auto px-5 lg:px-20 mt-[120px]">
    <MiscCardRecomended
      title="Rekomendasi"
      sub-title="Paket Private Trip"
    >
      <div class="grid grid-cols-12 gap-5 mt-5">
        <MiscCardContent
          v-for="i in 8"
          :key="i"
          class="col-span-12 md:col-span-4 lg:col-span-3"
          :with-discount="i === 1"
        />
      </div>
    </MiscCardRecomended>
  </div>
</template>
<script>
export default {
    
}
</script>