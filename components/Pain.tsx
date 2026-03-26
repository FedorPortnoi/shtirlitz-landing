'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pains = [
  {
    num: '01',
    title: 'АНАЛИТИК РАБОТАЕТ ЧАСАМИ',
    text: 'Буратино \u2014 инструмент для специалистов. Каждая проверка требует обученного аналитика и занимает 1\u20132 часа ручной работы.',
  },
  {
    num: '02',
    title: 'ТОЛЬКО ГОСРЕЕСТРЫ',
    text: 'Нет соцсетей, нет анализа утечек, нет поведенческого анализа. Кандидат может скрыть риски которые Буратино не видит.',
  },
  {
    num: '03',
    title: 'СКРЫТЫЕ РАСХОДЫ',
    text: '25\u00A0000 \u20BD/год за лицензию + 30\u201399k \u20BD за курс обучения. Плюс зарплата аналитика. Реальная стоимость \u2014 сотни тысяч в год.',
  },
]

export default function Pain() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pain" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          [ПРОБЛЕМА]
        </div>

        {/* Heading — asymmetric, bleeds left */}
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,6vw,72px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-6
                       max-w-2xl">
          ВЫ ТРАТИТЕ 2 ЧАСА НА ТО, ЧТО МОЖНО СДЕЛАТЬ ЗА 5 МИНУТ
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/30 mb-20 max-w-lg">
          ИАС Буратино создан для обученных аналитиков. Вашему бизнесу нужна автоматизация.
        </p>

        {/* Cards — hard borders, military numbers */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E8E0D4]/[.06]">
          {pains.map((p, i) => (
            <div key={i}
                 className="bg-[#1A1A1A] p-8 md:p-10 transition-all duration-700"
                 style={{
                   opacity: inView ? 1 : 0,
                   transform: inView ? 'none' : 'translateY(20px)',
                   transitionDelay: `${i * 0.15}s`
                 }}>
              {/* Military number */}
              <div className="font-[family-name:var(--font-mono)] text-[48px] md:text-[64px]
                              font-bold leading-none text-[#E8E0D4]/[.06] mb-6">
                {p.num}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[.12em]
                              text-[#E8E0D4]/70 mb-4">
                {p.title}
              </div>
              <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/30
                              leading-relaxed">
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
