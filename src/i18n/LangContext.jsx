import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext({
  lang: 'es',
  t: (es) => es,
  toggleLang: () => {},
})

const STORAGE_KEY = 'imp-lang'

function readInitialLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

/**
 * Idioma ES/EN. Uso en cualquier componente:
 *   const { t } = useLang()
 *   <h2>{t('Hola', 'Hello')}</h2>
 */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* modo privado / storage bloqueado: no pasa nada */
    }
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  const value = useMemo(
    () => ({
      lang,
      toggleLang,
      t: (es, en) => (lang === 'en' && en != null ? en : es),
    }),
    [lang, toggleLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
