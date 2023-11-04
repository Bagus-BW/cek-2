<template>
  <div class="container mx-auto px-5 lg:px-20 mt-10">
    <!-- Breadcrumb -->
    <div class="flex">
      <p class="text-base text-[#636363]">Marketpalce</p>
      <span>/</span>
      <p class="text-base font-semibold text-[#636363]">Detail</p>
    </div>
    
    <SectionGallery />
    
    <SectionInformation />

    <SectionOther />

    <SectionRecomended />
  </div>
</template>

<script>
import SectionGallery from '@/fragments/marketplace/detail/Gallery.vue'
import SectionInformation from '@/fragments/marketplace/detail/Information.vue'
import SectionOther from '@/fragments/marketplace/detail/Other.vue'
import SectionRecomended from '@/fragments/marketplace/detail/Recomended.vue'

export default {
  components: {
    SectionGallery,
    SectionInformation,
    SectionOther,
    SectionRecomended
  }
}
</script>