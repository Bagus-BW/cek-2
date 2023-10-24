import DefaultLayout from "@/layouts/default";

export default [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/landing/index.vue'),
    meta: {
      layout: DefaultLayout
    }
  }
]