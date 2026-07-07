'use client'
import { useLanguage } from '@/app/LanguageContext'
import { APP_URL, PRIVACY_URL } from '@/app/translations'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-[#E8E0D4]/[.06] bg-[#0A0A0A]">
      <div className="px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-bebas)] text-[16px] tracking-[.1em] text-[#C4955A]/40">
            Ш
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.15em]
                           uppercase text-[#E8E0D4]/15">
            {t.footer.platform}
          </span>
        </div>

        <div className="flex gap-8">
          {([
            [t.footer.privacy, PRIVACY_URL],
            [t.footer.login, APP_URL],
          ] as const).map(([label, href]) => (
            <a key={href} href={href}
               className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.12em]
                          uppercase text-[#E8E0D4]/15 no-underline
                          transition-colors duration-300 hover:text-[#C4955A]/60">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
