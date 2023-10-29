<template>
  <div class="mb-20">
    <SectionFilter />
    <SectionContent />
  </div>
</template>

<script>
import SectionFilter from '@/fragments/marketplace/Filter.vue'
import SectionContent from '@/fragments/marketplace/Content.vue'
export default {
  components: {
    SectionFilter,
    SectionContent
  }
}
</script>