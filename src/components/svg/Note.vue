<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.668 2.6665V6.6665"
      :stroke="color"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.332 2.6665V6.6665"
      :stroke="color"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.33203 17.3335H19.9987"
      :stroke="color"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.33203 22.6665H15.9987"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.3333 4.6665C25.7733 4.9065 28 6.59984 28 12.8665V21.1065C28 26.5998 26.6667 29.3465 20 29.3465H12C5.33333 29.3465 4 26.5998 4 21.1065V12.8665C4 6.59984 6.22667 4.91984 10.6667 4.6665H21.3333Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '32'
    },
    height: {
      type: String,
      default: '32'
    },
    color: {
      type: String,
      default: '#121212'
    }
  }
}
</script>