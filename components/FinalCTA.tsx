export default function FinalCTA() {
  return (
    <section className="bg-[#0A0A0A] border-t border-[#E8E0D4]/[.06]
                        py-32 md:py-44 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,8vw,100px)]
                       leading-[0.9] tracking-[.03em] text-[#E8E0D4] mb-6">
          {'\u041D\u0410\u0427\u041D\u0418\u0422\u0415'}
          <br />
          <span className="text-[#C4955A]">{'\u041F\u0420\u042F\u041C\u041E \u0421\u0415\u0419\u0427\u0410\u0421'}</span>
        </h2>

        <p className="font-[family-name:var(--font-body)] text-[14px] text-[#E8E0D4]/25 mb-3">
          {'\u041F\u0435\u0440\u0432\u044B\u0435 2 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0411\u0435\u0437 \u043A\u0430\u0440\u0442\u044B.'}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/15
                      tracking-[.1em] mb-14">
          30 {'\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E'}
        </p>

        <a href="https://shtirletzsled.ru/login"
           className="inline-block font-[family-name:var(--font-mono)] text-[11px] font-medium
                      tracking-[.22em] uppercase
                      border border-[#C4955A] text-[#C4955A]
                      px-14 py-4 no-underline
                      transition-all duration-300
                      hover:bg-[#C4955A] hover:text-[#0A0A0A]">
          {'\u041F\u041E\u041F\u0420\u041E\u0411\u041E\u0412\u0410\u0422\u042C \u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E'}
        </a>
      </div>
    </section>
  )
}
