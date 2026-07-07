'use client'
import { useLanguage } from '@/app/LanguageContext'
import { APP_URL } from '@/app/translations'
import { CtaLink, LandingSection } from '@/components/landing-ui'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <LandingSection padding="py-32 md:py-44" innerClassName="relative max-w-3xl mx-auto text-center" className="relative overflow-hidden">
        {/* Organic glow — contained to this section only */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: 'radial-gradient(ellipse 50% 60% at 50% 40%, rgba(196,149,90,0.07) 0%, transparent 70%)',
             }} />

        <h2 className="relative font-[family-name:var(--font-bebas)] text-[clamp(40px,8vw,100px)]
                       leading-[0.9] tracking-[.03em] text-[#E8E0D4] mb-6">
          {t.finalCta.line1}
          <br />
          <span className="text-[#C4955A]">{t.finalCta.line2}</span>
        </h2>

        <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/25 mb-3">
          {t.finalCta.subtext}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/15
                      tracking-[.1em] mb-14">
          {t.finalCta.timeNote}
        </p>

        <CtaLink href={APP_URL}
           className="inline-block text-[11px] tracking-[.22em]
                      border border-[#C4955A] text-[#C4955A]
                      px-14 py-4
                      hover:bg-[#C4955A] hover:text-[#0A0A0A]">
          {t.finalCta.cta}
        </CtaLink>
    </LandingSection>
  )
}
