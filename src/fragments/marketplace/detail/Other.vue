<template>
  <div class=" mt-10">
    <MiscCardRecomended
      sub-title="Lainnya dari Trivius"
    >
      <div class="grid grid-cols-12 gap-5 mt-5">
        <MiscCardContent
          v-for="i in 4"
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