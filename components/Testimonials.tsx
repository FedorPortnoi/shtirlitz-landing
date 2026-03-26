const testimonials = [
  {
    text: '\u0420\u0430\u043D\u044C\u0448\u0435 \u0442\u0440\u0430\u0442\u0438\u043B\u0438 \u043F\u043E\u043B\u0434\u043D\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430. \u0422\u0435\u043F\u0435\u0440\u044C 10 \u043C\u0438\u043D\u0443\u0442 \u2014 \u0438 \u043F\u043E\u043B\u043D\u043E\u0435 \u0434\u043E\u0441\u044C\u0435 \u0433\u043E\u0442\u043E\u0432\u043E. \u041D\u0430\u0448\u043B\u0438 \u0441\u0443\u0434\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u043B\u0430 \u043E \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u043D\u044C\u0448\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u043B\u0438.',
    author: '\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438',
    org: '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F',
  },
  {
    text: '\u041F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u0411\u0443\u0440\u0430\u0442\u0438\u043D\u043E \u2014 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0430\u0441\u044B. \u0428\u0422\u0418\u0420\u041B\u0418\u0426 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0439 HR \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440. \u0420\u0438\u0441\u043A-\u0441\u043A\u043E\u0440\u0438\u043D\u0433 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435.',
    author: 'HR \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440',
    org: '\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F',
  },
  {
    text: '\u041E\u043A\u0443\u043F\u0438\u043B\u0441\u044F \u0437\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E. \u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B\u0438 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430 \u0441 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u043D\u0430 \u043A\u0440\u0443\u043F\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u2014 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u043D \u0441\u043A\u0440\u044B\u043B \u043D\u0430 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0438.',
    author: '\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0421\u0411',
    org: '\u0422\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u0441\u0435\u0442\u044C',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] py-28 md:py-36 px-6 md:px-16
                                           border-t border-[#E8E0D4]/[.06]">
      <div className="max-w-4xl mx-auto">
        <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em]
                        uppercase text-[#C4955A]/60 mb-20">
          {'[\u041E\u0422\u0417\u042B\u0412\u042B]'}
        </div>

        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <div key={i}>
              {/* Horizontal line */}
              {i > 0 && <div className="h-[1px] bg-[#E8E0D4]/[.06] my-14" />}

              <blockquote className="relative">
                {/* Quote text with guillemets */}
                <p className="font-[family-name:var(--font-body)] text-[16px] md:text-[18px]
                              text-[#E8E0D4]/50 leading-[1.7] italic
                              pl-0 md:pl-12">
                  <span className="font-[family-name:var(--font-bebas)] text-[32px] text-[#C4955A]/30
                                   not-italic absolute left-0 -top-2 hidden md:block">
                    &laquo;
                  </span>
                  <span className="md:hidden">&laquo;</span>
                  {t.text}
                  <span className="md:hidden">&raquo;</span>
                  <span className="font-[family-name:var(--font-bebas)] text-[32px] text-[#C4955A]/30
                                   not-italic hidden md:inline ml-1 align-text-bottom">
                    &raquo;
                  </span>
                </p>

                {/* Author */}
                <div className="mt-6 pl-0 md:pl-12 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-[#C4955A]/30" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[.1em]
                                   uppercase text-[#E8E0D4]/25">
                    {t.author}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/12">
                    / {t.org}
                  </span>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
