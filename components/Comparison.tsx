'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const c = t.comparison

  return (
    <LandingSection id="comparison">
      <SectionLabel>{c.label}</SectionLabel>
      <SectionTitle className="mb-4">
        {c.heading}
      </SectionTitle>
      <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/25 mb-16">
        {c.subtext}
      </p>

      <div ref={ref}
           className="transition-all duration-700 overflow-x-auto"
           style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}>

        <div className="grid grid-cols-[1fr_1fr_1fr] min-w-[600px] border-b border-[#E8E0D4]/[.08] pb-4 mb-2">
          <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                          uppercase text-[#E8E0D4]/20 px-4">
            {c.paramHeader}
          </div>
          <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                          uppercase text-[#C4955A] px-4">
            {c.sledHeader}
          </div>
          <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                          uppercase text-[#E8E0D4]/15 px-4">
            {c.burHeader}
          </div>
        </div>

        {c.rows.map((row, i) => (
          <div key={i}
               className="grid grid-cols-[1fr_1fr_1fr] min-w-[600px] py-3.5
                          border-b border-[#E8E0D4]/[.04]
                          transition-colors hover:bg-[#E8E0D4]/[.01]">
            <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/40 px-4">
              {row.param}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[13px] text-[#E8E0D4]/80 px-4">
              {row.sled}
            </div>
            <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/15 px-4
                            line-through decoration-[#E8E0D4]/10">
              {row.bur}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  )
}
