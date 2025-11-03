import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  de,
  en,
  es,
  fr,
  ja,
  ko,
  nl,
  pt,
  ru,
  zhHans,
  zhHant,
} from 'vuetify/locale'
import colors from 'vuetify/util/colors'

import 'vuetify/styles'

export default createVuetify({
  locale: {
    messages: { ko, en, zhHans, zhHant, de, es, ja, fr, ru, pt, nl },
    locale: 'en',
    fallback: 'en',
  },
  defaults: {
    VBtn: {
      style: [
        {
          // Do not force capitalization of a button text
          textTransform: 'none',
        },
      ],
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.green.darken2,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.green.darken4,
        },
      },
    },
  },
})
