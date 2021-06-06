// src/studio/main.js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './registerServiceWorker'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
// Components
import './components'
// Plugins
import './plugins'

import App from './App.vue'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const app = new Vue({
    router,
    i18n,
    vuetify,
    render: h => h(App),
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
const entry = { app, router }

await start(entry)

return entry

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
