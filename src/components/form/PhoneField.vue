<template>
  <div 
    class="w-full flex flex-col"
    :class="{
      'mb-5': !!error,
    }"
  >
    <div class="flex flex-col gap-y-1.5">
      <div class="flex gap-x-3">
        <div class="flex flex-col">
          <span class="text-spacecadet-100 text-xs mb-2">
            Kode negara
            <span
              v-if="required"
              class="text-red-500"
            > * </span>
          </span>
          <select
            :id="id"
            name="dialCode"
            class="w-24 h-full border border-solid rounded-md focus:right-1 focus:outline"
            :class="{
              'bg-gray-200 cursor-no-allowed': disabled,
              'cursor-default': readonly
            }"
            :disabled="disabled"
            @change="inputVal.code = $event.target.value"
          >
            <option
              v-for="(item, index) in dialCode"
              :key="index"
              :value="item.dial_code"
              :selected="item.dial_code === inputVal.code"
            >
              {{ item.flag }} {{ item.dial_code }}
            </option>
          </select>
        </div>
        <div class="w-full flex flex-col">
          <span class="text-spacecadet-100 text-xs mb-2">
            Nomor handphone
            <span
              v-if="required"
              class="text-red-500"
            > * </span>
          </span>
          <div class="w-full relative flex flex-col">
            <div
              class="flex items-center border border-solid rounded-md"
              :class="{
                'border-slate-200': !error,
                'border-red-500': error,
              }"
            >
              <input
                :id="id"
                v-model="inputVal.number"
                class="disabled:border-spacecadet-20 w-full text-sm text-spacecadet-80 border-0 border-solid px-2 pr-3 py-[12px] placeholder-spacecadet-20 rounded-md focus:right-1 focus:outline"
                :class="{
                  'bg-gray-200 cursor-no-allowed': disabled,
                  'cursor-default': readonly
                }"
                type="number"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
              >
            </div>
            <small
              v-if="error"
              class="absolute -bottom-5 text-red-500"
            >
              {{ error }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { random } from 'lodash-es';
  import dialCode from '@/data/dialCode.json'
  
  export default {
    props: {
      modelValue: {
        type: Object,
        default() {
          return {
            code: '+62',
            number: ''
          }
        }
      },
      id: {
        type: String,
        default() {
          return 'input-' + random(1, 100);
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
    },
    emits: ['update:modelValue'],
    data() {
      return {
        dialCode: dialCode,
        inputVal: this.modelValue || {
          code: '+62',
          number: ''
        },
      };
    },
    watch: {
      modelValue(newVal){
        console.log(newVal);
      },
      inputVal: {
        handler(newVal) {
          this.$emit('update:modelValue', newVal)
        },
        deep: true
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