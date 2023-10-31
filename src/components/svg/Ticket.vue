<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.212 19.59C25.212 21.31 26.6254 22.71 28.3454 22.71C28.3454 27.71 27.092 28.9634 22.092 28.9634H9.58536C4.58536 28.9634 3.33203 27.71 3.33203 22.71V22.0967C5.05203 22.0967 6.46536 20.6834 6.46536 18.9634C6.46536 17.2434 5.05203 15.83 3.33203 15.83V15.2167C3.34536 10.2167 4.58536 8.96338 9.58536 8.96338H22.0787C27.0787 8.96338 28.332 10.2167 28.332 15.2167V16.47C26.612 16.47 25.212 17.8567 25.212 19.59Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6161 8.96317H9.49609L13.4028 5.0565C16.5894 1.86984 18.1894 1.86984 21.3761 5.0565L22.1761 5.8565C21.3361 6.6965 21.1361 7.9365 21.6161 8.96317Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.1719 8.96338L13.1719 28.9634"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="5 5"
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