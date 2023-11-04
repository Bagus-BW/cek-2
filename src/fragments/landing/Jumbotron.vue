<template>
  <div class="container relative flex flex-col items-center mt-[30px] mx-auto px-5 lg:px-20">
    <div class="relative">
      <div class="img-background-ovelay">
        <img
          src="https://images.unsplash.com/photo-1423245617392-005724ca6338?auto=format&fit=crop&q=80&w=3001&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="jumbotron"
          loading="lazy"
          class="aspect-[16/9] rounded-[20px]"
        > 
      </div>
      <div class="absolute left-[50%] top-20 md:top-36 lg:top-44 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center space-y-3 md:space-y-5 z-10">
        <p class="text-xs md:text-base font-light text-white">
          All you need is Trivenly
        </p>
        <h1 class="text-sm md:text-3xl lg:text-4xl font-extrabold text-white">
          Just enjoy it! We take care everything for your trip.
        </h1>
        <div class=" flex items-center justify-center">
          <div class="flex items-center gap-x-2 w-fit bg-[rgba(0,0,0,0.15)] p-2 rounded-full">
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.333008 6.37867C0.333008 3.31209 2.8956 0.833496 5.99531 0.833496C9.10375 0.833496 11.6663 3.31209 11.6663 6.37867C11.6663 7.92396 11.1043 9.35858 10.1793 10.5745C9.15888 11.9158 7.90111 13.0845 6.48537 14.0018C6.16135 14.2138 5.86892 14.2298 5.51331 14.0018C4.0895 13.0845 2.83173 11.9158 1.82001 10.5745C0.89433 9.35858 0.333008 7.92396 0.333008 6.37867ZM4.12916 6.55133C4.12916 7.57863 4.96745 8.38661 5.9953 8.38661C7.02384 8.38661 7.87019 7.57863 7.87019 6.55133C7.87019 5.53203 7.02384 4.68472 5.9953 4.68472C4.96745 4.68472 4.12916 5.53203 4.12916 6.55133Z"
                fill="white"
              />
            </svg>
            <span class="text-sm md:text-base text-white">Lake Bled, Slovenia</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Absolute placement filtering destination -->
    <MiscCardBase
      class="flex items-center w-[75%] absolute -bottom-[320px] md:-bottom-[220px] lg:-bottom-20 text-black shadow-xl z-10 px-10 md:px-[50px] py-10"
    >
      <div class="w-full grid grid-cols-12 gap-y-3 gap-x-[15px]">
        <div class="col-span-12 lg:col-span-4">
          <FormTextField 
            label="Choose your destination"
            placeholder="Where you want to go?"
          />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <FormTextField 
            label="Travel package type"
            placeholder="Kamu mau jalan kemana?"
          />
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <FormTextField 
            label="When you will go?"
            placeholder="Kamu mau jalan kemana?"
          />
        </div>
        <div class="col-span-12 lg:col-span-2">
          <MiscButton 
            text="Search"
            class="w-full mt-5 h-[45px] !rounded-xl"
          >
            <template #iconButtonPrepend>
              <SvgFinder />
            </template>
          </MiscButton>
        </div>
      </div>
    </MiscCardBase>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.img-background-ovelay::after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-image: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 90%);
  z-index: 1;
  border-radius: 20px;
}
</style>