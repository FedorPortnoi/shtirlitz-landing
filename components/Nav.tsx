'use client'
import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'
import { APP_URL } from '@/app/translations'
import { CtaLink } from '@/components/landing-ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggleLang } = useLanguage()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  const links: [string, string][] = [
    [t.nav.tour, '#tour-type'],
    [t.nav.pricing, '#pricing'],
    [t.nav.testimonials, '#testimonials'],
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                     ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* Top accent line */}
      <div className="h-[1px] bg-[#C4955A]/30" />

      <div className="flex items-center justify-between px-6 md:px-16 h-[56px]">
        {/* Monogram */}
        <a href="#tour-type" className="no-underline flex items-center gap-3">
          <span className="font-[family-name:var(--font-bebas)] text-[22px] tracking-[.15em] text-[#C4955A]">
            Ш
          </span>
          <span className="hidden sm:inline text-[10px] font-[family-name:var(--font-mono)] tracking-[.2em] uppercase text-[#E8E0D4]/30">
            SHTIRLITZ
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(([label, href]) => (
            <a key={href} href={href}
               className="text-[11px] font-[family-name:var(--font-mono)] text-[#E8E0D4]/25
                          no-underline tracking-[.08em] uppercase
                          transition-colors duration-300 hover:text-[#E8E0D4]/70">
              {label}
            </a>
          ))}
        </div>

        {/* Right side: lang toggle + CTA + mobile trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-[10px] font-[family-name:var(--font-mono)] font-medium
                       tracking-[.2em] uppercase px-3 py-2
                       border border-[#C4955A]/60 text-[#C4955A] bg-transparent
                       transition-all duration-300 cursor-pointer
                       hover:bg-[#C4955A] hover:text-[#0A0A0A]"
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>

          <CtaLink href={APP_URL}
             className="hidden sm:inline-block text-[10px] tracking-[.2em] px-5 py-2
                        border border-[#C4955A]/60 text-[#C4955A] no-underline
                        hover:bg-[#C4955A] hover:text-[#0A0A0A]">
            {t.nav.login}
          </CtaLink>

          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          >
            <span className={`block h-[1px] w-5 bg-[#E8E0D4]/60 transition-transform duration-300 ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block h-[1px] w-5 bg-[#E8E0D4]/60 transition-transform duration-300 ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-sm border-t border-[#E8E0D4]/[.06] px-6 py-8 flex flex-col gap-6"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                 className="text-[13px] font-[family-name:var(--font-mono)] text-[#E8E0D4]/50
                            no-underline tracking-[.1em] uppercase">
                {label}
              </a>
            ))}
            <CtaLink href={APP_URL}
               className="inline-block text-center text-[11px] tracking-[.2em] px-5 py-3 mt-2
                          border border-[#C4955A]/60 text-[#C4955A] no-underline">
              {t.nav.login}
            </CtaLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
