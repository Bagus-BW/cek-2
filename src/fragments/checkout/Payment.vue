<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-8 flex flex-col gap-y-5">
        <MiscCardBase class="py-10 px-8">
          <div class="flex flex-col gap-y-2">
            <h1 class="text-[21px] font-bold text-black">
              Metode pembayaran
            </h1>
            <p class="text-base text-[#7F7F7F]">
              Pilih metode pembayaran yang ingin kamu gunakan
            </p>
          </div>
        </MiscCardBase>
        
        <MiscCardBase class="py-10">
          <div class="px-8">
            <h1 class="text-[21px] font-bold text-black">
              Virtual account (transfer bank)
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/mandiri.png"
              alt="mandiri"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Mandiri Virtual Account
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/bni.png"
              alt="bni"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              BNI Virtual Account
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/bri.png"
              alt="bri"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              BRI Virtual Account
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/permata.png"
              alt="permata"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Permata Virtual Account
            </h1>
          </div>
        </MiscCardBase>

        <MiscCardBase class="py-10">
          <div class="px-8">
            <h1 class="text-[21px] font-bold text-black">
              Digital payment
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/gopay.png"
              alt="gopay"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Gopay
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/shoppe-pay.png"
              alt="shoppe-pay"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Shopee pay
            </h1>
          </div>
        </MiscCardBase>

        <MiscCardBase class="py-10">
          <div class="px-8">
            <h1 class="text-[21px] font-bold text-black">
              Kartu debit/credit
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/visa.png"
              alt="visa"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Visa
            </h1>
          </div>
          <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
          <div class="flex items-center gap-x-3 px-8">
            <img
              src="/img/logo/mastercard.png"
              alt="mastercard"
              class="w-[34px]"
            >
            <h1 class="text-base font-semibold text-black">
              Mastercard
            </h1>
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
              <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
              <div class="flex items-center gap-x-3">
                <FormTextField input-type="checkbox" />
                <p class="text-sm text-black">Saya setuju dengan <span class="text-[#1127E3]">Syarat & Ketentuan</span> yang berlaku di Trivenly.com. *</p>
              </div>
              <MiscButton
                text="Bayar"
                class="mt-5 !rounded-xl"
                @click-handle="() => $store.checkout.setCurrentStep(3)"
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