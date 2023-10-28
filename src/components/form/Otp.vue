<template>
  <div
    class="flex justify-center gap-x-2"
    @input="handleOtpInput($event)"
  >
    <input
      v-for="idx in digitCount"
      :key="idx"
      ref="firstInputEl"
      v-model="digits[idx - 1]"
      type="text"
      placeholder="-"
      maxlength="1"
      class="border w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-lg text-center"
      @paste="idx === 1 && handlePaste($event)"
    >
  </div>
</template>
<script>
export default {
  props: {
    digitCount: {
      type: Number,
      default: 6
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      digits: []
    }
  },
  watch: {
    digits: {
      handler(newVal) {
        if (
          newVal != "" &&
          newVal.length === this.digitCount &&
          !newVal.includes("")
        ) {
          this.$emit("update:modelValue", Number(newVal.join("")));
        } else {
          this.$emit("update:modelValue", null);
        }
      },
      deep: true
    }
  },
  methods: {
    handleOtpInput(e) {
      if (e.data && e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      } else if (e.data == null && e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      }
    },
  }
}
</script>
<style>
    
</style>