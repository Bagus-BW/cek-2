<template>
  <div class="container mx-auto px-5 lg:px-20 mt-10 flex flex-col">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 md:gap-y-0">
      <div class="flex justify-between items-center md:justify-start md:items-start">
        <h1 class="text-lg md:text-[21px] font-bold text-black">
          Rekomendasi
        </h1>
        <button class="block md:hidden bg-white border rounded-full p-3">
          <SvgFilter
            :width="20"
            :height="20"
          />
        </button>
      </div>
      <div class="hidden md:flex items-center gap-x-5">
        <div class="bg-white flex border p-2 rounded-full">
          <MiscButton 
            text="All Trip"
            class="!w-fit md:!w-[100px] h-[35px] !text-xs md:!text-base !rounded-full !px-3 md:!px-0"
            :background-color="pagination.trip === 'all' ? '#000000' : '#FFFFFF'"
            :text-color="pagination.trip === 'all' ? '#FFFFFF' : '#000000'"
            @click-handle="pagination.trip = 'all'"
          />
          <MiscButton 
            text="Open Trip"
            class="!w-fit md:!w-[100px] h-[35px] !text-xs md:!text-base !rounded-full !px-3 md:!px-0"
            :background-color="pagination.trip === 'open' ? '#000000' : '#FFFFFF'"
            :text-color="pagination.trip === 'open' ? '#FFFFFF' : '#000000'"
            @click-handle="pagination.trip = 'open'"
          />
          <MiscButton 
            text="Private Trip"
            class="!w-fit md:!w-[100px] h-[35px] !text-xs md:!text-base !rounded-full !px-3 md:!px-0"
            :background-color="pagination.trip === 'private' ? '#000000' : '#FFFFFF'"
            :text-color="pagination.trip === 'private' ? '#FFFFFF' : '#000000'"
            @click-handle="pagination.trip = 'private'"
          />
        </div>
        <button class="bg-white border rounded-full p-4">
          <SvgFilter />
        </button>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-5 mt-5">
      <MiscCardContent
        v-for="i in 12"
        :key="i"
        class="col-span-12 md:col-span-4 lg:col-span-3"
      />
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			pagination: {
				trip: 'all'
			}		
		}
	}
}
</script>