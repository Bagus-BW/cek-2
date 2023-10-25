<template>
  <button
    class="flex items-center justify-center gap-x-4"
    :style="buttonVars"
    :class="{
      'border-2': borderOnly,
      '!cursor-not-allowed': disabled,
    }"
    :disabled="disabled"
    @click.prevent="$emit('clickHandle')"
  >
    <span
      class="flex gap-x-2 text-md capitalize font-semibold"
      :style="textVars"
    >
      <slot
        v-if="$slots.iconButtonPrepend"
        name="iconButtonPrepend"
      />
      {{ text }}
      <slot
        v-if="$slots.iconButtonAppend"
        name="iconButtonAppend"
      />
    </span>
  </button>
</template>
  
<script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: function () {
          return '#1127E3';
        },
      },
      textColor: {
        type: String,
        default: function () {
          return '#FFFFFF';
        },
      },
      borderOnly: {
        type: Boolean,
        default () {
          return false
        }
      },
      text: {
        type: String,
        default () {
          return ''
        }
      },
      disabled: {
        type: Boolean,
        default () {
          return false
        }
      },
    },
    emits: ['clickHandle'],
    computed: {
      buttonVars() {
        if(this.disabled){
          return {
            '--bg-color': !this.borderOnly ? '#B4B4B4' : 'transparent',
            '--border-color': '#B4B4B4',
          };
        }else{
          return {
            '--bg-color': !this.borderOnly ? this.backgroundColor : 'transparent',
            '--border-color': this.backgroundColor,
          };
        }
      },
      textVars() {
        if(this.disabled){
          return {
            '--text-color': this.borderOnly ? '#B4B4B4' : this.textColor,
          }
        }else{
          return {
            '--text-color': this.borderOnly ? this.backgroundColor : this.textColor,
          };
        }
      },
    },
  };
</script>
  
<style lang="postcss" scoped>
  button {
    color: var(--text-color);
    background-color: var(--bg-color);
    border-color: var(--border-color);
    @apply px-7 py-4 text-base cursor-pointer rounded-lg;
  }
  span {
    color: var(--text-color);
  }
</style>
  