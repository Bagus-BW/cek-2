<template>
  <div class="h-[calc(100vh-239.5px)]">
    <div class="h-full flex justify-center items-center">
      <MiscCardBase class="w-[90%] md:w-[50%] lg:w-[25%] p-8">
        <!-- Header -->
        <div class="flex flex-col items-center mb-10">
          <h1 class="text-black text-[27px] font-bold">
            Kode verifikasi
          </h1>
          <p class="text-base text-[#636363] text-center">
            Kami telah mengirimkan kode OTP untuk verifikasi ke nomor  +621231231232
          </p>
        </div>
        <!-- Form -->
        <div class="flex flex-col gap-y-3">
          <!-- OTP Input -->
          <FormOtp 
            v-model="otp"
            :digit-count="6" 
          />
          <!-- Resend Button -->
          <MiscButton
            text="Kirim ulang"
            class="w-full !rounded-xl"
          />
        </div>
      </MiscCardBase>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      otp: null
    }
  }
}
</script>
<style>
    
</style>