export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/register/index.vue'),
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('@/views/auth/verification/index.vue'),
  }
]