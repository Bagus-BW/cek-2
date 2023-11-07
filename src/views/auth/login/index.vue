<template>
  <div class="min-h-[calc(100vh-239.5px)] my-10">
    <div class="h-full flex justify-center items-center">
      <MiscCardBase class="w-[90%] md:w-[50%] lg:w-[25%] p-8">
        <!-- Header -->
        <div class="flex flex-col items-center mb-10">
          <h1 class="text-black text-[27px] font-bold">
            Masuk
          </h1>
          <p>
            Belum punya akun? <router-link
              to="/register"
              class="text-base text-[#1127E3]"
            >
              Daftar
            </router-link>
          </p>
        </div>
        <!-- Action Button -->
        <div class="flex flex-col gap-y-3">
          <!-- Google Button -->
          <MiscButtonSSO
            text="Google"
            icon-url="/img/icons/google.png"
            class="w-full !rounded-xl"
          >
            <template #iconButtonPrepend>
              <SvgFinder />
            </template>
          </MiscButtonSSO>
  
          <!-- Facebook Button -->
          <MiscButtonSSO
            text="Facebook"
            icon-url="/img/icons/facebook.png"
            class="w-full !rounded-xl"
          >
            <template #iconButtonPrepend>
              <SvgFinder />
            </template>
          </MiscButtonSSO>

          <!-- Email Button -->
          <MiscButtonSSO
            v-if="loginType === 'phone'"
            text="Email"
            icon-url="/img/icons/mail.png"
            class="w-full !rounded-xl"
            @click="handleChangeLoginType('email')"
          >
            <template #iconButtonPrepend>
              <SvgFinder />
            </template>
          </MiscButtonSSO>

          <!-- Phone Button -->
          <MiscButtonSSO
            v-if="loginType === 'email'"
            text="Nomor Hp"
            icon-url="/img/icons/phone.png"
            class="w-full !rounded-xl"
            @click="handleChangeLoginType('phone')"
          >
            <template #iconButtonPrepend>
              <SvgFinder />
            </template>
          </MiscButtonSSO>
        </div>

        <!-- Divider -->
        <div class="flex justify-center items-center gap-x-3 text-[#B6B6B6] my-10">
          <div class="flex-1 h-[0.5px] bg-[#B6B6B6]" />
          <span class="w-fit">atau masuk dengan</span>
          <div class="flex-1 h-[0.5px] bg-[#B6B6B6]" />
        </div>

        <!-- Form -->
        <div class="flex flex-col items-center">
          <VeeForm
            v-slot="{ meta, errors }"
            :validation-schema="scheme"
            class="w-full flex flex-col items-center"
          >
            <div class="flex flex-col gap-y-2">
              <div 
                v-if="loginType === 'phone'"
                class="w-full flex"
              >
                <VeeField
                  v-slot="{ field }"
                  name="phone"
                >
                  <FormPhoneField 
                    v-bind="field"
                    v-model="dialPhone"
                    label="Nomor handphone"
                    placeholder="Ex. 8219123123"
                    :error="errors.phone"
                  />
                </VeeField>
              </div>

              <VeeField
                v-slot="{ field }"
                name="email"
              >
                <FormTextField 
                  v-if="loginType === 'email'"
                  v-bind="field"
                  v-model="form.email"
                  label="Email"
                  placeholder="Ex. jhon@gmail.com"
                  class="w-full"
                  :error="errors.email" 
                />
              </VeeField>
              <p class="text-xs text-[#636363]">
                Kami akan mengirimkan kode OTP ke nomor yang kamu cantumkan sebagai upaya untuk konfirmasi dan keamanan. Jadi pastiin nomornya aktif ya.
              </p>
            </div>
            <MiscButton 
              text="Masuk"
              class="w-full mt-5 h-[45px] !rounded-xl"
              :disabled="!meta.valid"
              @click-handle="() => $router.push('/verification')"
            />
          </VeeForm>
          <p class="text-sm text-[#636363] text-center mt-5">
            Ada masalah saat masuk?
          </p>
        </div>
      </MiscCardBase>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginType: 'phone',
      dialPhone: {
        code: '+62',
        number: ''
      },
      form: {
        phone: '',
        email: ''
      },
      scheme: {
        phone: 'required',
        email: ''
      }
    }
  },
  watch: {
    dialPhone: {
      handler(val) {
        this.form.phone = val.code.split('+')[1] + val.number
      },
      deep: true
    }
  },
  methods: {
    handleChangeLoginType(type) {
      if(type === 'phone') {
        this.loginType = type
        this.scheme = {
          phone: 'required',
          email: ''
        }
      } else {
        this.loginType = type
        this.scheme = {
          phone: '',
          email: 'required|email'
        }
      }

      // Reset form
      this.dialPhone = {
        code: '+62',
        number: ''
      }
      
      this.form = {
        phone: '',
        email: ''
      }
    },
  }
}
</script>
<style>
    
</style>