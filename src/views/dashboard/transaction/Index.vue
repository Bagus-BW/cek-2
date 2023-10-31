<template>
  <MiscCardBase class="h-full flex flex-col">
    <div class="flex flex-col lg:flex-row justify-between lg:items-center gap-y-3 lg:gap-y-0 px-7 py-6">
      <h1 class="text-[21px] font-bold text-black">
        Riwayat transaksi
      </h1>
      <div class="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-5">
        <div class="flex flex-col md:flex-row md:items-center gap-x-2">
          <label for="">Cari :</label>
          <FormTextField 
            placeholder="Cari transaksi kamu"
            input-class="h-10"
          />
        </div>
        <div class="flex flex-col md:flex-row md:items-center gap-x-2">
          <label for="">FIlter by :</label>
          <FormTextField 
            placeholder="Cari transaksi kamu"
            input-class="h-10"
          />
        </div>
      </div>
    </div>
    <div class="h-full">
      <div
        v-if="data.length"
        class="flex flex-col items-center -mt-7 p-7"
      >
        <div class="w-full border rounded-lg border-[#ECECEC] overflow-x-auto">
          <table class="min-w-full divide-y divide-[#ECECEC]">
            <thead>
              <tr class="text-left text-sm font-semibold text-black">
                <th class="px-6 py-3">
                  Produk
                </th>
                <th class="px-6 py-3">
                  Pembayaran
                </th>
                <th class="px-6 py-3">
                  Harga
                </th>
                <th class="px-6 py-3">
                  Tanggal
                </th>
                <th class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#ECECEC]">
              <tr class="text-sm text-black">
                <td class="px-6 py-4 w-[350px]">
                  <div class="flex items-center gap-x-2">
                    <img
                      src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
                      alt="thumbnail"
                      class="aspect-[3/2] w-[64px] h-[40px] rounded-md"
                    >
                    <div class="flex flex-col">
                      <h1 class="text-sm font-semibold text-black">Paket trip Pahawang 5D+4N</h1>
                      <div class="flex items-center gap-x-2 text-xs text-[#636363] -mt-1">
                        <p>Paket standard</p>
                        <span class="text-3xl">·</span>
                        <p>1 Tiket</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  Gopay
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Rp. 1.200.000
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Kamis <p>24 Sept 2023</p>
                </td>
                <td class="px-6 py-4 w-[150px]">
                  <div class="flex justify-center bg-[#FFF8E6] text-[#FEBC04] p-2 rounded-md">Dalam Proses</div>
                </td>
              </tr>
              <tr class="text-sm text-black">
                <td class="px-6 py-4 w-[350px]">
                  <div class="flex items-center gap-x-2">
                    <img
                      src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
                      alt="thumbnail"
                      class="aspect-[3/2] w-[64px] h-[40px] rounded-md"
                    >
                    <div class="flex flex-col">
                      <h1 class="text-sm font-semibold text-black">Paket trip Pahawang 5D+4N</h1>
                      <div class="flex items-center gap-x-2 text-xs text-[#636363] -mt-1">
                        <p>Paket standard</p>
                        <span class="text-3xl">·</span>
                        <p>1 Tiket</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  Gopay
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Rp. 1.200.000
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Kamis <p>24 Sept 2023</p>
                </td>
                <td class="px-6 py-4 w-[150px]">
                  <div class="flex justify-center bg-[#FFF8E6] text-[#FEBC04] p-2 rounded-md">Dalam Proses</div>
                </td>
              </tr>
              <tr class="text-sm text-black">
                <td class="px-6 py-4 w-[350px]">
                  <div class="flex items-center gap-x-2">
                    <img
                      src="https://media.istockphoto.com/id/1208002655/photo/beach-umbrella.webp?b=1&s=170667a&w=0&k=20&c=W7ENWEDuJQSE02bVzKS__14iCCjhjAi2UmMA5t3emmQ="
                      alt="thumbnail"
                      class="aspect-[3/2] w-[64px] h-[40px] rounded-md"
                    >
                    <div class="flex flex-col">
                      <h1 class="text-sm font-semibold text-black">Paket trip Pahawang 5D+4N</h1>
                      <div class="flex items-center gap-x-2 text-xs text-[#636363] -mt-1">
                        <p>Paket standard</p>
                        <span class="text-3xl">·</span>
                        <p>1 Tiket</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  Gopay
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Rp. 1.200.000
                </td>
                <td class="px-6 py-4 w-[130px]">
                  Kamis <p>24 Sept 2023</p>
                </td>
                <td class="px-6 py-4 w-[150px]">
                  <div class="flex justify-center bg-[#FFF8E6] text-[#FEBC04] p-2 rounded-md">Dalam Proses</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        v-else
        class="h-full flex flex-col justify-center items-center gap-y-5 p-7"
      >
        <div class="bg-[#ECECEC] p-2 rounded-full">
          <SvgNote />
        </div>
        <div class="w-[200px] flex flex-col text-center">
          <h1 class="text-base font-bold text-black">
            Riwayat transaksi
          </h1>
          <p class="text-sm text-[#7F7F7F]">
            Tidak ada riwayat transaksi
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
      data: [
        {
          name: 'helo'
        }
      ]
    }
  }
}
</script>