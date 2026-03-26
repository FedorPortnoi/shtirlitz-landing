export default function Footer() {
  return (
    <footer className="border-t border-[#E8E0D4]/[.06] bg-[#0A0A0A]">
      <div className="px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-bebas)] text-[16px] tracking-[.1em] text-[#C4955A]/40">
            {'\u0428'}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[.15em]
                           uppercase text-[#E8E0D4]/15">
            OSINT PLATFORM &middot; 152-{'\u0424\u0417'} COMPLIANT
          </span>
        </div>

        <div className="flex gap-8">
          {[
            ['\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C', 'https://shtirletzsled.ru/privacy'],
            ['\u0412\u043E\u0439\u0442\u0438', 'https://shtirletzsled.ru/login'],
          ].map(([label, href]) => (
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
