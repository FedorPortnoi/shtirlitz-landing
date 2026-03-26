'use client'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Pipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(-1)
  const { t } = useLanguage()

  const stages = t.pipeline.stages

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
  }, [inView, stages.length])

  return (
    <section id="pipeline" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                       border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          {t.pipeline.label}
        </div>

        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,64px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-3">
          {t.pipeline.heading}
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
                  {String(i).padStart(2, '0')}
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
                {active >= stages.length - 1 ? t.pipeline.complete : t.pipeline.scanning}
              </span>
              <span className="inline-block w-[7px] h-[14px] bg-[#4ADE80]/70 cursor-blink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
