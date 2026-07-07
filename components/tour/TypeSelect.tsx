'use client'
import { useLanguage } from '@/app/LanguageContext'
import { useTour } from './TourContext'
import { LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

function scrollToForm() {
  document.getElementById('tour-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function TypeSelect() {
  const { t } = useLanguage()
  const { checkType, setCheckType } = useTour()
  const c = t.tour.typeSelect

  const cards = [
    { key: 'person' as const, ...c.person },
    { key: 'company' as const, ...c.company },
  ]

  return (
    <LandingSection id="tour-type" bordered={false} padding="pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="text-center mb-16">
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,9vw,110px)] leading-[0.85]
                       tracking-[.04em] text-[#E8E0D4]">
          {t.hero.title}
        </h1>
        <p className="font-[family-name:var(--font-mono)] text-[12px] tracking-[.1em] uppercase text-[#C4955A] mt-4">
          {t.hero.tagline}
        </p>
      </div>

      <SectionLabel>{c.eyebrow}</SectionLabel>
      <SectionTitle large className="mb-4 max-w-2xl">
        {c.heading}
      </SectionTitle>
      <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/30 mb-14 max-w-lg">
        {c.subheading}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => {
          const active = checkType === card.key
          return (
            <button
              key={card.key}
              onClick={() => { setCheckType(card.key); scrollToForm() }}
              className={`relative text-left bg-[#111111] border p-9 md:p-10 flex flex-col overflow-hidden
                          transition-colors duration-200 cursor-pointer group
                          ${active ? 'border-[#C4955A]/50' : 'border-[#E8E0D4]/[.08] hover:border-[#E8E0D4]/[.2]'}`}
            >
              <div className={`absolute top-0 left-0 w-[3px] h-[60px] bg-[#C4955A] transition-opacity duration-200
                                ${active ? 'opacity-100' : 'opacity-60'}`} />

              <div className={`w-14 h-14 border flex items-center justify-center mb-7 transition-colors duration-200
                                ${active ? 'border-[#C4955A]/50 bg-[#C4955A]/10' : 'border-[#C4955A]/25 bg-[#C4955A]/[.06]'}`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C4955A" strokeWidth="1.5">
                  {card.key === 'person' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                  )}
                </svg>
              </div>

              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em] uppercase text-[#C4955A]/60 mb-2">
                {card.typeLabel}
              </p>
              <h3 className="font-[family-name:var(--font-bebas)] text-[30px] md:text-[34px] tracking-[.03em]
                             text-[#E8E0D4] leading-none mb-4">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/40 leading-relaxed flex-1">
                {card.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {card.sources.map((src) => (
                  <span key={src}
                        className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.08em]
                                   text-[#C4955A]/50 border border-[#C4955A]/15 px-2 py-1">
                    {src}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px]
                              tracking-[.15em] uppercase text-[#C4955A]">
                <span>{card.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     className="transition-transform duration-200 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </div>
            </button>
          )
        })}
      </div>
    </LandingSection>
  )
}
