'use client'
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { translations, type Lang } from './translations'

type LanguageContextType = {
  lang: Lang
  t: (typeof translations)['ru']
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  t: translations.ru,
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ru') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setLang(prev => {
        const next = prev === 'ru' ? 'en' : 'ru'
        localStorage.setItem('lang', next)
        return next
      })
      setTimeout(() => setFading(false), 20)
    }, 200)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      <div
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 200ms ease' }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
