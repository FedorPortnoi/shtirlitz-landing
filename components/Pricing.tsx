'use client'
import { useLanguage } from '@/app/LanguageContext'
import { CtaLink, LandingSection, SectionLabel, SectionTitle, cn } from '@/components/landing-ui'

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <LandingSection id="pricing">
        <SectionLabel>{t.pricing.label}</SectionLabel>

        <SectionTitle className="mb-16">
          {t.pricing.heading}
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.plans.map((p, i) => (
            <div key={i}
                 className={cn(
                   'relative flex flex-col p-8 md:p-10 border-l-[3px]',
                   p.featured
                     ? 'border-l-[#C4955A] bg-[#1A1A1A] md:-my-4 md:py-12 shadow-[0_0_60px_-15px_rgba(196,149,90,0.25)]'
                     : 'border-l-[#E8E0D4]/10 bg-[#1A1A1A]'
                 )}>
              {p.featured && (
                <div className="absolute inset-0 pointer-events-none opacity-40"
                     style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,149,90,0.08) 0%, transparent 70%)' }} />
              )}
              {/* Label */}
              <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.2em]
                              text-[#E8E0D4]/30 mb-8">
                {p.label}
              </div>

              {/* Price — huge Bebas */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-[family-name:var(--font-bebas)] text-[72px] md:text-[88px]
                                 leading-none text-[#E8E0D4]">
                  {p.amount}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[14px] text-[#E8E0D4]/30">
                  {p.currency}
                </span>
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[11px] text-[#E8E0D4]/20
                              tracking-[.06em] mb-10">
                {p.period}
              </div>

              {/* Features */}
              <div className="flex-1 mb-10 space-y-0">
                {p.features.map((f, j) => (
                  <div key={j}
                       className="flex items-center gap-3 py-2.5
                                  border-b border-[#E8E0D4]/[.04]">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#4ADE80]/70">
                      ✓
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-[12px] text-[#E8E0D4]/40">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <CtaLink href={p.href}
                       className={cn(
                         'block text-center text-[10px] tracking-[.18em] py-3.5',
                         p.featured
                           ? 'bg-[#C4955A] text-[#0A0A0A] hover:bg-[#D4A56A]'
                           : 'border border-[#E8E0D4]/15 text-[#E8E0D4]/40 hover:border-[#C4955A]/50 hover:text-[#C4955A]'
                       )}>
                {p.cta}
              </CtaLink>
            </div>
          ))}
        </div>
    </LandingSection>
  )
}
