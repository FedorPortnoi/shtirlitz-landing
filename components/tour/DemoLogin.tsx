'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'
import { LandingSection } from '@/components/landing-ui'

type Phase = 'init' | 'verify' | 'granted'

function scrollToDashboard() {
  document.getElementById('tour-type')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function DemoLogin() {
  const { t } = useLanguage()
  const c = t.login
  const reduced = useReducedMotion()

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const hasStarted = useRef(false)

  const [phase, setPhase] = useState<Phase>('init')

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    if (reduced) {
      setPhase('granted')
      const timeout = setTimeout(scrollToDashboard, 900)
      return () => clearTimeout(timeout)
    }

    const t1 = setTimeout(() => setPhase('verify'), 600)
    const t2 = setTimeout(() => setPhase('granted'), 1500)
    const t3 = setTimeout(scrollToDashboard, 2300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [inView, reduced])

  const handleContinue = () => {
    hasStarted.current = true
    setPhase('granted')
    scrollToDashboard()
  }

  const statusText = phase === 'init' ? c.statusInit : phase === 'verify' ? c.statusVerify : c.statusGranted
  const granted = phase === 'granted'

  return (
    <LandingSection id="tour-login" bordered={false} padding="py-0" innerClassName="w-full">
      <div ref={sectionRef} className="min-h-[100dvh] flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-sm bg-[#1A1A1A] border border-[#E8E0D4]/[.08] p-8 md:p-10">
          <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[.25em] uppercase text-[#C4955A]/70 text-center mb-8">
            {c.title}
          </div>

          <div className="mb-4">
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em] uppercase text-[#E8E0D4]/30 mb-2">
              {c.usernameLabel}
            </div>
            <div className="w-full bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-mono)] text-[13px] text-[#E8E0D4]/70">
              {c.usernameValue}
            </div>
          </div>

          <div className="mb-7">
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em] uppercase text-[#E8E0D4]/30 mb-2">
              {c.passwordLabel}
            </div>
            <div className="w-full bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-mono)] text-[13px] text-[#E8E0D4]/70 tracking-[.1em]">
              {c.passwordValue}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-7 px-4 py-3 bg-[#111111] border border-[#E8E0D4]/[.06]">
            <span className={`font-[family-name:var(--font-mono)] text-[12px] shrink-0 ${granted ? 'text-[#4ADE80]' : 'text-[#C4955A]'}`}>
              {granted ? '✓' : '...'}
            </span>
            <span className={`font-[family-name:var(--font-mono)] text-[12px] ${granted ? 'text-[#4ADE80]' : 'text-[#E8E0D4]/50'}`}>
              {statusText}
            </span>
          </div>

          <button
            onClick={handleContinue}
            className="w-full font-[family-name:var(--font-mono)] font-medium uppercase text-[12px]
                       tracking-[.2em] bg-[#C4955A] text-[#0A0A0A] py-3.5
                       transition-colors duration-300 hover:bg-[#D4A56A] cursor-pointer"
          >
            {granted ? c.continueCta : c.skip}
          </button>
        </div>
      </div>
    </LandingSection>
  )
}
