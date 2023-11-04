<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>

<script>
import defaultLayout from '@/layouts/default.vue'

export default {
  name: 'App',
  computed: {
    layout () {
      return this.$route.meta.layout || defaultLayout
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.$store.root.$patch({
        isMobile: window.innerWidth <= 760,
        isTablet: window.innerWidth <= 1024,
      })
    },
  }
}
</script>
