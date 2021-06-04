// src/studio/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import light from './vuetify/theme'
import minifyTheme from 'minify-css-string'


Vue.use(Vuetify, {
    iconfont: 'md',
})

const themeCache = new LRU({
    max: 10,
    maxAge: 1000 * 60 * 60, // 1 hour
})

export default new Vuetify({
    theme: {
        themes: { light },
        options: { minifyTheme, themeCache },
    },
})

export default vuetify
