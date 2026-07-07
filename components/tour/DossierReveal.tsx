'use client'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageContext'
import { APP_URL } from '@/app/translations'
import { useTour } from './TourContext'
import { CtaLink, LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

type TileColor = 'green' | 'amber' | 'red' | 'dim'
const STRIPE: Record<TileColor, string> = {
  green: '#EBDBBC',
  amber: '#CC785C',
  red: '#CC5247',
  dim: '#666663',
}
const TILE_ORDER = ['identity', 'business', 'courts', 'financial', 'sanctions', 'media', 'social', 'graph'] as const

function riskColor(score: number) {
  if (score < 30) return '#EBDBBC'
  if (score < 60) return '#D4A27F'
  if (score < 80) return '#CC785C'
  return '#CC5247'
}

export default function DossierReveal() {
  const { t } = useLanguage()
  const { checkType, subject, outcomeIndex, runToken } = useTour()
  const c = t.tour.dossier
  const outcome = c.outcomes[checkType][outcomeIndex]
  const tileLabels = c.tileLabels[checkType]
  const reduced = useReducedMotion()

  const [openTile, setOpenTile] = useState<string | null>(null)
  const [displayScore, setDisplayScore] = useState(0)

  const subjectFallback = checkType === 'company' ? c.companySubjectFallback : c.personSubjectFallback[outcomeIndex]
  const displaySubject = subject.trim() || subjectFallback
  const color = riskColor(outcome.riskScore)

  useEffect(() => {
    setOpenTile(null)
    if (reduced) { setDisplayScore(outcome.riskScore); return }
    let raf: number
    const start = performance.now()
    const duration = 800
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setDisplayScore(Math.round(p * outcome.riskScore))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [outcome.riskScore, runToken, reduced])

  return (
    <LandingSection id="tour-dossier">
      <SectionLabel>{c.eyebrow}</SectionLabel>
      <SectionTitle className="mb-10">
        {c.heading}
      </SectionTitle>

      <div className="max-w-3xl">
        {/* Identity bar */}
        <div className="flex items-center gap-5 bg-[#1A1A1A] border border-[#E8E0D4]/[.06] p-5 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#E8E0D4]/[.06] flex items-center justify-center text-[20px] text-[#E8E0D4]/30 shrink-0">
            ◉
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[17px] font-semibold text-[#E8E0D4] tracking-tight truncate">{displaySubject}</div>
            <div className="flex flex-wrap gap-4 mt-1">
              <span className="text-[11px] text-[#E8E0D4]/40">
                <span className="text-[#E8E0D4]/20 mr-1">{c.sourcesLabel}</span>12
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="text-[28px] font-extrabold leading-none" style={{ color }}>{displayScore}</div>
            <div className="w-[64px] h-[3px] bg-[#111111] overflow-hidden rounded-full">
              <div className="h-full rounded-full transition-[width] duration-700 ease-out" style={{ width: `${displayScore}%`, background: color }} />
            </div>
            <div className="text-[9px] uppercase tracking-[.1em] text-[#E8E0D4]/25">{c.riskCaption}</div>
          </div>
        </div>

        {/* AI summary box */}
        <div className="bg-[#1A1A1A] border border-[#E8E0D4]/[.06] p-6 mb-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.15em] uppercase text-[#E8E0D4]/25 mb-2">
                {c.aiSummaryLabel}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-[9px] h-[9px] rounded-sm" style={{ background: color }} />
                <span className="text-[18px] font-bold text-[#E8E0D4]">{outcome.riskLabel}</span>
              </div>
              <p className="text-[13px] text-[#E8E0D4]/40 max-w-sm">{outcome.riskDesc}</p>
              <div className="w-[220px] h-[5px] bg-[#111111] rounded-full mt-4 overflow-hidden"
                   style={{ background: 'linear-gradient(90deg,#111111,#111111)' }}>
                <div className="h-full rounded-full" style={{
                  width: '100%',
                  background: 'linear-gradient(90deg,#EBDBBC,#D4A27F,#CC785C,#CC5247)',
                }} />
              </div>
            </div>
            <div className="text-right">
              <span className="text-[44px] font-extrabold leading-none" style={{ color }}>{outcome.riskScore}</span>
              <span className="text-[14px] text-[#E8E0D4]/40">/100</span>
            </div>
          </div>
        </div>

        {/* Tile grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {TILE_ORDER.map((key) => {
            const tile = outcome.tiles[key]
            const stripe = STRIPE[tile.color as TileColor]
            const active = openTile === key
            return (
              <button
                key={key}
                onClick={() => setOpenTile(active ? null : key)}
                className={`relative aspect-square flex flex-col items-center justify-center gap-2 p-4 text-center
                            bg-gradient-to-br from-white/[.03] to-black/[.15] border transition-all duration-200
                            cursor-pointer hover:-translate-y-1
                            ${active ? 'border-[#E8E0D4]/25' : 'border-[#E8E0D4]/[.08] hover:border-[#E8E0D4]/20'}`}
              >
                <span className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: stripe, opacity: 0.9 }} />
                <span className="text-[26px] leading-none" style={{ color: stripe }}>{c.tileIcons[key]}</span>
                <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[.1em] text-[#E8E0D4]/25">
                  {tileLabels[key]}
                </span>
                <span className="text-[11px] font-semibold text-[#E8E0D4] leading-tight">{tile.main}</span>
                <span className="text-[9px] font-bold uppercase tracking-[.05em] px-2 py-[3px] rounded-full"
                      style={{ color: stripe, background: `${stripe}22`, border: `1px solid ${stripe}55` }}>
                  {tile.badge}
                </span>
              </button>
            )
          })}
        </div>

        {/* Expanded panel */}
        {openTile && (() => {
          const key = openTile as typeof TILE_ORDER[number]
          const tile = outcome.tiles[key]
          const stripe = STRIPE[tile.color as TileColor]
          return (
            <div className="bg-[#1A1A1A] border border-[#E8E0D4]/[.08] mb-6 fadeUp" style={{ animationDuration: '0.3s' }}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E0D4]/[.06]">
                <div className="flex items-center gap-3">
                  <span className="text-[20px]" style={{ color: stripe }}>{c.tileIcons[key]}</span>
                  <span className="text-[15px] font-semibold text-[#E8E0D4]">{tileLabels[key]}</span>
                </div>
                <button onClick={() => setOpenTile(null)} aria-label="Close"
                        className="text-[#E8E0D4]/30 hover:text-[#E8E0D4]/70 text-[18px] leading-none px-2 cursor-pointer transition-colors">
                  ×
                </button>
              </div>
              <div className="px-6 py-5">
                <p className="text-[14px] text-[#E8E0D4]/75 mb-1">{tile.main}</p>
                <p className="text-[12px] text-[#E8E0D4]/30 font-[family-name:var(--font-mono)]">{tile.sub}</p>
              </div>
            </div>
          )
        })()}

        <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.06em] text-[#E8E0D4]/15 mb-6">
          {c.disclaimer}
        </p>

        <div className="flex flex-col gap-3 max-w-md">
          <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/35 leading-relaxed">
            {c.ctaLine}
          </p>
          <CtaLink href={APP_URL}
             className="text-center text-[11px] tracking-[.2em] bg-[#C4955A] text-[#0A0A0A] px-8 py-3.5
                        hover:bg-[#D4A56A]">
            {c.ctaButton}
          </CtaLink>
          <button onClick={() => document.getElementById('tour-type')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em] uppercase
                             text-[#E8E0D4]/30 py-2 cursor-pointer transition-colors duration-300 hover:text-[#E8E0D4]/60">
            {c.runAgain}
          </button>
        </div>
      </div>
    </LandingSection>
  )
}
