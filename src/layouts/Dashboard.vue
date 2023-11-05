<template>
  <div class="min-h-screen w-screen bg-[#F6F6F6]">
    <MainHeader />
    <div class="min-h-[calc(100vh-239.5px)]">
      <div class="grid grid-cols-7 lg:grid-cols-12 gap-y-5 md:gap-y-0 gap-x-5 container mx-auto px-5 lg:px-20 py-5 min-h-[calc(100vh-239.5px)]">
        <div class="h-full col-span-7 md:col-span-1 lg:col-span-3">
          <MainSidebar />
        </div>
        <div class="h-full col-span-7 md:col-span-6 lg:col-span-9">
          <Transition name="route">
            <router-view />
          </Transition>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>