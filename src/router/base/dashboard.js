import DashboardLayout from '@/layouts/Dashboard.vue'

export default [
  {
    path: '/dashboard/my-tickets',
    name: 'dashboard.my-tickets',
    component: () => import('@/views/dashboard/my-ticket/Index.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/transactions',
    name: 'dashboard.transactions',
    component: () => import('@/views/dashboard/transaction/Index.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/wishlist',
    name: 'dashboard.wishlist',
    component: () => import('@/views/dashboard/wishlist/Index.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/traveler',
    name: 'dashboard.traveler',
    component: () => import('@/views/dashboard/traveler/detail/Index.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/traveler/create',
    name: 'dashboard.traveler.create',
    component: () => import('@/views/dashboard/traveler/manage/Create.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/traveler/Edit/:id',
    name: 'dashboard.traveler.edit',
    component: () => import('@/views/dashboard/traveler/manage/Edit.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
  {
    path: '/dashboard/profile',
    name: 'dashboard.profile',
    component: () => import('@/views/dashboard/profile/Index.vue'),
    meta: {
      layout: DashboardLayout
    }
  },
]