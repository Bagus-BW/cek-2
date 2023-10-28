<template>
  <button class="flex items-center bg-white border-2 gap-x-4 px-5 py-3">
    <img
      :src="iconUrl"
      alt="icon"
      class="w-6"
    >
    <span class="w-full flex justify-center gap-x-2 text-base text-[#636363] font-bold">
      {{ text }}
    </span>
  </button>
</template>
    
<script>
  export default {
    props: {
      text: {
        type: String,
        default () {
          return ''
        }
      },
      iconUrl: {
        type: String,
        default () {
          return ''
        }
      },
    },
  };
</script>
    