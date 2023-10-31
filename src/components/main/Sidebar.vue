<template>
  <MiscCardBase class="relative h-full p-5">
    <ul
      v-for="(item, idx) in menus"
      :key="idx"
    >
      <li
        v-for="(menu, idy) in menus[idx].items"
        :key="idy"
      >
        <router-link
          :to="menu.link"
          class="flex items-center gap-x-2 text-base text-[#636363] hover:bg-[rgba(17,39,227,0.2)] hover:text-[#1127E3] p-4 my-2 rounded-xl"
          :class="{'!text-[#1127E3] bg-[rgba(17,39,227,0.2)]': $route.path === menu.link}"
        >
          <img
            :src="$route.path === menu.link ? menu.iconActive : menu.icon"
            alt="sidebar-icon"
            loading="lazy"
          >
          <span class="hidden lg:block">{{ menu.name }}</span>
        </router-link>
      </li>
      <div 
        class="h-[0.5px] w-full bg-[#ECECEC]" 
        :class="{
          'my-3': idx !== menus.length - 1
        }"
      />
    </ul>
    
    <button class="absolute bottom-5 flex gap-x-2 p-4 text-base text-[#FF4014]">
      <img
        src="/img/icons/sidebar-logout.svg"
        alt="logout-icon"
      >
      <span class="hidden lg:block">Logout</span>
    </button>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          group: 'Dashboard',
          items: [
            {
              name: 'Tiket Saya',
              icon: '/img/icons/sidebar-ticket.svg',
              iconActive: '/img/icons/sidebar-ticket-active.svg',
              link: '/dashboard/my-tickets',
              access: ['user']
            },
            {
              name: 'Riwayat Transaksi',
              icon: '/img/icons/sidebar-history.svg',
              iconActive: '/img/icons/sidebar-history-active.svg',
              link: '/dashboard/transactions',
              access: ['user']
            },
            {
              name: 'Whislist',
              icon: '/img/icons/sidebar-wishlist.svg',
              iconActive: '/img/icons/sidebar-wishlist-active.svg',
              link: '/dashboard/wishlist',
              access: ['user']
            },
          ]  
        },
        {
          group: 'setting',
          items: [
            {
              name: 'Detail Profile Pemesan',
              icon: '/img/icons/sidebar-traveler.svg',
              iconActive: '/img/icons/sidebar-traveler-active.svg',
              link: '/dashboard/traveler-profile',
              access: ['user']
            },
            {
              name: 'Informasi Akun',
              icon: '/img/icons/sidebar-profile.svg',
              iconActive: '/img/icons/sidebar-profile-active.svg',
              link: '/dashboard/profile',
              access: ['user']
            },
          ]
        }
      ],
    }
  },
  computed: {

  }
}
</script>