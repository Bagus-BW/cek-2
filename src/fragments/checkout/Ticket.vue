<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-8 flex flex-col gap-y-5 ">
        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col gap-y-2">
            <h1 class="text-[21px] font-bold text-black">
              Tiket sudah tersedia!
            </h1>
            <p class="text-base text-[#7F7F7F]">
              Selamat pembayaran kamu telah berhasil, kamu bisa dowload tiket di bawah ini agar nanti bisa ditunjukan ke pihak travel agency-Nya.
            </p>
          </div>
        </MiscCardBase>

        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col gap-y-2">
            <div class="flex flex-col md:flex-row justify-between md:items-center gap-y-2 md:gap-y-0">
              <h1 class="text-[21px] font-bold text-black">
                Tiket perjalanan
              </h1>
              <button class="flex items-center gap-x-2 text-base text-[#1127E3]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_129_19732)">
                    <path
                      d="M6.71875 8.59375L10 11.875L13.2812 8.59375"
                      stroke="#1127E3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 3.125V11.875"
                      stroke="#1127E3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                      stroke="#1127E3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_19732">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Download semua tiket</span>
              </button>
            </div>
            <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
            <div class="flex flex-col">
              <div class="flex justify-between items-center">
                <h1 class="text-base font-bold text-black">
                  Traveler 1
                </h1>
                <button class="flex items-center gap-x-2 text-base text-[#1127E3]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_129_19732)">
                      <path
                        d="M6.71875 8.59375L10 11.875L13.2812 8.59375"
                        stroke="#1127E3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 3.125V11.875"
                        stroke="#1127E3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                        stroke="#1127E3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_19732">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Download tiket</span>
                </button>
              </div>
              <div class="overflow-x-auto">
                <div class="relative h-[320px] w-[740px] lg:w-full bg-[#E0F0F7] rounded-xl mt-3 overflow-hidden">
                  <img
                    src="/img/backdrop/earth.png"
                    alt="backdrop-earth"
                    class="relative top-5"
                  >
                  <div class="absolute top-[65px] left-[-2%] flex flex-col rotate-90">
                    <div class="flex flex-col gap-y-5">
                      <div class="flex flex-col">
                        <h1 class="text-[8px] text-black">TRAVEL AGENCY</h1>
                        <p class="text-xs font-semibold text-black">ARTHUR KARCH</p>
                      </div>
                      <div class="flex flex-col">
                        <h1 class="text-[8px] text-black">MEETING POINT</h1>
                        <p class="text-xs font-semibold text-black">BANDAR LAMPUNG</p>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col">
                          <h1 class="text-[8px] text-black">PACKAGE</h1>
                          <p class="text-xs font-semibold text-black">Paket trip Pahawang 5D+4N</p>
                        </div>
                        <div class="flex flex-col ml-10">
                          <h1 class="text-[8px] text-black">Date</h1>
                          <p class="text-xs font-semibold text-black">Tue, 2 Oct 2023</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col mt-10">
                      <h1 class="text-[8px] text-black">PASSANGER</h1>
                      <p class="text-xs font-semibold text-black">ARTHUR KARCH</p>
                    </div>
                  </div>
                  <div class="absolute bottom-0 left-0 bg-[#1127E3] py-8 px-4 rounded-tr-xl">
                    <p class="text-2xl font-bold text-white rotate-90">STD</p>
                  </div>
                  <div class="absolute -top-5 left-[35%] h-10 w-10 bg-white rounded-full" />
                  <div
                    v-for="idx in 7"
                    :key="idx"
                    class="absolute left-[calc(35%_+_15.5px)] h-8 w-1 bg-white rounded-full"
                    :style="{
                      top: `${idx * 36}px`
                    }"
                  />
                  <div class="absolute -bottom-5 left-[35%] h-10 w-10 bg-white rounded-full" />
                  <div class="absolute top-0 right-0 bg-[#1127E3] py-4 px-7 rounded-bl-xl">
                    <span class="text-2xl font-bold text-white">STD</span>
                  </div>
                  <div class="absolute top-7 left-[43%] flex flex-col">
                    <div class="flex flex-col">
                      <h1 class="text-xs text-black">PASSANGER</h1>
                      <p class="text-2xl font-semibold text-black">ARTHUR KARCH</p>
                    </div>
                    <div class="flex flex-col gap-y-5 mt-24">
                      <div class="flex flex-col">
                        <h1 class="text-xs text-black">TRAVEL AGENCY</h1>
                        <p class="text-base font-semibold text-black">ARTHUR KARCH</p>
                      </div>
                      <div class="flex flex-col">
                        <h1 class="text-xs text-black">MEETING POINT</h1>
                        <p class="text-base font-semibold text-black">BANDAR LAMPUNG</p>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col">
                          <h1 class="text-xs text-black">PACKAGE</h1>
                          <p class="text-base font-semibold text-black">Paket trip Pahawang 5D+4N</p>
                        </div>
                        <div class="flex flex-col ml-10">
                          <h1 class="text-xs text-black">Date</h1>
                          <p class="text-base font-semibold text-black">Tue, 2 Oct 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MiscCardBase>
      </div>
  
      <div class="col-span-12 lg:col-span-4">
        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col">
            <h1 class="text-[21px] font-bold text-black">
              Order summary
            </h1>
            <img
              src="https://images.unsplash.com/photo-1594235195084-a14de3830b02?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxnaWxpJTIwdHJhd2FuZ2FufGVufDB8fDB8fHww"
              alt="thumbnail"
              class="aspect-[3/2] object-cover rounded-[20px] mt-3"
            >
            <div class="flex flex-col mt-5">
              <h1 class="text-xl font-semibold text-black">
                Paket trip Pahawang 5D+4N
              </h1>
              <div class="flex items-center gap-x-1 text-[#636363] -mt-2">
                <p class="text-sm font-semibold">
                  Paket standar
                </p>
                <span class="text-3xl">·</span>
                <p class="text-sm font-semibold">
                  2 Tiket
                </p>
              </div>
              <p class="text-sm text-[#636363] -mt-2">
                Kamis, 2 Oktober 2023 - Selasa, 7 Oktober 2023
              </p>
            </div>
            <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
            <div class="flex flex-col gap-y-3">
              <p class="text-sm text-[#7F7F7F]">
                Itinerary kamu sudah tersedia, kamu bisa mengeceknya di halaman detail atau mendownload itenerary dalam bentuk pdf.
              </p>
              <MiscButton
                text="Download Itinerary"
                class="!rounded-xl"
              />
              <MiscButton
                text="Riwayat Transaksi"
                class="!rounded-xl"
                border-only
              />
            </div>
          </div>
        </MiscCardBase>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
}
</script>