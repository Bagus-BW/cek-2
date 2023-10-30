<template>
  <div class="grid grid-cols-12 gap-x-4 mt-5">
    <div class="col-span-8">
      <img 
        src="https://images.unsplash.com/photo-1594235195084-a14de3830b02?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxnaWxpJTIwdHJhd2FuZ2FufGVufDB8fDB8fHww"
        alt="main-thumbnail"
        class="aspect-[3/2] object-cover rounded-[20px]"
      >
    </div>
    <div class="col-span-4">
      <div class="flex flex-col gap-y-4">
        <img
          src="https://images.unsplash.com/photo-1570971839591-9934cad91963?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D"
          alt="second-thumbnail"
          class="aspect-[3/2] object-cover rounded-[20px]"
        >
        <div 
          class="relative cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1570971839591-9934cad91963?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpbGklMjB0cmF3YW5nYW58ZW58MHx8MHx8fDA%3D"
            alt="second-thumbnail"
            class="aspect-[3/2] object-cover rounded-[20px]"
          >
          <div class="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.4)] rounded-[20px]">
            <div class="h-full flex justify-center items-center text-white">+2 more</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>