<template>
  <MiscCardBase class="relative h-fit md:h-[calc(100vh-239.5px)] p-5">
    <div class="md:hidden flex justify-between items-center">
      <div class="flex items-center gap-x-2 mx-4">
        <img
          :src="CheckActiveMenu.icon"
          alt="icon"
        >
        <p>{{ CheckActiveMenu.name }}</p>
      </div>
      <button 
        class="flex gap-x-2 p-4 text-base text-[#FF4014]"
        @click="showMenu = !showMenu"
      >
        <img
          src="/img/icons/hamburger.png"
          alt="icon-user"
          loading="lazy"
          class="w-5"
        >
      </button>
    </div>
    <div
      :class="{
        'slideZoomOut': !showMenu && $store.root.isMobile,
        'slideZoomIn': showMenu && $store.root.isMobile
      }"
    >
      <ul
        v-for="(item, idx) in menus"
        :key="idx"
      >
        <li
          v-for="(menu, idy) in menus[idx].items"
          :key="idy"
        >
          <button
            v-if="menu.show !== false"
            class="w-full flex items-center gap-x-2 text-base text-[#636363] hover:bg-[rgba(17,39,227,0.2)] hover:text-[#1127E3] p-4 my-2 rounded-xl"
            :class="{'!text-[#1127E3] bg-[rgba(17,39,227,0.2)]': $route.name.split('.')[1] === menu.slug}"
            @click="handleChangeMenu(item.group, menu.link)"
          >
            <img
              :src="$route.name.split('.')[1] === menu.slug ? menu.iconActive : menu.icon"
              alt="sidebar-icon"
              loading="lazy"
            >
            <span class="block md:hidden lg:block">{{ menu.name }} </span>
          </button>
        </li>
        <div 
          class="h-[0.5px] w-full bg-[#ECECEC]" 
          :class="{
            'my-3': idx !== menus.length - 1
          }"
        />
      </ul>
      
      <button class="md:absolute bottom-5 flex gap-x-2 p-4 text-base text-[#FF4014]">
        <img
          src="/img/icons/sidebar-logout.svg"
          alt="logout-icon"
        >
        <span class="block md:hidden lg:block">Logout</span>
      </button>
    </div>
  </MiscCardBase>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      activeMenu: {
        group: 'Dashboard',
        link: '/dashboard/my-tickets'
      },
      menus: [
        {
          group: 'Dashboard',
          items: [
            {
              name: 'Tiket Saya',
              slug: 'my-tickets',
              icon: '/img/icons/sidebar-ticket.svg',
              iconActive: '/img/icons/sidebar-ticket-active.svg',
              link: '/dashboard/my-tickets',
              access: ['user']
            },
            {
              name: 'Riwayat Transaksi',
              slug: 'transactions',
              icon: '/img/icons/sidebar-history.svg',
              iconActive: '/img/icons/sidebar-history-active.svg',
              link: '/dashboard/transactions',
              access: ['user']
            },
            {
              name: 'Whislist',
              slug: 'wishlist',
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
              slug: 'traveler',
              icon: '/img/icons/sidebar-traveler.svg',
              iconActive: '/img/icons/sidebar-traveler-active.svg',
              link: '/dashboard/traveler',
              access: ['user']
            },
            {
              show: false,
              name: 'Detail Profile Pemesan',
              slug: 'traveler',
              icon: '/img/icons/sidebar-traveler.svg',
              iconActive: '/img/icons/sidebar-traveler-active.svg',
              link: '/dashboard/traveler/create',
              access: ['user']
            },
            {
              show: false,
              name: 'Detail Profile Pemesan',
              slug: 'traveler',
              icon: '/img/icons/sidebar-traveler.svg',
              iconActive: '/img/icons/sidebar-traveler-active.svg',
              link: '/dashboard/traveler/edit',
              access: ['user'],
            },
            {
              name: 'Informasi Akun',
              slug: 'profile',
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
    CheckActiveMenu() {
      return this.menus.find(item => item.group === this.activeMenu.group).items.find(item => item.link === this.activeMenu.link)
    }
  },
  mounted() {
    const parent = this.menus.find(item => item.items.find(item => item.link === this.$route.path))
    const activeChild = parent.items.find(item => item.link === this.$route.path)

    this.activeMenu = {
      group: parent.group,
      link: activeChild.link
    }
  },
  methods: {
    handleChangeMenu(group, link) {
      this.$router.push(link)
      this.activeMenu = {
        group,
        link
      }
    }
  }
}
</script>