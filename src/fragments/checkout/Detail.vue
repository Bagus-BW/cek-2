<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-8 flex flex-col gap-y-5">
        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col gap-y-2">
            <h1 class="text-[21px] font-bold text-black">
              Detail order
            </h1>
            <p class="text-base text-[#7F7F7F]">
              Lengkapi data-data di bawah ini dulu yuk, biar Travel agency nya tahu siapa yang bakal liburan bareng mereka. Data ini juga akan ditampilkan di e-ticket setelah kamu selesai melakukan pemesanan ya
            </p>
          </div>
        </MiscCardBase>
        
        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col gap-y-5">
            <div
              v-for="idx in ticketCount"
              :key="idx"
              class="border flex flex-col gap-y-4 p-5 rounded-[20px]"
            >
              <h1 class="text-[21px] font-bold text-black">
                Traveler {{ idx }}
              </h1>
              <FormTextField 
                v-bind="field"
                required
                label="Nama Lengkap"
                placeholder="Ex. John Doe"
                subtitle="Gunakan nama yang tertera di KTP/Paspor"
                class="w-full"
              />
  
              <FormTextField 
                v-bind="field"
                required
                input-type="date"
                label="Tanggal Lahr"
                placeholder="Ex. jhon@gmail.com"
                class="w-full"
              />
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
                text="Lanjut"
                class="mt-5 !rounded-xl"
                @click-handle="() => $store.checkout.setCurrentStep(2)"
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
  data() {
    return {
      ticketCount: 2,
    }
  }
}
</script>