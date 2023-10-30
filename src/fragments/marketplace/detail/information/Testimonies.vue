<template>
  <div class="flex flex-col my-10">
    <h1 class="text-[21px] font-bold text-black">
      Travel agency
    </h1>
    <div class="grid grid-cols-12 gap-x-5 mt-3">
      <div class="col-span-12 lg:col-span-4">
        <div class="flex flex-col items-center border rounded-[20px] p-5">
          <img
            src="/img/logo/branding.png"
            alt="logo-provider"
            class="w-12"
          >
          <div class="flex flex-col items-center">
            <h1 class="text-base font-bold text-black">
              Trivus
            </h1>
            <p class="text-xs font-medium text-black">
              20 trip
            </p>
          </div>
          <div class="h-[0.5px] w-10/12 bg-[#ECECEC] my-5" />
          <div class="flex flex-col">
            <div class="flex items-center gap-x-2">
              <SvgStar
                :width="20"
                :height="20"
              />
              <div class="flex">
                <p class="text-3xl font-semibold text-black">
                  4.9
                  <span class="text-base font-semibold text-[#7F7F7F] -ml-2">/5.0</span>
                </p>
              </div>
            </div>
            <div class="flex items-center gap-x-2 text-xs font-medium text-[rgb(127,127,127)]">
              <p>521 rating</p>
              <span class="text-3xl">·</span>
              <p>198 ulasan</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-8 mt-3 lg:mt-0">
        <div class="flex flex-col">
          <div class="flex flex-col gap-y-2">
            <div
              v-for="idx in 5"
              :key="idx"
              class="flex items-center gap-x-2"
            >
              <SvgStar />
              <p class="text-sm text-[#636363]">
                {{ 6 - idx }}
              </p>
              <div class="relative h-3 w-full rounded-full bg-[#ECECEC]">
                <div 
                  class="h-3 absolute top-0 bg-[#18BA62] rounded-full"  
                  :style="{
                    width: ((6 - idx) * 20) + '%'
                  }"
                />
              </div>
              <p class="text-sm text-[#636363]">
                {{ ((6 - idx) * 20) }}
              </p>
            </div>
          </div>
          <div class="flex flex-col mt-5">
            <div class="flex justify-between items-center">
              <h1 class="text-base font-bold text-black">
                Ulasan
              </h1>
              <div class="flex items-center gap-x-2">
                <p class="text-sm text-black">
                  Urutkan
                </p>
                <select
                  name=""
                  class="w-[125px] text-xs text-left border rounded-lg py-1"
                >
                  <option value="">
                    Terbaru
                  </option>
                  <option value="">
                    Terlama
                  </option>
                </select>
              </div>
            </div>
            <div class="flex flex-col mt-3">
              <div class="flex flex-col">
                <div class="flex gap-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
                    alt="photo-profile"
                    class="w-10 h-10 object-cover object-top rounded-full"
                  >
                  <div class="flex flex-col">
                    <h1 class="text-sm font-semibold text-black">
                      Arthur Conan Doyle
                    </h1>
                    <div class="flex items-center gap-x-2 text-[#7F7F7F] -mt-2">
                      <p class="text-xs font-medium">
                        2 Oktober 2023
                      </p>
                      <span class="text-3xl">·</span>
                      <div class="flex items-center gap-x-1">
                        <SvgStar
                          v-for="idx in 5"
                          :key="idx"
                        />
                        <p class="text-xs">
                          5 stars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-[#7F7F7F] text-justify">
                  Trivenly makes it easy for me to go on vacation with my family. It's very easy to use, this is what makes me like it more than others. What a good experience! I think i will use it again for my next vacation. Thx!
                </p>
                <div class="grid grid-cols-3 gap-x-2 mt-2">
                  <img
                    src="https://images.unsplash.com/photo-1624945309608-a69c2c19b951?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D"
                    alt="review-image"
                    class="col-span-1 aspect-[3/2] object-cover rounded-lg"
                  >
                  <img
                    src="https://images.unsplash.com/photo-1624945309608-a69c2c19b951?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D"
                    alt="review-image"
                    class="col-span-1 aspect-[3/2] object-cover rounded-lg"
                  >
                  <div class="relative cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1624945309608-a69c2c19b951?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D"
                      alt="review-image"
                      class="col-span-1 aspect-[3/2] object-cover rounded-lg"
                    >
                    <div class="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.4)] rounded-lg">
                      <div class="h-full flex justify-center items-center text-white">
                        +2 more
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
              </div>
              <div class="flex flex-col">
                <div class="flex gap-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
                    alt="photo-profile"
                    class="w-10 h-10 object-cover object-top rounded-full"
                  >
                  <div class="flex flex-col">
                    <h1 class="text-sm font-semibold text-black">
                      Arthur Conan Doyle
                    </h1>
                    <div class="flex items-center gap-x-2 text-[#7F7F7F] -mt-2">
                      <p class="text-xs font-medium">
                        2 Oktober 2023
                      </p>
                      <span class="text-3xl">·</span>
                      <div class="flex items-center gap-x-1">
                        <SvgStar
                          v-for="idx in 5"
                          :key="idx"
                        />
                        <p class="text-xs">
                          5 stars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-[#7F7F7F] text-justify">
                  Trivenly makes it easy for me to go on vacation with my family. It's very easy to use, this is what makes me like it more than others. What a good experience! I think i will use it again for my next vacation. Thx!
                </p>
                <div class="h-[0.5px] w-full bg-[#ECECEC] my-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>