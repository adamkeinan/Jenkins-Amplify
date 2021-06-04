// src/studio/main.js

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './registerServiceWorker'

import App from './App.vue'
import { IS_PROD } from '@/util/globals'
import Vue from 'vue'
import { createI18n } from '@/i18n'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import { createVuetify } from '@/vuetify'
import { registerPlugins } from './plugins'
import { sync } from 'vuex-router-sync'
import vuetify from '@/plugins/vuetify'

const app = new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App),
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
const entry = { app, router, store }

await start(entry)

return entry
}new Vue({ vuetify }).$mount('#app')