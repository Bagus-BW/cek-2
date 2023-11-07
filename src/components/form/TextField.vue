<template>
  <div 
    class="flex flex-col"
    @keyup.enter="onEnter"
  >
    <div class="flex flex-col gap-y-1.5">
      <label
        class="flex justify-between text-spacecadet-100 text-xs gap-1"
        :class="labelClass"
        :for="id"
      >
        <span>
          {{ label }}
          <span
            v-if="required"
            class="text-red-500"
          > * </span>
        </span>
        <slot name="label-legend" />
      </label>
      <div
        class="flex items-center border border-solid rounded-md"
        :class="[
          wrapperClass,
          {
            'border-slate-200': !error,
            'border-red-500': error,
          }
        ]"
      >
        <div
          v-if="$slots['input-prepend']"
          class="p-4 h-full flex items-center justify-center border-0 border-r border-solid border-cutured-primary"
        >
          <slot name="input-prepend" />
        </div>
        <slot
          v-if="$slots['input-prepend-plain']"
          name="input-prepend-plain"
        />
        <input
          :id="id"
          v-model="inputVal"
          class="w-full text-sm text-spacecadet-80 border-0 border-solid px-2 pr-3 py-[12px]  placeholder-spacecadet-20 rounded-md focus:right-1 focus:outline disabled:border-spacecadet-20"
          :class="[
            inputClass,
            {
              'bg-gray-200 cursor-no-allowed': disabled,
              'cursor-default': readonly
            },
          ]"
          :min="inputType === 'number' && min ? min : ''"
          :max="inputType === 'number' && max ? max : ''"
          :type="inputType"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :keyup="toLowerCase(inputType) === 'number' ? inputVal < 0 ? inputVal=0: inputVal : null"
          @wheel="toLowerCase(inputType) === 'number' ? $event.target.blur() : null"
        >
        <slot name="input-append" />
      </div>
    </div>
    <small class="text-gray-400">
      {{ subtitle }}
    </small>
    <small
      v-if="error"
      class="text-red-500"
    >
      {{ error }}
    </small>
  </div>
</template>
  
  <script>
  import { random } from 'lodash-es';
  
  export default {
    props: {
      id: {
        type: String,
        default() {
          return 'input-' + random(1, 100);
        },
      },
      label: {
        type: String,
        default() {
          return '';
        },
      },
      subtitle: {
        type: String,
        default() {
          return '';
        },
      },
      placeholder: {
        type: String,
        default() {
          return '';
        },
      },
      readonly: {
        type: Boolean,
        default() {
          return false;
        },
      },
      required: {
        type: Boolean,
        default() {
          return false;
        },
      },
      min: {
        type: [String, Number],
        default() {
          return null;
        }
      },
      max: {
        type: [String, Number],
        default() {
          return null;
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return false;
        },
      },
      error: {
        type: String,
        default() {
          return '';
        },
      },
      wrapperClass: {
        type: String,
        default() {
          return '';
        },
      },
      inputClass: {
        type: [String, Object],
        default() {
          return '';
        },
      },
      inputType: {
        type: String,
        default() {
          return 'text';
        },
      },
      onEnter:{
        type: Function,
        default() {
          return () => {};
        },
      },
      labelClass: {
        type: [String, Array],
        default() {
          return '';
        },
      },
    },
    emits: ['update:modelValue'],
    data() {
      return {
        inputVal: this.modelValue || null
      };
    },
    computed: {
      toLowerCase() {
        return element => element.toLowerCase();
      },
    },
    watch: {
      modelValue(newval) {
        this.inputVal = newval;
      },
      inputVal(val) {
        this.$emit('update:modelValue', val);
      }
    },
  };
  </script>
  <style lang="postcss" scoped>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    appearance: textfield;
  }
  </style>