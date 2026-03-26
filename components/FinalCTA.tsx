'use client'
import { useLanguage } from '@/app/LanguageContext'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#0A0A0A] border-t border-[#E8E0D4]/[.06]
                        py-32 md:py-44 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,8vw,100px)]
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

        <a href="https://shtirletzsled.ru/login"
           className="inline-block font-[family-name:var(--font-mono)] text-[11px] font-medium
                      tracking-[.22em] uppercase
                      border border-[#C4955A] text-[#C4955A]
                      px-14 py-4 no-underline
                      transition-all duration-300
                      hover:bg-[#C4955A] hover:text-[#0A0A0A]">
          {t.finalCta.cta}
        </a>
      </div>
    </section>
  )
}
