'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'
import { useTour } from './TourContext'
import { LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

type LogLine = { stage: string; text: string }

export default function PipelineRun() {
  const { t } = useLanguage()
  const { checkType, subject, runToken } = useTour()
  const c = t.tour.pipeline
  const stages = c.stages[checkType]

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '-100px' })
  const hasAutoStarted = useRef(false)
  const lastToken = useRef(runToken)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [activeStage, setActiveStage] = useState(-1)
  const [logLines, setLogLines] = useState<LogLine[]>([])

  const displaySubject = subject.trim() || c.subjectFallback[checkType]

  // Interval lifecycle lives in a ref, not an effect cleanup, so an unrelated
  // inView update (fired async by IntersectionObserver mid smooth-scroll) can't
  // implicitly clear an interval a runToken-triggered restart just started.
  const runPipeline = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActiveStage(-1)
    setLogLines([])
    let i = -1
    intervalRef.current = setInterval(() => {
      i += 1
      setActiveStage(i)
      setLogLines(prev => [...prev, { stage: stages[i].name, text: `[OK] ${stages[i].desc}` }])
      if (i >= stages.length - 1 && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 420)
  }, [stages])

  useEffect(() => {
    if (!inView || hasAutoStarted.current) return
    hasAutoStarted.current = true
    runPipeline()
  }, [inView, runPipeline])

  useEffect(() => {
    if (runToken === lastToken.current) return
    lastToken.current = runToken
    hasAutoStarted.current = true
    runPipeline()
  }, [runToken, runPipeline])

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const isComplete = activeStage >= stages.length - 1
  const progressPct = activeStage < 0 ? 0 : Math.round(((activeStage + 1) / stages.length) * 100)

  return (
    <LandingSection id="tour-pipeline">
      <SectionLabel>{c.eyebrow}</SectionLabel>
      <SectionTitle className="mb-3">
        {c.heading}
      </SectionTitle>
      <p className="font-[family-name:var(--font-mono)] text-[13px] text-[#C4955A]/70 mb-14">
        {displaySubject}
      </p>

      <div ref={sectionRef} className="max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-[12px] mb-2 font-[family-name:var(--font-mono)]">
            <span className="text-[#E8E0D4]/30">
              {activeStage < 0 ? c.progressLabel : (isComplete ? c.completeLabel : stages[activeStage].name)}
            </span>
            <span className="text-[#C4955A]">{progressPct}%</span>
          </div>
          <div className="h-[3px] bg-[#111111] overflow-hidden">
            <div className="h-full bg-[#C4955A] transition-[width] duration-500 ease-out" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Stage list */}
        <div className="space-y-2 mb-8">
          {stages.map((s, i) => {
            const done = i <= activeStage
            const active = i === activeStage && !isComplete
            return (
              <div key={s.id}
                   className={`flex items-center gap-3 p-3 border transition-colors duration-300
                               ${active ? 'border-[#C4955A]/50 bg-[#C4955A]/[.04]' : done ? 'border-[#4ADE80]/20' : 'border-[#E8E0D4]/[.06]'}
                               bg-[#1A1A1A]`}>
                <span className="text-[16px] shrink-0">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] text-[#E8E0D4]/75 font-medium">{s.name}</div>
                  <div className="text-[11px] text-[#E8E0D4]/25 truncate">{s.desc}</div>
                </div>
                <span className={`font-[family-name:var(--font-mono)] text-[10px] shrink-0
                                  ${done ? 'text-[#4ADE80]' : active ? 'text-[#C4955A]' : 'text-[#E8E0D4]/20'}`}>
                  {done ? '✓' : active ? '...' : '·'}
                </span>
              </div>
            )
          })}
        </div>

        {/* Log */}
        <div className="bg-[#111111] border border-[#E8E0D4]/[.08] p-5">
          <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em] uppercase text-[#E8E0D4]/25 mb-3">
            {c.logHeading}
          </div>
          <div className="space-y-1 max-h-[220px] overflow-y-auto font-[family-name:var(--font-mono)] text-[11px]">
            {logLines.length === 0 && (
              <div className="text-[#E8E0D4]/15">···</div>
            )}
            {logLines.map((l, i) => (
              <div key={i} className="text-[#4ADE80]/70">{l.text}</div>
            ))}
          </div>
        </div>
      </div>
    </LandingSection>
  )
}
