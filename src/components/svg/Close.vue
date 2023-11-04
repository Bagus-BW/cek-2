<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3.16602"
      y="5.28906"
      width="3"
      height="13.5"
      rx="1.5"
      transform="rotate(-45 3.16602 5.28906)"
      :fill="color"
    />
    <rect
      opacity="0.6"
      x="12.7129"
      y="3.16797"
      width="3"
      height="13.5"
      rx="1.5"
      transform="rotate(45 12.7129 3.16797)"
      :fill="color"
    />
  </svg>
</template>
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: function () {
          return '#DA4A4A';
        },
      },
    },
  };
  </script>
  