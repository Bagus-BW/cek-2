import vueInit from '@/core/initiate.js';

import VueDirective from "@/plugins/vue-directive.js";
vueInit.use(VueDirective);

import { register } from 'swiper/element/bundle';
register();

import VeeValidate from "@/plugins/vee-validate.js";
vueInit.use(VeeValidate);