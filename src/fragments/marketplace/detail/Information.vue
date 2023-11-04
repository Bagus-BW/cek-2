<template>
  <div class="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5 mt-5">
    <div class="col-span-12 lg:col-span-8 order-2 lg:order-1">
      <MiscCardBase class="!rounded-[20px]">
        <div class="flex flex-col">
          <div class="flex justify-between gap-x-5 md:gap-x-0 p-10">
            <h1 class="text-xl md:text-3xl font-bold text-black">
              Paket trip Pahawang 5D+4N
            </h1>
            <div class="flex flex-col md:flex-row justify-center items-center">
              <img
                src="/img/logo/branding.png"
                alt="provider"
                class="w-10"
              >
              <div class="flex flex-col md:flex-row items-center gap-x-2">
                <p class=" text-base font-medium md:ml-2">
                  Trivus
                </p>
                <span class="hidden md:block text-4xl">·</span>
                <div class="flex items-center gap-x-1">
                  <SvgStar />
                  <p class="text-base font-light">
                    4.5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="border-t border-b">
            <div class="flex flex-wrap gap-5 px-10 py-4">
              <p class="text-base font-medium text-[#494949]">
                Detail
              </p>
              <p class="text-base font-medium text-[#494949]">
                Include
              </p>
              <p class="text-base font-medium text-[#494949]">
                Exclude
              </p>
              <p class="text-base font-medium text-[#494949]">
                Rencana Perjalanan
              </p>
              <p class="text-base font-medium text-[#494949]">
                Travel Agency
              </p>
            </div>
          </div>
          <div class="px-10">
            <SectionInformationDetail />
          </div>
          <div class="px-10">
            <SectionInformationInclude />
          </div>
          <div class="px-10">
            <SectionInformationExclude />
          </div>
          <div class="px-10">
            <SectionInformationPlan />
          </div>
          <div class="px-10">
            <SectionInformationTestimonies />
          </div>
        </div>
      </MiscCardBase>
    </div>
    <div class="col-span-12 lg:col-span-4 order-1 lg:order-2">
      <SectionInformationPackage />
    </div>
  </div>
</template>

<script>
import SectionInformationDetail from '@/fragments/marketplace/detail/information/Detail.vue'
import SectionInformationInclude from '@/fragments/marketplace/detail/information/Include.vue'
import SectionInformationExclude from '@/fragments/marketplace/detail/information/Exclude.vue'
import SectionInformationPlan from '@/fragments/marketplace/detail/information/Plan.vue'
import SectionInformationPackage from '@/fragments/marketplace/detail/information/Package.vue'
import SectionInformationTestimonies from '@/fragments/marketplace/detail/information/Testimonies.vue'

export default {
  components: {
    SectionInformationDetail,
    SectionInformationInclude,
    SectionInformationExclude,
    SectionInformationPlan,
    SectionInformationTestimonies,
    SectionInformationPackage
  }
}
</script>
<style>
    
</style>