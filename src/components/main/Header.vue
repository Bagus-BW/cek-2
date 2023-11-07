<template>
  <div class="sticky top-0 bg-white py-6 shadow z-40">
    <div class="relative container flex justify-between items-center mx-auto px-5 lg:px-20">
      <button
        class="md:hidden"
        @click="showMenuMobile = !showMenuMobile"
      >
        <img
          src="/img/icons/hamburger.png"
          alt="icon-user"
          loading="lazy"
          class="w-5"
        >
      </button>
      <div class="flex items-center gap-x-5">
        <!-- Back Button -->
        <button
          v-if="$route.name === 'checkout'"
          class="flex bg-[#FAFAFA] py-2 px-3 rounded-full"
          @click="getCurrentStep === 1 ? $router.go(-1) : $store.checkout.setCurrentStep(getCurrentStep - 1)"
        >
          <div class="flex items-center gap-2">
            <span class="rotate-180 bg-[#ECECEC] p-2 rounded-full">
              <SvgArrow color="#636363" />
            </span>
            <p>Back</p>
          </div>
        </button>
        <!-- logo -->
        <router-link to="/">
          <img
            src="/img/logo/trivenly.png"
            alt="logo"
            class="w-[138px]"
          >
        </router-link>
      </div>

      <!-- Menu -->
      <ul
        v-if="$route.name !== 'checkout'"
        class="hidden md:flex gap-x-5"
      >
        <li>
          <routerLink
            to="/marketplace"
            class="hover:text-[#1127E3]"
          >
            Marketplace
          </routerLink>
        </li>
        <li>
          <routerLink
            to="/"
            class="hover:text-[#1127E3]"
          >
            Discover
          </routerLink>
        </li>
        <li>
          <routerLink
            to="/"
            class="hover:text-[#1127E3]"
          >
            Travel agency
          </routerLink>
        </li>
        <li>
          <routerLink
            to="/"
            class="hover:text-[#1127E3]"
          >
            Pick for me
          </routerLink>
        </li>
      </ul>

      <!-- Form Step -->
      <div
        v-if="$route.name === 'checkout'"
        class="flex items-center gap-x-3"
      >
        <div class="flex items-center gap-x-2">
          <p 
            class="flex items-center justify-center text-sm rounded-full w-9 h-9"
            :class="{
              'text-[#1127E3] border border-[#1127E3]': getCurrentStep === 1,
              'bg-[#1127E3]': getCurrentStep > 1
            }"
          >
            <span v-if="getCurrentStep === 1">1</span>
            <span v-else><SvgCheck /></span> 
          </p>
          <p class="text-sm text-[#1127E3]">
            Detail
          </p>
        </div>
        <div 
          class="h-[0.5px] w-[50px]" 
          :class="{
            'bg-[#ECECEC]': getCurrentStep === 1,
            'bg-[#1127E3]': getCurrentStep > 1
          }"
        />
        <div class="flex items-center gap-x-2">
          <p 
            class="flex items-center justify-center text-sm rounded-full w-9 h-9"
            :class="{
              'text-[#7F7F7F] bg-[#ECECEC]': getCurrentStep < 2,
              'text-[#1127E3] border border-[#1127E3]': getCurrentStep === 2,
              'bg-[#1127E3]': getCurrentStep > 2
            }"
          >
            <span v-if="getCurrentStep < 2 || getCurrentStep === 2">2</span>
            <span v-else><SvgCheck /></span>
          </p>
          <p class="text-sm text-[#7F7F7F]">
            Pembayaran
          </p>
        </div>
        <div 
          class="h-[0.5px] w-[50px]" 
          :class="{
            'bg-[#ECECEC]': getCurrentStep === 2,
            'bg-[#1127E3]': getCurrentStep > 2
          }"
        />
        <div class="flex items-center gap-x-2">
          <p 
            class="flex items-center justify-center text-sm rounded-full w-9 h-9"
            :class="{
              'text-[#7F7F7F] bg-[#ECECEC]': getCurrentStep < 3,
              'text-[#1127E3] border border-[#1127E3]': getCurrentStep === getTotalStep,
            }"
          >
            3
          </p>
          <p class="text-sm text-[#7F7F7F]">
            Tiket
          </p>
        </div>
      </div>

      <!-- Dropdown Menu -->
      <button 
        v-if="$route.name !== 'checkout'"
        v-click-outside="() => showMenuDropDown = false"
        class="flex items-center border gap-x-3 rounded-full px-3 py-2"
        @click="showMenuDropDown = !showMenuDropDown"
      >
        <div class="flex bg-[#F6F6F6] p-[6px] rounded-full">
          <img
            src="/img/icons/user.png"
            alt="icon-user"
            loading="lazy"
            class="w-5"
          >
        </div>
        <img
          src="/img/icons/hamburger.png"
          alt="icon-user"
          loading="lazy"
          class="w-5"
        >
      </button>
      <MainMenuDropDown 
        :class="{
          'slideZoomOut': !showMenuDropDown,
          'slideZoomIn': showMenuDropDown
        }"
      />
    </div>
  </div>
  <MainMenuMobile v-if="showMenuMobile" />
</template>
<script>

export default {
  data() {
    return {
      showMenuDropDown: false,

      showMenuMobile: false
    }
  },
  computed: {
    getCurrentStep() {
      return this.$store.checkout.getCurrentStep
    },
    getTotalStep() {
      return this.$store.checkout.getTotalStep
    }
  }
}
</script>
<style>
    
</style>