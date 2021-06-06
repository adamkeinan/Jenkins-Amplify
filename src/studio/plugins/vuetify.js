// src/studio/plugins/vuetify.js

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import light from './vuetify/theme'
import minifyTheme from 'minify-css-string'
import VueI18n from 'vue-i18n'


// Translation provided by Vuetify (javascript)
import zhCN from 'studio/locale/zh-CN'

// Translation provided by Vuetify (javascript)
import en from 'studio/locale/en'

// Translation provided by Vuetify (javascript)
import ru from 'studio/locale/ru'

// Translation provided by Vuetify (javascript)
import en from 'studio/locale/en'

// Translation provided by Vuetify (javascript)
import he from 'studio/locale/he'

Vue.use(Vuetify, {
    iconfont: 'md',
})
Vue.use(Vuetify)
Vue.use(VueI18n)

const themeCache = new LRU({
    max: 10,
    maxAge: 1000 * 60 * 60, // 1 hour
})

Vue.component('my-component', {
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = 'en'
    },
  },
})

export default new Vuetify({
  theme: {
    themes: { light },
      options: { minifyTheme, themeCache },
  },
  icons: {
    iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  lang: {
    locales: { en, he, ru, zhCN },
    current: 'en',
  },
})

export default vuetify
