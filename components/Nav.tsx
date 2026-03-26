'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                     ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* Top accent line */}
      <div className="h-[1px] bg-[#C4955A]/30" />

      <div className="flex items-center justify-between px-6 md:px-16 h-[56px]">
        {/* Monogram */}
        <a href="#hero" className="no-underline flex items-center gap-3">
          <span className="font-[family-name:var(--font-bebas)] text-[22px] tracking-[.15em] text-[#C4955A]">
            Ш
          </span>
          <span className="hidden sm:inline text-[10px] font-[family-name:var(--font-mono)] tracking-[.2em] uppercase text-[#E8E0D4]/30">
            SHTIRLITZ
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            ['Проблема', '#pain'],
            ['Pipeline', '#pipeline'],
            ['Сравнение', '#comparison'],
            ['Тарифы', '#pricing'],
          ].map(([label, href]) => (
            <a key={href} href={href}
               className="text-[11px] font-[family-name:var(--font-mono)] text-[#E8E0D4]/25
                          no-underline tracking-[.08em] uppercase
                          transition-colors duration-300 hover:text-[#E8E0D4]/70">
              {label}
            </a>
          ))}
        </div>

        {/* CTA — border button, inverts on hover */}
        <a href="https://shtirletzsled.ru/login"
           className="text-[10px] font-[family-name:var(--font-mono)] font-medium
                      tracking-[.2em] uppercase px-5 py-2
                      border border-[#C4955A]/60 text-[#C4955A] no-underline
                      transition-all duration-300
                      hover:bg-[#C4955A] hover:text-[#0A0A0A]">
          ВОЙТИ
        </a>
      </div>
    </nav>
  )
}
