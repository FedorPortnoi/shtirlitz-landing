'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  { param: '\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438',     sled: '5\u201315 \u043C\u0438\u043D\u0443\u0442',         bur: '1\u20132 \u0447\u0430\u0441\u0430'              },
  { param: '\u041D\u0443\u0436\u0435\u043D \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A',     sled: '\u041D\u0435 \u043D\u0443\u0436\u0435\u043D',               bur: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D'              },
  { param: '\u0421\u043E\u0446\u0441\u0435\u0442\u0438 (VK, TG)',   sled: '\u0415\u0441\u0442\u044C',                   bur: '\u041D\u0435\u0442'                     },
  { param: '\u0411\u0430\u0437\u044B \u0443\u0442\u0435\u0447\u0435\u043A',        sled: '\u0415\u0441\u0442\u044C',                   bur: '\u041D\u0435\u0442'                     },
  { param: '\u0420\u0438\u0441\u043A-\u0441\u043A\u043E\u0440\u0438\u043D\u0433 0\u2013100', sled: '\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438',     bur: '\u041D\u0435\u0442'                     },
  { param: 'API \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439',  sled: '\u0421\u043A\u043E\u0440\u043E',                  bur: '\u041D\u0435\u0442'                     },
  { param: '\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C',          sled: '\u043E\u0442 1\u00A0500 \u20BD/\u043C\u0435\u0441',      bur: '25\u00A0000 \u20BD/\u0433\u043E\u0434 + \u043A\u0443\u0440\u0441' },
  { param: '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F',  sled: '2 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438/\u043D\u0435\u0434\u0435\u043B\u044E',       bur: '\u041D\u0435\u0442'                     },
]

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="comparison" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                         border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-6xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-16">
          {'[\u0421\u0420\u0410\u0412\u041D\u0415\u041D\u0418\u0415]'}
        </div>

        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,64px)]
                       leading-[1] tracking-[.02em] text-[#E8E0D4] mb-4">
          {'\u0428\u0422\u0418\u0420\u041B\u0418\u0426 VS \u0411\u0423\u0420\u0410\u0422\u0418\u041D\u041E'}
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/25 mb-16">
          {'\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0411\u0443\u0440\u0430\u0442\u0438\u043D\u043E \u0438\u0437 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432'}
        </p>

        <div ref={ref}
             className="transition-all duration-700 overflow-x-auto"
             style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}>

          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] min-w-[600px] border-b border-[#E8E0D4]/[.08]
                          pb-4 mb-2">
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#E8E0D4]/20 px-4">
              {'\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440'}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#C4955A] px-4">
              {'\u0428\u0422\u0418\u0420\u041B\u0418\u0426'}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.15em]
                            uppercase text-[#E8E0D4]/15 px-4">
              {'\u0418\u0410\u0421 \u0411\u0443\u0440\u0430\u0442\u0438\u043D\u043E'}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i}
                 className="grid grid-cols-[1fr_1fr_1fr] min-w-[600px] py-3.5
                            border-b border-[#E8E0D4]/[.04]
                            transition-colors hover:bg-[#E8E0D4]/[.01]">
              <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/40 px-4">
                {row.param}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[13px] text-[#E8E0D4]/80 px-4">
                {row.sled}
              </div>
              <div className="font-[family-name:var(--font-body)] text-[13px] text-[#E8E0D4]/15 px-4
                              line-through decoration-[#E8E0D4]/10">
                {row.bur}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
