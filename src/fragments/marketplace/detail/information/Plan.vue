<template>
  <div class="flex flex-col mt-10">
    <h1 class="text-[21px] font-bold text-black">
      Rencana perjalanan / Itinerary
    </h1>
    <div class="flex flex-col">
      <div class="flex border-b">
        <button
          v-for="idx in data.length"
          :key="idx"
          class="relative text-base font-semibold p-3"
          :class="{
            'active-tab': activeIndex === idx - 1
          }"
          @click="activeIndex = idx - 1"
        >
          Day {{ idx }}
        </button>
      </div>
      <div class="flex flex-col mt-5">
        <h1 class="text-[21px] font-bold text-black">
          Day {{ activeIndex + 1 }} - {{ data[activeIndex].title }}
        </h1>
        <div class="flex flex-col mt-3">
          <div
            v-for="(item, idx) in data[activeIndex].plan"
            :key="idx"
            class="flex flex-col"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-x-3">
              <div class="w-fit bg-[#1127E3] px-3 py-2 rounded-full">
                <p class="text-xs text-white">
                  {{ item.title }}
                </p>
              </div>
              <p class="text-base">
                {{ item.description }}
              </p>
            </div>
            <div
              v-if="data[activeIndex].plan.length !== idx + 1"
              class="my-3"
            >
              <svg
                width="32"
                height="40"
                viewBox="0 0 32 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 6C16.5 5.72386 16.2761 5.5 16 5.5C15.7239 5.5 15.5 5.72386 15.5 6H16.5ZM15.6464 34.3536C15.8417 34.5488 16.1583 34.5488 16.3536 34.3536L19.5355 31.1716C19.7308 30.9763 19.7308 30.6597 19.5355 30.4645C19.3403 30.2692 19.0237 30.2692 18.8284 30.4645L16 33.2929L13.1716 30.4645C12.9763 30.2692 12.6597 30.2692 12.4645 30.4645C12.2692 30.6597 12.2692 30.9763 12.4645 31.1716L15.6464 34.3536ZM15.5 6.51852C15.5 6.79466 15.7239 7.01852 16 7.01852C16.2761 7.01852 16.5 6.79466 16.5 6.51852H15.5ZM16.5 8.59259C16.5 8.31645 16.2761 8.09259 16 8.09259C15.7239 8.09259 15.5 8.31645 15.5 8.59259H16.5ZM15.5 9.62963C15.5 9.90577 15.7239 10.1296 16 10.1296C16.2761 10.1296 16.5 9.90577 16.5 9.62963H15.5ZM16.5 11.7037C16.5 11.4276 16.2761 11.2037 16 11.2037C15.7239 11.2037 15.5 11.4276 15.5 11.7037H16.5ZM15.5 12.7407C15.5 13.0169 15.7239 13.2407 16 13.2407C16.2761 13.2407 16.5 13.0169 16.5 12.7407H15.5ZM16.5 14.8148C16.5 14.5387 16.2761 14.3148 16 14.3148C15.7239 14.3148 15.5 14.5387 15.5 14.8148H16.5ZM15.5 15.8519C15.5 16.128 15.7239 16.3519 16 16.3519C16.2761 16.3519 16.5 16.128 16.5 15.8519H15.5ZM16.5 17.9259C16.5 17.6498 16.2761 17.4259 16 17.4259C15.7239 17.4259 15.5 17.6498 15.5 17.9259H16.5ZM15.5 18.963C15.5 19.2391 15.7239 19.463 16 19.463C16.2761 19.463 16.5 19.2391 16.5 18.963H15.5ZM16.5 21.037C16.5 20.7609 16.2761 20.537 16 20.537C15.7239 20.537 15.5 20.7609 15.5 21.037H16.5ZM15.5 22.0741C15.5 22.3502 15.7239 22.5741 16 22.5741C16.2761 22.5741 16.5 22.3502 16.5 22.0741H15.5ZM16.5 24.1481C16.5 23.872 16.2761 23.6481 16 23.6481C15.7239 23.6481 15.5 23.872 15.5 24.1481H16.5ZM15.5 25.1852C15.5 25.4613 15.7239 25.6852 16 25.6852C16.2761 25.6852 16.5 25.4613 16.5 25.1852H15.5ZM16.5 27.2593C16.5 26.9831 16.2761 26.7593 16 26.7593C15.7239 26.7593 15.5 26.9831 15.5 27.2593H16.5ZM15.5 28.2963C15.5 28.5724 15.7239 28.7963 16 28.7963C16.2761 28.7963 16.5 28.5724 16.5 28.2963H15.5ZM16.5 30.3704C16.5 30.0942 16.2761 29.8704 16 29.8704C15.7239 29.8704 15.5 30.0942 15.5 30.3704H16.5ZM15.5 31.4074C15.5 31.6835 15.7239 31.9074 16 31.9074C16.2761 31.9074 16.5 31.6835 16.5 31.4074H15.5ZM16.5 33.4815C16.5 33.2053 16.2761 32.9815 16 32.9815C15.7239 32.9815 15.5 33.2053 15.5 33.4815H16.5ZM15.5 6V6.51852H16.5V6H15.5ZM15.5 8.59259V9.62963H16.5V8.59259H15.5ZM15.5 11.7037V12.7407H16.5V11.7037H15.5ZM15.5 14.8148V15.8519H16.5V14.8148H15.5ZM15.5 17.9259V18.963H16.5V17.9259H15.5ZM15.5 21.037V22.0741H16.5V21.037H15.5ZM15.5 24.1481V25.1852H16.5V24.1481H15.5ZM15.5 27.2593V28.2963H16.5V27.2593H15.5ZM15.5 30.3704V31.4074H16.5V30.3704H15.5ZM15.5 33.4815V34H16.5V33.4815H15.5Z"
                  fill="#1127E3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      data: [
        {
          title: 'Sasak Tour',
          plan: [
            {
            title: 'Penjemputan di bandara',
            description: 'Setelah sampai di NTB, teman-teman bakal dijempu di bandara',
            },
            {
              title: 'Desa Adat Sukarare',
              description: 'Melakukan perjalanan ke desa adat sukarare',
            },
            {
              title: 'Desa Adat Sade',
              description: 'Lanjut ke desa adat sade',
            },
            {
              title: 'Pantai Kuta',
              description: 'Setelah melihat adat dan budaya, kita enjoy di pantai kuta',
            },
            {
              title: 'Bukit Merese(Optional 1)',
              description: 'Optional perjalanan Bukit Merese',
            },
            {
              title: 'Pantai Tanjung Aan (Optional 1)',
              description: 'Optional pergi ke pantai tanjung aan',
            },
            {
              title: 'Pantai Mawun (Optional 2)',
              description: 'Optional Jalan ke Pantai Mawun',
            },
            {
              title: 'Pantai Selong Belanak (Optional 2)',
              description: 'optional jalan ke pantai selong belanak',
            },
          ]
        },
        {
          title: 'Sasak Tour',
          plan: [
            {
            title: 'Penjemputan di bandara',
            description: 'Setelah sampai di NTB, teman-teman bakal dijempu di bandara',
            },
            {
              title: 'Desa Adat Sukarare',
              description: 'Melakukan perjalanan ke desa adat sukarare',
            },
          ]
        },
      ]
    }
  }
}
</script>
<style>
.active-tab{
  color: #1127E3;
}
.active-tab:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #1127E3;
}
</style>