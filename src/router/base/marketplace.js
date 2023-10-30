export default [
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import('@/views/marketplace/list/Index.vue'),
  },
  {
    path: '/marketplace/:id',
    name: 'marketplace.detail',
    component: () => import('@/views/marketplace/detail/Index.vue'),
  }
]