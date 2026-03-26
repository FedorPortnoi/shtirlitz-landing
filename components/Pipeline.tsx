'use client'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stages = [
  { num: '00', name: 'ЛИЧНОСТЬ',       desc: '\u0415\u0413\u0420\u042E\u041B \u043F\u043E \u0418\u041D\u041D, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438',         status: 'COMPLETE' },
  { num: '01', name: 'РЕЕСТРЫ',     desc: '\u0421\u0443\u0434\u044B, \u0424\u0421\u0421\u041F, \u0437\u0430\u043B\u043E\u0433\u0438, \u0431\u0430\u043D\u043A\u0440\u043E\u0442\u0441\u0442\u0432\u043E',                status: 'COMPLETE' },
  { num: '02', name: 'БЕЗОПАСНОСТЬ',       desc: '\u0421\u0430\u043D\u043A\u0446\u0438\u0438, \u041C\u0412\u0414, \u0418\u043D\u0442\u0435\u0440\u043F\u043E\u043B, \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0438\u0441\u0442\u044B',           status: 'COMPLETE' },
  { num: '03', name: 'СОЦСЕТИ',         desc: '\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435, Telegram, \u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438',         status: 'COMPLETE' },
  { num: '04', name: 'КОНТАКТЫ',       desc: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B, email, \u0443\u0442\u0435\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445',             status: 'COMPLETE' },
  { num: '05', name: 'ГЛУБОКИЙ_АНАЛИЗ',  desc: '\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u0440\u0430\u0444, Search4Faces',              status: 'COMPLETE' },
  { num: '06', name: 'ПОВЕДЕНИЕ',     desc: '\u0410\u043D\u0430\u043B\u0438\u0437 \u043F\u043E\u0441\u0442\u043E\u0432, last_seen, \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u0438',       status: 'COMPLETE' },
  { num: '07', name: 'РИСК_СКОРИНГ',   desc: '\u0421\u043A\u043E\u0440\u0438\u043D\u0433 0\u2013100, \u0444\u0430\u043A\u0442\u044B vs \u043F\u043E\u0434\u043E\u0437\u0440\u0435\u043D\u0438\u044F',        status: 'COMPLETE' },
  { num: '08', name: 'ОТЧЁТ',         desc: '\u0414\u043E\u0441\u044C\u0435, PDF, JSON \u044D\u043A\u0441\u043F\u043E\u0440\u0442',                  status: 'COMPLETE' },
]

export default function Pipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(-1)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setActive(prev => {
        if (prev >= stages.length - 1) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 600)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section id="pipeline" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                       border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          [PIPELINE]
        </div>

        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,64px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-3">
          9 ЭТАПОВ. АВТОМАТИЧЕСКИ.
        </h2>
        <p className="font-[family-name:var(--font-mono)] text-[12px] text-[#E8E0D4]/25
                      tracking-[.06em] mb-16">
          $ shtirlitz --inn 7707083893 --full-scan
        </p>

        {/* Terminal window */}
        <div ref={ref} className="bg-[#111111] border border-[#E8E0D4]/[.08] max-w-3xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E8E0D4]/[.06]">
            <div className="w-2 h-2 bg-[#E8E0D4]/10" />
            <div className="w-2 h-2 bg-[#E8E0D4]/10" />
            <div className="w-2 h-2 bg-[#E8E0D4]/10" />
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/20 ml-3">
              pipeline.exe
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6">
            {stages.map((s, i) => (
              <div key={i}
                   className={`flex items-baseline gap-3 md:gap-4 py-1.5 font-[family-name:var(--font-mono)]
                               transition-all duration-300
                               ${i <= active ? 'opacity-100' : 'opacity-0'}`}
                   style={{ transitionDelay: `${i * 0.05}s` }}>
                {/* Status indicator */}
                <span className={`text-[10px] shrink-0 ${i <= active ? 'text-[#4ADE80]' : 'text-[#E8E0D4]/10'}`}>
                  {i <= active ? '[OK]' : '[--]'}
                </span>
                {/* Stage number */}
                <span className="text-[11px] text-[#E8E0D4]/30 shrink-0 w-6">
                  {s.num}
                </span>
                {/* Stage name */}
                <span className={`text-[12px] shrink-0 w-32 md:w-36
                                  ${i <= active ? 'text-[#E8E0D4]/80' : 'text-[#E8E0D4]/20'}`}>
                  {s.name}
                </span>
                {/* Description */}
                <span className="text-[11px] text-[#E8E0D4]/20 hidden sm:inline">
                  {s.desc}
                </span>
              </div>
            ))}

            {/* Blinking cursor line */}
            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-[#E8E0D4]/[.04]">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#4ADE80]/60">
                {active >= stages.length - 1 ? '> \u0414\u043E\u0441\u044C\u0435 \u0433\u043E\u0442\u043E\u0432\u043E. 9/9 \u044D\u0442\u0430\u043F\u043E\u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E.' : '> \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435...'}
              </span>
              <span className="inline-block w-[7px] h-[14px] bg-[#4ADE80]/70 cursor-blink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
