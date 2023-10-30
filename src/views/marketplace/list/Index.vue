<template>
  <div class="mb-20">
    <SectionFilter />
    <SectionContent />
  </div>
</template>

<script>
import SectionFilter from '@/fragments/marketplace/list/Filter.vue'
import SectionContent from '@/fragments/marketplace/list/Content.vue'
export default {
  components: {
    SectionFilter,
    SectionContent
  }
}
</script>