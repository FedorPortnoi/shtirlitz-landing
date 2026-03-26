'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()

  return (
    <section id="comparison" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                         border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          {t.comparison.label}
        </div>

        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,64px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-4">
          {t.comparison.heading}
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/25 mb-16">
          {t.comparison.subtext}
        </p>

        <div ref={ref}
             className="transition-all duration-700 overflow-x-auto"
             style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}>

          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] min-w-[600px] border-b border-[#E8E0D4]/[.08]
                          pb-4 mb-2">
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#E8E0D4]/20 px-4">
              {t.comparison.paramHeader}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#C4955A] px-4">
              {t.comparison.sledHeader}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#E8E0D4]/15 px-4">
              {t.comparison.burHeader}
            </div>
          </div>

          {/* Rows */}
          {t.comparison.rows.map((row, i) => (
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
      </div>
    </section>
  )
}
