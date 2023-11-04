<template>
  <MiscCardBase class="relative h-full px-7 py-6">
    <div class="flex flex-col">
      <h1 class="text-[21px] font-bold text-black">
        Data Pemesan
      </h1>
      <p class="text-base text-[#7F7F7F]">
        Agar nanti proses pemesananmu lebih cepat dan simpel, kamu bisa mengelola hingga 5 profil pemesan loh!
      </p>
    </div>
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col gap-y-5 mt-10">
        <div class="bg-[#FAFAFA] border rounded-2xl p-4">
          <div class="flex flex-col">
            <h1 class="text-lg font-bold text-black">
              {{ travelers.main.name }} <span class="bg-[#E7E9FC] text-xs text-[#1127E3] rounded py-1 px-2 ml-2">Utama</span>
            </h1>
            <div class="flex flex-col md:flex-row gap-x-3">
              <div class="flex items-center gap-x-2">
                <img
                  src="/img/icons/mail.png"
                  alt="icon-phone"
                  loading="lazy"
                  class="w-4 h-4"
                >
                <p class="text-[#7F7F7F]">
                  {{ travelers.main.email }}
                </p>
              </div>
              <span class="hidden md:block text-2xl text-[#7F7F7F]">·</span>
              <div class="flex items-center gap-x-2">
                <img
                  src="/img/icons/phone.png"
                  alt="icon-phone"
                  loading="lazy"
                  class="w-4 h-4"
                >
                <p class="text-[#7F7F7F]">
                  {{ travelers.main.phone }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div 
          v-for="(traveler, idx) in travelers.secondary"
          :key="idx"
          class="bg-[#FAFAFA] border rounded-2xl p-4"
        >
          <div class="flex flex-col lg:flex-row lg:items-center justify-between">
            <div class="flex flex-col">
              <h1 class="text-lg font-bold text-black">
                {{ traveler.name }}
              </h1>
              <div class="flex flex-col md:flex-row gap-x-3">
                <div class="flex items-center gap-x-2">
                  <img
                    src="/img/icons/mail.png"
                    alt="icon-phone"
                    loading="lazy"
                    class="w-4 h-4"
                  >
                  <p class="text-[#7F7F7F]">
                    {{ traveler.email }}
                  </p>
                </div>
                <span class="hidden md:block text-2xl text-[#7F7F7F]">·</span>
                <div class="flex items-center gap-x-2">
                  <img
                    src="/img/icons/phone.png"
                    alt="icon-phone"
                    loading="lazy"
                    class="w-4 h-4"
                  >
                  <p class="text-[#7F7F7F]">
                    {{ traveler.phone }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-x-2 mt-3 lg:mt-0">
              <MiscButton
                text="Edit Profile"
                border-only
                class="h-10"
                @click-handle="handlerEditTraveler(idx)"
              />
              <MiscButton
                text="Hapus"
                background-color="#FF4014"
                border-only
                class="h-10"
                @click-handle="handlerDeleteTraveler(idx)"
              />
            </div>
          </div>
        </div>
      </div>
      <MiscButton 
        text="Tambah Profile"
        class="w-fit h-12 mb-28 md:mb-20 lg:mb-16"
        :class="{
          '!mt-10': alreadyFiveTraveler
        }"
        :disabled="alreadyFiveTraveler"
        @click-handle="handleCreateTraveler"
      />
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      travelers: {
        main: {
          name: 'Arthur Karcakhov',
          email: 'selviana@mail.com',
          phone: '+6212345678',
        },
        secondary: [
          {
            name: 'Arthur Karcakhov',
            email: 'selviana@mail.com',
            phone: '+6212345678',
          },
          {
            name: 'Arthur Karcakhov',
            email: 'selviana@mail.com',
            phone: '+6212345678',
          }
        ]
      }
    }
  },
  computed: {
    alreadyFiveTraveler() {
      return this.travelers.secondary.length + 1 >= 5
    }
  },
  methods: {
    handleCreateTraveler() {
      this.$router.push('/dashboard/traveler/create')
    },
    handlerEditTraveler(id) {
      this.$router.push(`/dashboard/traveler/edit/${id}`)
    },
    handlerDeleteTraveler(id) {
      this.travelers.secondary.splice(id, 1)
    }
  }
}
</script>