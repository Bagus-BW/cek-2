<template>
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8337 7.50008C12.8337 10.7201 10.2203 13.3334 7.00033 13.3334C3.78033 13.3334 1.16699 10.7201 1.16699 7.50008C1.16699 4.28008 3.78033 1.66675 7.00033 1.66675C10.2203 1.66675 12.8337 4.28008 12.8337 7.50008Z"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "#2C2C2C",
    },
  },
}
</script>