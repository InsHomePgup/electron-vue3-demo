import { createI18n } from 'vue-i18n'
import de from '@/renderer/locales/de.json'
import en from '@/renderer/locales/en.json'
import es from '@/renderer/locales/es.json'
import fr from '@/renderer/locales/fr.json'
import ja from '@/renderer/locales/ja.json'
import ko from '@/renderer/locales/ko.json'
import nl from '@/renderer/locales/nl.json'
import pt from '@/renderer/locales/pt.json'
import ru from '@/renderer/locales/ru.json'
import zhHans from '@/renderer/locales/zh-hans.json'
import zhHant from '@/renderer/locales/zh-hant.json'
import { getCurrentLocale } from '@/renderer/utils'

export default createI18n({
  locale: getCurrentLocale(),
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    ko,
    zhHans,
    zhHant,
    de,
    es,
    ja,
    fr,
    ru,
    pt,
    nl,
  },
})
