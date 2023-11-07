<template>
  <div class="flex flex-col">
    <MiscCardBase class="!rounded-[20px] p-10">
      <h1 class="text-lg font-bold text-black">
        Harga dan Paket
      </h1>
      <div class="flex flex-col gap-y-5 mt-5">
        <div
          v-for="(item, idx) in packageType"
          :key="idx"
          class="border p-5 rounded-xl cursor-pointer"
          :class="{
            'border-[#1127E3] bg-[rgba(17,39,227,0.2)]': selectedPackage === idx,
          }"
          @click="selectedPackage = idx"
        >
          <h1 class="text-xl font-bold text-black">
            {{ item.type }}
          </h1>
          <ul class="list-disc ml-4 mt-4">
            <li
              v-for="(facility, idxy) in packageType[idx].facility"
              :key="idxy"
              class="text-base text-[#1127E3]"
            >
              <span class="text-[#121212]">{{ facility }}</span>
            </li>
          </ul>
          <div class="flex justify-between mt-5">
            <div class="flex gap-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.168 17.0832H5.83464C3.33464 17.0832 1.66797 15.8332 1.66797 12.9165V7.08317C1.66797 4.1665 3.33464 2.9165 5.83464 2.9165H14.168C16.668 2.9165 18.3346 4.1665 18.3346 7.08317V12.9165C18.3346 15.8332 16.668 17.0832 14.168 17.0832Z"
                  stroke="#636363"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#636363"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.58203 7.9165V12.0832"
                  stroke="#636363"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.418 7.9165V12.0832"
                  stroke="#636363"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-base text-[#636363]">Price</span>
            </div>
            <p class="text-base font-extrabold text-black">
              Rp {{ item.price }}
            </p>
          </div>
        </div>
	
        <div class="border px-5 py-3 rounded-xl">
          <p class="text-sm font-semibold">
            Are you a foreigner?
          </p>
        </div>
	
        <div class="border px-5 py-3 rounded-xl">
          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold">
              Berapa tiket?
            </p>
            <div class="flex gap-x-2">
              <button 
                class="bg-[rgba(17,39,227,0.2)] p-1 rounded-full"
                @click="ticketCount > 1 ? ticketCount-- : ''"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8H12"
                    stroke="#1127E3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <p class="text-base font-bold text-black">
                {{ ticketCount }}
              </p>
              <button 
                class="bg-[rgba(17,39,227,0.2)] p-1 rounded-full"
                @click="ticketCount++"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8H12"
                    stroke="#1127E3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12V4"
                    stroke="#1127E3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex h-[0.5px] w-full bg-[#ECECEC] my-3" />

        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <p class="text-xs font-medium text-[#7F7F7F]">
              1X tiket standard
            </p>
            <p class="text-xs font-bold text-black">
              Rp. 3.000.000
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-xs font-medium text-[#7F7F7F]">
              Biaya layanan
            </p>
            <p class="text-xs font-bold text-black">
              Rp. 5.000
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-sm font-medium text-[#7F7F7F]">
              Total
            </p>
            <p class="text-sm font-bold text-black">
              Rp. 3.005.000
            </p>
          </div>
          <MiscButton
            text="Pesan Tiket"
            class="mt-5 !rounded-xl"
            @click-handle="() => $router.push('/checkout')"
          />
        </div>
      </div>
    </MiscCardBase>
    <MiscCardBase class="!rounded-[20px] px-10 py-5 mt-5">
      <div class="flex gap-x-3">
        <button class="w-10 h-10 flex items-center justify-center border p-2 rounded-full">
          <SvgLove />
        </button>
        <div class="flex flex-col">
          <h1 class="text-base font-bold text-black">
            Add to your wishlist?
          </h1>
          <p class="text-sm font-medium text-[#7F7F7F]">
            Simpan untuk perjalanan nanti!
          </p>
        </div>
      </div>
    </MiscCardBase>
  </div>
</template>

<script>
export default {
  data() {
    return {
			ticketCount: 1,
			selectedPackage: 0,
			packageType: [
				{
					type: 'Standard',
					facility: [
						'Montana - Standard hotel',
						'Private boat',
						'11-15 kuota',
					],
					price: '3000000',
				},
				{
					type: 'Exclusive',
					facility: [
						'Sheraton - Exclusive hotel',
						'Private boat',
						'4-5 kuota',
					],
					price: '6000000',
				}
			]
		}
  }
}
</script>
<style>
    
</style>