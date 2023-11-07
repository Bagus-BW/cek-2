<template>
  <div class="absolute top-16 right-10 lg:right-28 w-[250px] border bg-white rounded-[20px]">
    <div class="flex flex-col">
      <routerLink
        to="/register"
        class="px-6 py-3 cursor-pointer dynamic-hover rounded-t-[20px]"
      >
        Daftar
      </routerLink>
      <routerLink
        to="/login"
        class="px-6 py-3 cursor-pointer dynamic-hover"
      >
        Masuk
      </routerLink>
    </div>
    <div class="flex justify-center mt-5 mb-4">
      <div class="h-1 w-[80%] border-t" />
    </div>
    <routerLink
      to="/dashboard/my-tickets"
      class="flex gap-x-3 px-6 py-4 dynamic-hover rounded-b-[20px]"
      @mouseover="focus = true"
      @mouseleave="focus = false"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.51699 2.36664L3.02533 5.86664C2.27533 6.44997 1.66699 7.69164 1.66699 8.63331V14.8083C1.66699 16.7416 3.24199 18.325 5.17533 18.325H14.8253C16.7587 18.325 18.3337 16.7416 18.3337 14.8166V8.74997C18.3337 7.74164 17.6587 6.44997 16.8337 5.87497L11.6837 2.26664C10.517 1.44997 8.64199 1.49164 7.51699 2.36664Z"
          :stroke="focus ? '#FFFFFF' : '#121212'"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 14.9917V12.4917"
          :stroke="focus ? '#FFFFFF' : '#121212'"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Dashboard Travel Agency</span>
    </routerLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focus: false
    }
  },
}
</script>
<style lang="postcss" scoped>
  .dynamic-hover{
    @apply transition duration-300 ease-in-out;
  }
  .dynamic-hover:hover{
    background-color: #1127E3;
    color: #FFFFFF;
  }
</style>