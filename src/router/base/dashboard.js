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
]