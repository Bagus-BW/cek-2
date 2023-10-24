<template>
  <div class="flex flex-col justify-center">
    <!-- Section Jumbotron -->
    <SectionJumbotron />

    <!-- Section Category -->
    <SectionCategory />

    <!-- Section Recomended Open Trip -->
    <SectionRecomendedOpenTrip />

    <!-- Section Recomended Hype -->
    <SectionRecomendedHype />

    <!-- Section Recomended Private Trip -->
    <SectionRecomendedPrivateTrip />

    <!-- Section Insight -->
    <SectionInsight />

    <!-- Section Testimonies -->
    <SectionTestimonies />

    <!-- Section Suggest -->
    <SectionSuggest />
  </div>
</template>
<script>
import SectionJumbotron from '@/fragments/landing/Jumbotron.vue';
import SectionCategory from '@/fragments/landing/Category.vue';
import SectionRecomendedOpenTrip from '@/fragments/landing/recomended/OpenTrip.vue';
import SectionRecomendedHype from '@/fragments/landing/recomended/Hype.vue';
import SectionRecomendedPrivateTrip from '@/fragments/landing/recomended/PrivateTrip.vue';
import SectionInsight from '@/fragments/landing/Insight.vue';
import SectionTestimonies from '@/fragments/landing/Testimonies.vue';
import SectionSuggest from '@/fragments/landing/Suggest.vue';

export default {
  name: 'Landing',
  components: {
    SectionJumbotron,
    SectionCategory,
    SectionRecomendedOpenTrip,
    SectionRecomendedHype,
    SectionRecomendedPrivateTrip,
    SectionInsight,
    SectionTestimonies,
    SectionSuggest
  }
}
</script>
