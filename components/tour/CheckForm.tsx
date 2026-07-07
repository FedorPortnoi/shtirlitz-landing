'use client'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { useTour } from './TourContext'
import { LandingSection, SectionLabel, SectionTitle } from '@/components/landing-ui'

function scrollToPipeline() {
  document.getElementById('tour-pipeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CheckForm() {
  const { t } = useLanguage()
  const { checkType, subject, setSubject, inn, setInn, startRun } = useTour()
  const c = t.tour.form
  const isCompany = checkType === 'company'

  const [dob, setDob] = useState('')
  const [mode, setMode] = useState<'quick' | 'precise'>('quick')
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    setDob('')
    setConsent(false)
    setInn('')
    setSubject(isCompany ? c.companyNameDefault : '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkType])

  const filled = isCompany
    ? inn.trim().length > 0
    : subject.trim().length > 0 && dob.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!filled || !consent) return
    startRun(Math.random() < 0.5 ? 0 : 1)
    scrollToPipeline()
  }

  return (
    <LandingSection id="tour-form">
      <SectionLabel>{c.eyebrow}</SectionLabel>
      <SectionTitle className="mb-10">
        {c.heading}
      </SectionTitle>

      <form onSubmit={handleSubmit} className="max-w-2xl bg-[#1A1A1A] border border-[#E8E0D4]/[.06] p-7 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="md:col-span-2">
            <label htmlFor="tf-name" className="block font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                                  uppercase text-[#E8E0D4]/30 mb-2">
              {isCompany ? c.companyNameLabel : c.nameLabel}
            </label>
            <input id="tf-name" value={subject} onChange={(e) => setSubject(e.target.value)}
                   placeholder={isCompany ? c.companyNameDefault : c.namePlaceholder}
                   className="w-full bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-body)]
                              text-[14px] text-[#E8E0D4] placeholder:text-[#E8E0D4]/20 outline-none
                              focus:border-[#C4955A]/60 transition-colors duration-200" />
          </div>
          {isCompany ? (
            <div>
              <label htmlFor="tf-inn" className="block font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                                   uppercase text-[#E8E0D4]/30 mb-2">
                {c.innLabel}
              </label>
              <input id="tf-inn" value={inn} onChange={(e) => setInn(e.target.value)}
                     placeholder={c.companyInnPlaceholder} maxLength={10}
                     className="w-full bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-mono)]
                                text-[13px] text-[#E8E0D4] placeholder:text-[#E8E0D4]/20 outline-none
                                focus:border-[#C4955A]/60 transition-colors duration-200" />
            </div>
          ) : (
            <div>
              <label htmlFor="tf-dob" className="block font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                                   uppercase text-[#E8E0D4]/30 mb-2">
                {c.dobLabel}
              </label>
              <input id="tf-dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)}
                     className="w-full bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-mono)]
                                text-[13px] text-[#E8E0D4] outline-none focus:border-[#C4955A]/60 transition-colors duration-200" />
            </div>
          )}
        </div>

        {!isCompany && (
          <div className="mb-6">
            <label htmlFor="tf-inn" className="block font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                                 uppercase text-[#E8E0D4]/30 mb-2">
              {c.innLabel}
            </label>
            <input id="tf-inn" value={inn} onChange={(e) => setInn(e.target.value)}
                   placeholder={c.innPlaceholder} maxLength={12}
                   className="w-full md:w-1/3 bg-[#111111] border border-[#E8E0D4]/[.1] px-4 py-3 font-[family-name:var(--font-mono)]
                              text-[13px] text-[#E8E0D4] placeholder:text-[#E8E0D4]/20 outline-none
                              focus:border-[#C4955A]/60 transition-colors duration-200" />
          </div>
        )}

        {!isCompany && (
          <div className="mb-6">
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em] uppercase text-[#E8E0D4]/30 mb-2">
              {c.modeLabel}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(['quick', 'precise'] as const).map((m) => {
                const cfg = m === 'quick' ? c.modeQuick : c.modePrecise
                const active = mode === m
                return (
                  <button type="button" key={m} onClick={() => setMode(m)}
                          className={`text-left p-4 border transition-colors duration-200 cursor-pointer
                                      ${active ? 'border-[#C4955A]/60 bg-[#C4955A]/[.05]' : 'border-[#E8E0D4]/[.08] hover:border-[#E8E0D4]/[.18]'}`}>
                    <div className="text-[13px] text-[#E8E0D4] font-medium mb-1">{cfg.title}</div>
                    <div className="text-[11px] text-[#E8E0D4]/30">{cfg.desc}</div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="mb-6 px-4 py-3 bg-[#111111] border border-[#E8E0D4]/[.06]
                        font-[family-name:var(--font-body)] text-[12px] text-[#E8E0D4]/40">
          {isCompany
            ? (filled ? c.companyQualityFilled : c.companyQualityEmpty)
            : (filled ? c.qualityFilled : c.qualityEmpty)}
        </div>

        <label className="flex items-start gap-2.5 mb-6 cursor-pointer">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
                 className="mt-[3px] w-4 h-4 accent-[#C4955A] shrink-0" />
          <span className="font-[family-name:var(--font-body)] text-[11px] text-[#E8E0D4]/30 leading-relaxed">
            {isCompany ? c.consentTextCompany : c.consentText}
          </span>
        </label>

        <button type="submit" disabled={!filled || !consent}
                className="w-full font-[family-name:var(--font-mono)] font-medium uppercase text-[12px]
                           tracking-[.2em] bg-[#C4955A] text-[#0A0A0A] py-4
                           transition-colors duration-300 hover:bg-[#D4A56A]
                           disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-[#C4955A] cursor-pointer">
          {c.submitCta}
        </button>
      </form>

      <div className="mt-6 max-w-2xl bg-[#1A1A1A] p-5 border border-[#E8E0D4]/[.06]">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em] uppercase text-[#C4955A]/60 mb-3">
          {c.coverageLabel}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {c.coverageItems.map((item) => (
            <div key={item} className="font-[family-name:var(--font-body)] text-[12px] text-[#E8E0D4]/40">
              <span className="text-[#C4955A] mr-1">+</span>{item}
            </div>
          ))}
        </div>
      </div>
    </LandingSection>
  )
}
