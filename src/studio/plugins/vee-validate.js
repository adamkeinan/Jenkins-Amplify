import {
  ValidationObserver,
  ValidationProvider,
  extend,
} from 'vee-validate'
import {
  email,
  max,
  min,
  numeric,
  required,
} from 'vee-validate/dist/rules'

import Vue from 'vue'

extend('email', email)
extend('max', max)
extend('min', min)
extend('numeric', numeric)
extend('required', required)

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
