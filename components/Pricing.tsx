const APP_URL = 'https://shtirletzsled.ru/login'

const plans = [
  {
    label: 'FREE',
    amount: '0',
    currency: '₽',
    period: 'навсегда',
    features: ['2 проверки в неделю', 'Все 9 этапов pipeline', 'PDF экспорт', 'Риск-скоринг 0–100'],
    cta: 'НАЧАТЬ БЕСПЛАТНО',
    href: APP_URL,
    featured: false,
  },
  {
    label: 'PRO',
    amount: '1500',
    currency: '₽',
    period: 'в месяц / безлимит',
    features: ['Безлимитные проверки', 'Все источники данных', 'PDF + JSON экспорт', 'История проверок', 'Приоритетная обработка'],
    cta: 'ОФОРМИТЬ ПОДПИСКУ',
    href: APP_URL,
    featured: true,
  },
  {
    label: 'ENTERPRISE',
    amount: 'По запросу',
    currency: '',
    period: 'индивидуальные условия',
    features: ['Полная интеграция в ваши системы', 'Ваши HR и СБ получают то же что видит наш админ', 'Неограниченное число пользователей', 'Персональный менеджер и поддержка 24/7', 'Соответствие 152-ФЗ под ключ'],
    cta: 'ОБСУДИТЬ УСЛОВИЯ',
    href: 'mailto:enterprise@shtirletzsled.ru',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                      border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          {'[ТАРИФЫ]'}
        </div>

        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,64px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-16">
          {'НАЧНИТЕ БЕСПЛАТНО'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i}
                 className={`flex flex-col p-8 md:p-10
                             border-l-[3px] bg-[#1A1A1A]
                             ${p.featured
                               ? 'border-l-[#C4955A]'
                               : 'border-l-[#E8E0D4]/10'}`}>
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
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#C4955A]/60">
                      +
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-[12px] text-[#E8E0D4]/40">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={p.href}
                 className={`block text-center font-[family-name:var(--font-mono)] text-[10px]
                             font-medium tracking-[.18em] uppercase py-3.5 no-underline
                             transition-all duration-300
                             ${p.featured
                               ? 'bg-[#C4955A] text-[#0A0A0A] hover:bg-[#D4A56A]'
                               : 'border border-[#E8E0D4]/15 text-[#E8E0D4]/40 hover:border-[#C4955A]/50 hover:text-[#C4955A]'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
