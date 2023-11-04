<template>
  <Teleport to="body">
    <Transition
      name="slide-to-bottom"
      :duration="{ enter: 500, leave: 200 }"
    >
      <div
        v-show="show"
        class="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 outer"
      >
        <div
          class="flex justify-center min-h-screen text-center inner"
          :class="{
            'items-start pt-24': !centerPosition,
            'items-center': centerPosition,
          }"
        >
          <div
            class="bg-white text-xl font-medium text-spacecadet-100 rounded-lg text-left"
            :class="{
              'md:w-2/12': size === 'xsmall',
              'md:w-4/12': size === 'small',
              'md:w-6/12': size === 'normal',
              'md:w-8/12': size === 'medium',
              'md:w-10/12': size === 'large',
            }"
          >
            <!-- Header -->
            <div  class="relative bg-cutured-primary p-4 rounded-t-lg">
              <span>
                {{ title }}
              </span>
              <slot name="header-prepend" />
              <button 
                class="absolute -top-3 -right-3 bg-white rounded-md p-2 shadow"
                @click="show = false"
              >
                <SvgClose color="#1127E3" />
              </button>
            </div>

            <!-- Body -->
            <div class="p-4">
              <slot />
            </div>
            
            <MiscDivider />

            <!-- Footer -->
            <slot name="footer" />

            <div
              v-if="!$slots.footer"
              class="flex justify-end gap-x-3 rounded-b-lg p-3"
            >
              <MiscButton 
                v-if="!btnLeftHide"
                background-color="#B4B4B4"
                border-only
                :text="btnLeftText"
                @click-handle="handleOnClick('cancel')"
              />

              <MiscButton 
                v-if="!btnRightHide"
                :text="btnRightText"
                background-color="#1127E3"
                @click-handle="handleOnClick('success')"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    centerPosition: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    },
    btnLeftText: {
      type: String,
      default: 'Discard'
    },
    btnRightText: {
      type: String,
      default: 'Save'
    },
    btnLeftHide: {
      type: Boolean,
      default: false
    },
    btnRightHide: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onSubmit: {
      type: Function,
      default: () => {}
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      show: this.modelValue
    }
  },
  watch: {
    modelValue(newVal) {
      this.show = newVal;
    },
    show(newVal) {
      this.$emit('update:modelValue', newVal);
    }
  },
  methods: {
    async handleOnClick(status) {
      // there's handler for on submit is clicked
      if (this.onSubmit && typeof this.onSubmit === 'function' && status === 'success') {
        await this.onSubmit('submitted');
      }

      // there's handler for on cancel is clicked
      if (this.onCancel && typeof this.onCancel === 'function' && status === 'cancel') {
        await this.onCancel('canceled');
      }
    },
  }
}
</script>