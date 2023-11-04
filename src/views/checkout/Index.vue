<template>
  <div class="container mx-auto px-5 lg:px-20 mt-10 mb-20">
    <StepDetailOrder 
      class="ransition duration-300"
      :class="{
        'slide-left': getCurrentStep !== 1,
        'slide-right': getCurrentStep === 1
      }"
    />
    <StepPayment 
      class="ransition duration-300"
      :class="{
        'slide-left': getCurrentStep !== 2,
        'slide-right': getCurrentStep === 2
      }"
    />
    <StepTicket 
      class="ransition duration-300"
      :class="{
        'slide-left': getCurrentStep !== 3,
        'slide-right': getCurrentStep === 3
      }"
    />
  </div>
</template>

<script>
import StepDetailOrder from '@/fragments/checkout/Detail.vue'
import StepPayment from '@/fragments/checkout/Payment.vue'
import StepTicket from '@/fragments/checkout/Ticket.vue'

export default {
  components: {
    StepDetailOrder,
    StepPayment,
    StepTicket,
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