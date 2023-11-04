<template>
  <div class="container mx-auto my-[120px] px-5 lg:px-20">
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-7">
        <p class="text-sm">
          BINGUNG NIH...
        </p>
        <h1 class="text-4xl lg:text-6xl font-extrabold text-black !leading-tight">
          Mau jalan tapi ga tau kemana? coba tombol ajaib di bawah! 👇
        </h1>
      </div>
      <div class="col-span-12">
        <div class="flex flex-col md:flex-row gap-x-3 mt-[50px] gap-y-5">
          <MiscButton 
            text="Saya ditakdirkan jalan ke mana?"
            class="!rounded-2xl"
          >
            <template #iconButtonPrepend>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.50043 20.5C4.33043 21.33 5.67043 21.33 6.50043 20.5L19.5004 7.5C20.3304 6.67 20.3304 5.33 19.5004 4.5C18.6704 3.67 17.3304 3.67 16.5004 4.5L3.50043 17.5C2.67043 18.33 2.67043 19.67 3.50043 20.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0098 8.98999L15.0098 5.98999"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 2.44L10 2L9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56L18 16L18.44 14.5L18 13L19.5 13.44Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </MiscButton>
          <MiscButton 
            text="Explore marketplace"
            border-only
            class="!rounded-2xl"
          >
            <template #iconButtonAppend>
              <SvgArrow />
            </template>
          </MiscButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>