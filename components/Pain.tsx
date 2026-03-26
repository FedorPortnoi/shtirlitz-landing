'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Pain() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()

  return (
    <section id="pain" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          {t.pain.label}
        </div>

        {/* Heading — asymmetric, bleeds left */}
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,6vw,72px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-6
                       max-w-2xl">
          {t.pain.heading}
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/30 mb-20 max-w-lg">
          {t.pain.subheading}
        </p>

        {/* Cards — hard borders, military numbers */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E8E0D4]/[.06]">
          {t.pain.cards.map((p, i) => (
            <div key={i}
                 className="bg-[#1A1A1A] p-8 md:p-10 transition-all duration-700"
                 style={{
                   opacity: inView ? 1 : 0,
                   transform: inView ? 'none' : 'translateY(20px)',
                   transitionDelay: `${i * 0.15}s`
                 }}>
              {/* Military number */}
              <div className="font-[family-name:var(--font-mono)] text-[48px] md:text-[64px]
                              font-bold leading-none text-[#E8E0D4]/[.06] mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[.12em]
                              text-[#E8E0D4]/70 mb-4">
                {p.title}
              </div>
              <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/30
                              leading-relaxed">
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
