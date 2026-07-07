'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

export default function Pain() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const c = t.pain

  return (
    <LandingSection id="pain">
      <SectionLabel>{c.label}</SectionLabel>
      <SectionTitle large className="mb-6 max-w-2xl">
        {c.heading}
      </SectionTitle>
      <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/30 mb-20 max-w-lg">
        {c.subheading}
      </p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E8E0D4]/[.06]">
        {c.cards.map((card, i) => (
          <div key={i}
               className="bg-[#1A1A1A] p-8 md:p-10 transition-all duration-700"
               style={{
                 opacity: inView ? 1 : 0,
                 transform: inView ? 'none' : 'translateY(20px)',
                 transitionDelay: `${i * 0.15}s`,
               }}>
            <div className="font-[family-name:var(--font-mono)] text-[48px] md:text-[64px]
                            font-bold leading-none text-[#E8E0D4]/[.06] mb-6">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[.12em]
                            text-[#E8E0D4]/70 mb-4">
              {card.title}
            </div>
            <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/30
                            leading-relaxed">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  )
}
