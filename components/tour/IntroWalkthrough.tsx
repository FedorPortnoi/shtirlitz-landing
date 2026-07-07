'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'
import { LandingSection } from '@/components/landing-ui'

const BEAT_INTERVAL_MS = 1100
const AUTO_ADVANCE_DELAY_MS = 900

function scrollToLogin() {
  document.getElementById('tour-login')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function IntroWalkthrough() {
  const { t } = useLanguage()
  const c = t.intro
  const reduced = useReducedMotion()

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const hasStarted = useRef(false)

  const [visibleCount, setVisibleCount] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    if (reduced) {
      setVisibleCount(c.beats.length)
      const timeout = setTimeout(() => {
        setFinished(true)
        scrollToLogin()
      }, AUTO_ADVANCE_DELAY_MS)
      return () => clearTimeout(timeout)
    }

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setVisibleCount(i)
      if (i >= c.beats.length) {
        clearInterval(interval)
        setTimeout(() => {
          setFinished(true)
          scrollToLogin()
        }, AUTO_ADVANCE_DELAY_MS)
      }
    }, BEAT_INTERVAL_MS)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced])

  const handleSkip = () => {
    hasStarted.current = true
    setVisibleCount(c.beats.length)
    setFinished(true)
    scrollToLogin()
  }

  return (
    <LandingSection id="tour-intro" bordered={false} padding="py-0" innerClassName="w-full">
      <div ref={sectionRef} className="min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-20 relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[.04]">
          <div className="absolute inset-x-0 h-px bg-[#E8E0D4]" style={{ animation: 'scanline 6s linear infinite' }} />
        </div>

        <div className="w-full max-w-xl text-center">
          <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em] uppercase text-[#C4955A]/60 mb-10">
            {c.eyebrow}
          </div>

          <div className="space-y-5 min-h-[160px] md:min-h-[140px]">
            {c.beats.slice(0, visibleCount).map((beat, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-mono)] text-[15px] md:text-[17px] leading-relaxed text-[#E8E0D4]/80 fadeUp"
                style={{ animationDuration: '0.6s' }}
              >
                {beat}
              </p>
            ))}
          </div>

          {finished && (
            <span className="inline-block mt-2 font-[family-name:var(--font-mono)] text-[15px] text-[#C4955A] cursor-blink">
              _
            </span>
          )}
        </div>

        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-6 md:right-16 font-[family-name:var(--font-mono)] text-[10px]
                     tracking-[.15em] uppercase text-[#E8E0D4]/30 py-2 px-3 cursor-pointer
                     transition-colors duration-300 hover:text-[#E8E0D4]/70"
        >
          {finished ? c.continueCta : c.skip}
        </button>
      </div>
    </LandingSection>
  )
}
