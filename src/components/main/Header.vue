<template>
  <div class="sticky top-0 bg-white py-6 shadow z-40">
    <div class="relative container flex justify-between items-center mx-auto px-10 lg:px-20">
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
      <!-- logo -->
      <img
        src="/img/logo/trivenly.png"
        alt="logo"
        class="w-[138px]"
      >

      <!-- Menu -->
      <ul class="hidden md:flex gap-x-5">
        <li>
          <a href="">Marketplace</a>
        </li>
        <li>
          <a href="">Discover</a>
        </li>
        <li>
          <a href="">Travel agency</a>
        </li>
        <li>
          <a href="">Pick for me</a>
        </li>
      </ul>

      <!-- Another Menu -->
      <button 
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
      <MainMenuDropDown v-if="showMenuDropDown" />
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
}
</script>
<style>
    
</style>