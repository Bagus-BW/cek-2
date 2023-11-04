<template>
  <div
    v-if="!isMobile"
    class="grid grid-cols-12 gap-x-4 mt-5"
  >
    <div class="col-span-8">
      <img 
        :src="galleries[0]"
        alt="main-thumbnail"
        class="aspect-[3/2] object-cover rounded-[20px]"
      >
    </div>
    <div class="col-span-4">
      <div class="flex flex-col gap-y-4">
        <img
          :src="galleries[1]"
          alt="second-thumbnail"
          class="aspect-[3/2] object-cover rounded-[20px]"
        >
        <div 
          class="relative cursor-pointer"
          @click="showModal = !showModal"
        >
          <img
            :src="galleries[2]"
            alt="second-thumbnail"
            class="aspect-[3/2] object-cover rounded-[20px]"
          >
          <div class="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.4)] rounded-[20px]">
            <div class="h-full flex justify-center items-center text-white">
              +2 more
            </div>
          </div>
        </div>
      </div>
    </div>
    <MiscModal 
      v-model="showModal" 
      title=""
      :size="$store.root.isTablet ? 'medium' : 'normal'"
      btn-right-hide
      btn-left-hide
      center-position
    >
      <swiper-container
        ref="swiperEl"
        slides-per-view="1"
        space-between="20"
        navigation="true"
        pagination="true"
      >
        <swiper-slide
          v-for="(item, idx) in spliceGalleries"
          :key="idx"
          lazy="true"
        >
          <div class="flex justify-center items-center gap-x-3">
            <img
              :src="item"
              alt="thumbnail"
              class="aspect-[3/2] object-cover w-full rounded-2xl"
              loading="lazy"
            >
          </div>
        </swiper-slide>
      </swiper-container>
    </MiscModal>
  </div>
  <swiper-container
    v-else
    ref="swiperEl"
    slides-per-view="1"
    space-between="20"
    navigation="true"
    pagination="true"
  >
    <swiper-slide
      v-for="(item, idx) in galleries"
      :key="idx"
      lazy="true"
    >
      <MiscCardBase class="w-full p-2 md:p-4">
        <div class="flex justify-center items-center gap-x-3">
          <img
            :src="item"
            alt="thumbnail"
            class="aspect-[3/2] object-cover w-full rounded-2xl"
            loading="lazy"
          >
        </div>
      </MiscCardBase>
    </swiper-slide>
  </swiper-container>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      galleries: [
        'https://images.unsplash.com/photo-1594235195084-a14de3830b02?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxnaWxpJTIwdHJhd2FuZ2FufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1570971839591-9934cad91963?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1595323264810-3dd19b1be56f?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      spliceGalleries: [],
    }
  },
  computed: {
    isMobile() {
      return this.$store.root.isMobile
    },
  },
  mounted() {
    this.spliceGalleries = [...this.galleries]
    this.spliceGalleries.splice(0, 2)
  },
}
</script>
<style>
    
</style>