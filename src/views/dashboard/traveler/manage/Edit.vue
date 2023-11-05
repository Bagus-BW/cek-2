<template>
  <MiscCardBase class="relative h-full px-7 py-6">
    <div class="flex items-center gap-x-3">
      <button
        class="flex bg-[#FAFAFA] py-2 px-3 rounded-full"
        @click="$router.go(-1)"
      >
        <div class="flex items-center gap-2">
          <span class="rotate-180 bg-[#ECECEC] p-2 rounded-full">
            <SvgArrow color="#636363" />
          </span>
          <p>Back</p>
        </div>
      </button>
      <h1 class="text-[21px] font-bold text-black">
        Ubah Profil Pemesan
      </h1>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center mt-10">
        <p class="font-bold text-black w-[120px]">
          Detail Profile
        </p>
        <div class="h-[0.5px] w-full bg-[#ECECEC]" />
      </div>
      <div class="flex flex-col gap-y-3 mt-3">
        <FormTextField 
          v-model="form.name"
          required
          label="Nama Lengkap"
          placeholder="Ex. John Doe"
          class="w-full"
        />
        <FormTextField 
          v-model="form.dateOfBirth"
          input-type="date"
          required
          label="Tanggal Lahir"
          placeholder="Ex. John Doe"
          class="w-full"
        />
        <FormTextField 
          v-model="form.dateOfBirth"
          input-type="number"
          required
          label="Nomor Identitas"
          placeholder="Ex. 123*** (16 digit)"
          class="w-full"
        />
      </div>
      <div class="flex items-center mt-10">
        <p class="font-bold text-black w-[155px]">
          Detail Tambahan
        </p>
        <div class="h-[0.5px] w-full bg-[#ECECEC]" />
      </div>
      <div class="flex flex-col gap-y-3 mt-2">
        <FormPhoneField 
          v-model="dialPhone"
          label="Nomor handphone"
        />
        <FormTextField 
          v-model="form.email"
          required
          label="Email"
          placeholder="Ex : john@mail.com"
          class="w-full"
        />
      </div>
      <MiscButton 
        text="Simpan"
        class="w-fit h-12 mt-20"
      />
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      dialPhone: {
        code: '+62',
        number: '',
      },
      form: {
        name: '',
        dateOfBirth: '',
        identityNumber: '',
        phone: '',
        email: '',
      }
    }
  }
}
</script>