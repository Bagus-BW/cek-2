<template>
  <MiscCardBase class="relative h-full px-7 py-6">
    <div class="flex flex-col">
      <h1 class="text-[21px] font-bold text-black">
        Informasi Akun
      </h1>
    </div>
    <div class="flex flex-col mt-8">
      <div class="flex flex-col md:flex-row items-center gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="photo-profile"
          loading="lazy"
          class="w-20 h-20 object-cover object-top rounded-full"
        >
        <div
          v-if="edited"
          class="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3 mt-3 md:mt-0"
        >
          <MiscButton
            text="Upload Foto Baru"
            border-only
            class="w-full md:w-fit h-10"
          />
          <MiscButton
            text="Hapus"
            background-color="#FF4014"
            background-color-rgb="255, 64, 20"
            border-only
            class="w-full md:w-fit h-10"
          />
        </div>
      </div>
      <div class="flex flex-col gap-y-3 mt-5">
        <FormTextField 
          v-model="form.fullName"
          required
          label="Nama Lengkap"
          placeholder="Ex : john@mail.com"
          :disabled="!edited"
          class="w-full"
        />
        <FormTextField 
          v-model="form.fullName"
          input-type="date"
          required
          label="Tanggal Lahir"
          :disabled="!edited"
          class="w-full"
        /> 
        <FormTextField 
          v-model="form.fullName"
          input-type="number"
          required
          label="Nomor Identitas"
          placeholder="Ex. 123*** (16 digit)"
          :disabled="!edited"
          class="w-full"
        />  
        <FormPhoneField 
          v-model="dialPhone"
          :disabled="!edited"
          label="Nomor handphone"
          placeholder="Ex. 8219123123"
        />
        <FormTextField 
          v-model="form.email"
          required
          label="Email"
          placeholder="arthur@mail.com"
          :disabled="!edited"
          class="w-full"
        />  
        <MiscButton 
          v-if="!edited"
          text="Edit Informasi"
          class="w-fit h-12 mt-14"
          @click-handle="edited = !edited"
        />
        <div
          v-else
          class="flex gap-x-3"
        >
          <MiscButton 
            text="Batal"
            border-only
            class="w-fit h-12 mt-14"
            @click-handle="edited = !edited"
          />
          <MiscButton 
            text="Simpan"
            class="w-fit h-12 mt-14"
          />
        </div>
      </div>
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      edited: false,
      dialPhone: {
        code: '+62',
        number: '',
      },
      form: {
        fullName: '',
        dateOfBirth: '',
        indentityNumber: '',
        phone: '',
        email: '',
      },
    }
  },
}
</script>