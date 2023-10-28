<template>
  <div class="min-h-screen w-screen bg-[#F6F6F6]">
    <MainHeader />
    <div class="min-h-[calc(100vh-239.5px)]">
      <router-view />
    </div>
    <MainFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
