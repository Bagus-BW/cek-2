<template>
  <div class="container mx-auto px-10 lg:px-28 mt-10 mb-20">
    <StepDetailOrder />
    <!-- <StepPayment /> -->
    <!-- <StepTicket /> -->
  </div>
</template>

<script>
import StepDetailOrder from '@/fragments/checkout/Detail.vue'
// import StepPayment from '@/fragments/checkout/Payment.vue'
// import StepTicket from '@/fragments/checkout/Ticket.vue'

export default {
  components: {
    StepDetailOrder,
    // StepPayment,
    // StepTicket,
  }   
}
</script>