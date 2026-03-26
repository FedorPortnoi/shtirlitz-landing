'use client'
import { useLanguage } from '@/app/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                           border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-4xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-20">
          {t.testimonials.label}
        </div>

        <div className="space-y-0">
          {t.testimonials.items.map((item, i) => (
            <div key={i}>
              {/* Horizontal line */}
              {i > 0 && <div className="h-[1px] bg-[#E8E0D4]/[.06] my-14" />}

              <blockquote className="relative">
                {/* Quote text with guillemets */}
                <p className="font-[family-name:var(--font-body)] text-[16px] md:text-[18px]
                              text-[#E8E0D4]/50 leading-[1.7] italic
                              pl-0 md:pl-12">
                  <span className="font-[family-name:var(--font-bebas)] text-[32px] text-[#C4955A]/30
                                   not-italic absolute left-0 -top-2 hidden md:block">
                    &laquo;
                  </span>
                  <span className="md:hidden">&laquo;</span>
                  {item.text}
                  <span className="md:hidden">&raquo;</span>
                  <span className="font-[family-name:var(--font-bebas)] text-[32px] text-[#C4955A]/30
                                   not-italic hidden md:inline ml-1 align-text-bottom">
                    &raquo;
                  </span>
                </p>

                {/* Author */}
                <div className="mt-6 pl-0 md:pl-12 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-[#C4955A]/30" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                   uppercase text-[#E8E0D4]/25">
                    {item.author}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/12">
                    / {item.org}
                  </span>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
