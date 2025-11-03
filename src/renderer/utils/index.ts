export function getCurrentLocale(): string {
  const browserLang = navigator?.language || 'zh-Hans'

  // Map browser language to supported locales
  if (browserLang.startsWith('zh')) {
    // Check if it's traditional Chinese
    if (browserLang.includes('TW') || browserLang.includes('HK') || browserLang.includes('Hant')) {
      return 'zhHant'
    }
    // Default to simplified Chinese
    return 'zhHans'
  }

  const langCode = browserLang.split('-')[0]
  const supportedLocales = ['en', 'ko', 'de', 'es', 'ja', 'fr', 'ru', 'pt', 'nl']

  return supportedLocales.includes(langCode) ? langCode : 'zhHans'
}

export async function openExternal(url: string): Promise<void> {
  await window.mainApi.send('msgOpenExternalLink', url)
}

export async function openFile(type: string): Promise<any> {
  return window.mainApi.invoke('msgOpenFile', type)
}
