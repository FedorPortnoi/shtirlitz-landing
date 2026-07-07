'use client'
import { useLanguage } from '@/app/LanguageContext'
import { LandingSection, SectionLabel } from '@/components/landing-ui'

const TILT = [-1.2, 0.8, -0.6]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <LandingSection id="testimonials">
        <SectionLabel className="mb-16">{t.testimonials.label}</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i}
                 className="glass rounded-sm p-8 flex flex-col transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
                 style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}>
              <span className="font-[family-name:var(--font-bebas)] text-[36px] text-[#C4955A]/30 leading-none mb-2">
                &laquo;
              </span>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/55
                            leading-[1.7] flex-1">
                {item.text}
              </p>
              <div className="mt-6 pt-5 border-t border-[#E8E0D4]/[.06] flex flex-col gap-1">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                 uppercase text-[#E8E0D4]/40">
                  {item.author}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/15">
                  {item.org}
                </span>
              </div>
            </div>
          ))}
        </div>
    </LandingSection>
  )
}
