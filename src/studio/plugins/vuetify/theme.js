// src/plugins/vuetify/theme.js

import colors from 'vuetify/lib/util/colors'

export default {
    primary: {
        base: colors.purple.base,
        darken1: colors.purple.darken2,
    },
    secondary: colors.indigo,
    // All keys will generate theme styles,
    // Here we add a custom `tertiary` color
    tertiary: colors.pink.base,
    interface ParsedThemeItem {
    base: string
    lighten5: string
    lighten4: string
    lighten3: string
    lighten2: string
    lighten1: string
    darken1: string
    darken2: string
    darken3: string
    darken4: string

    [name: string]: string
},
}