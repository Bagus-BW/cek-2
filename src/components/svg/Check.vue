<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 15 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33457 8.64225L12.9949 0.981934L14.1734 2.16044L5.33457 10.9993L0.03125 5.696L1.20976 4.5175L5.33457 8.64225Z"
      :fill="color"
    />
  </svg>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 11
    },
    width: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#FFFFFF'
    }
  }
}
</script>