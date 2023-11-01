<template>
  <div class="container mx-auto px-10 lg:px-20 mt-10 mb-20">
    <StepDetailOrder v-if="getCurrentStep === 1" />
    <StepPayment v-if="getCurrentStep === 2" />
    <StepTicket v-if="getCurrentStep === getTotalStep" />
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