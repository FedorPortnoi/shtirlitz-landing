export type Lang = 'ru' | 'en'

type PainCard = { title: string; text: string }
type Stage = { name: string; desc: string }
type ComparisonRow = { param: string; sled: string; bur: string }
type Plan = {
  label: string
  amount: string
  currency: string
  period: string
  features: string[]
  cta: string
  href: string
  featured: boolean
}
type Testimonial = { text: string; author: string; org: string }

type Translations = {
  nav: {
    problem: string
    pipeline: string
    comparison: string
    pricing: string
    login: string
  }
  hero: {
    title: string
    subtitle: string
    tags: string
    cta: string
    subtext: string
  }
  pain: {
    label: string
    heading: string
    subheading: string
    cards: PainCard[]
  }
  pipeline: {
    label: string
    heading: string
    stages: Stage[]
    complete: string
    scanning: string
  }
  comparison: {
    label: string
    heading: string
    subtext: string
    paramHeader: string
    sledHeader: string
    burHeader: string
    rows: ComparisonRow[]
  }
  pricing: {
    label: string
    heading: string
    plans: Plan[]
  }
  testimonials: {
    label: string
    items: Testimonial[]
  }
  finalCta: {
    line1: string
    line2: string
    subtext: string
    timeNote: string
    cta: string
  }
  footer: {
    platform: string
    privacy: string
    login: string
  }
}

const APP_URL = 'https://shtirletzsled.ru/login'

export const translations: Record<Lang, Translations> = {
  ru: {
    nav: {
      problem: 'Проблема',
      pipeline: 'Pipeline',
      comparison: 'Сравнение',
      pricing: 'Тарифы',
      login: 'ВОЙТИ',
    },
    hero: {
      title: 'ШТИРЛИЦ',
      subtitle: 'Буратино за 5 минут. Автоматически.',
      tags: 'СУДЫ / ФССП / ЕГРЮЛ / ВКОНТАКТЕ / TELEGRAM / САНКЦИИ',
      cta: 'ПОПРОБОВАТЬ БЕСПЛАТНО',
      subtext: '2 ПРОВЕРКИ / НЕДЕЛЮ \u00B7 БЕЗ КАРТЫ',
    },
    pain: {
      label: '[ПРОБЛЕМА]',
      heading: 'ВЫ ТРАТИТЕ 2 ЧАСА НА ТО, ЧТО МОЖНО СДЕЛАТЬ ЗА 5 МИНУТ',
      subheading: 'ИАС Буратино создан для обученных аналитиков. Вашему бизнесу нужна автоматизация.',
      cards: [
        {
          title: 'АНАЛИТИК РАБОТАЕТ ЧАСАМИ',
          text: 'Буратино \u2014 инструмент для специалистов. Каждая проверка требует обученного аналитика и занимает 1\u20132 часа ручной работы.',
        },
        {
          title: 'ТОЛЬКО ГОСРЕЕСТРЫ',
          text: 'Нет соцсетей, нет анализа утечек, нет поведенческого анализа. Кандидат может скрыть риски которые Буратино не видит.',
        },
        {
          title: 'СКРЫТЫЕ РАСХОДЫ',
          text: '25\u00A0000 \u20BD/год за лицензию + 30\u201399k \u20BD за курс обучения. Плюс зарплата аналитика. Реальная стоимость \u2014 сотни тысяч в год.',
        },
      ],
    },
    pipeline: {
      label: '[PIPELINE]',
      heading: '9 ЭТАПОВ. АВТОМАТИЧЕСКИ.',
      stages: [
        { name: 'ЛИЧНОСТЬ', desc: 'ЕГРЮЛ по ИНН, подтверждение личности' },
        { name: 'РЕЕСТРЫ', desc: 'Суды, ФССП, залоги, банкротство' },
        { name: 'БЕЗОПАСНОСТЬ', desc: 'Санкции, МВД, Интерпол, экстремисты' },
        { name: 'СОЦСЕТИ', desc: 'ВКонтакте, Telegram, Одноклассники' },
        { name: 'КОНТАКТЫ', desc: 'Телефоны, email, утечки данных' },
        { name: 'ГЛУБОКИЙ_АНАЛИЗ', desc: 'Социальный граф, Search4Faces' },
        { name: 'ПОВЕДЕНИЕ', desc: 'Анализ постов, last_seen, геолокации' },
        { name: 'РИСК_СКОРИНГ', desc: 'Скоринг 0\u2013100, факты vs подозрения' },
        { name: 'ОТЧЁТ', desc: 'Досье, PDF, JSON экспорт' },
      ],
      complete: '> Досье готово. 9/9 этапов завершено.',
      scanning: '> Сканирование...',
    },
    comparison: {
      label: '[СРАВНЕНИЕ]',
      heading: 'ШТИРЛИЦ VS БУРАТИНО',
      subtext: 'Данные о Буратино из открытых публичных источников',
      paramHeader: 'Параметр',
      sledHeader: 'ШТИРЛИЦ',
      burHeader: 'ИАС Буратино',
      rows: [
        { param: 'Время проверки', sled: '5\u201315 минут', bur: '1\u20132 часа' },
        { param: 'Нужен аналитик', sled: 'Не нужен', bur: 'Обязателен' },
        { param: 'Соцсети (VK, TG)', sled: 'Есть', bur: 'Нет' },
        { param: 'Базы утечек', sled: 'Есть', bur: 'Нет' },
        { param: 'Риск-скоринг 0\u2013100', sled: 'Автоматически', bur: 'Нет' },
        { param: 'API для интеграций', sled: 'Скоро', bur: 'Нет' },
        { param: 'Стоимость', sled: 'от 1\u00A0500 \u20BD/мес', bur: '25\u00A0000 \u20BD/год + курс' },
        { param: 'Бесплатный доступ', sled: '2 проверки/неделю', bur: 'Нет' },
      ],
    },
    pricing: {
      label: '[ТАРИФЫ]',
      heading: 'НАЧНИТЕ БЕСПЛАТНО',
      plans: [
        {
          label: 'FREE',
          amount: '0',
          currency: '₽',
          period: 'навсегда',
          features: ['2 проверки в неделю', 'Все 9 этапов pipeline', 'PDF экспорт', 'Риск-скоринг 0–100'],
          cta: 'НАЧАТЬ БЕСПЛАТНО',
          href: APP_URL,
          featured: false,
        },
        {
          label: 'PRO',
          amount: '1500',
          currency: '₽',
          period: 'в месяц / безлимит',
          features: ['Безлимитные проверки', 'Все источники данных', 'PDF + JSON экспорт', 'История проверок', 'Приоритетная обработка'],
          cta: 'ОФОРМИТЬ ПОДПИСКУ',
          href: APP_URL,
          featured: true,
        },
        {
          label: 'ENTERPRISE',
          amount: 'По запросу',
          currency: '',
          period: 'индивидуальные условия',
          features: [
            'Полная интеграция в ваши системы',
            'Ваши HR и СБ получают то же что видит наш админ',
            'Неограниченное число пользователей',
            'Персональный менеджер и поддержка 24/7',
            'Соответствие 152-ФЗ под ключ',
          ],
          cta: 'ОБСУДИТЬ УСЛОВИЯ',
          href: 'mailto:enterprise@shtirletzsled.ru',
          featured: false,
        },
      ],
    },
    testimonials: {
      label: '[ОТЗЫВЫ]',
      items: [
        {
          text: 'Раньше тратили полдня на одного кандидата. Теперь 10 минут \u2014 и полное досье готово. Нашли судебные дела о мошенничестве которые раньше пропускали.',
          author: 'Директор по безопасности',
          org: 'Производственная компания',
        },
        {
          text: 'Пробовали Буратино \u2014 требует обученного специалиста и занимает часы. ШТИРЛИЦ запускает любой HR менеджер. Риск-скоринг сразу показывает на что обратить внимание.',
          author: 'HR директор',
          org: 'Финансовая организация',
        },
        {
          text: 'Окупился за первую неделю. Обнаружили кандидата с активным исполнительным производством на крупную сумму \u2014 информацию которую он скрыл на собеседовании.',
          author: 'Руководитель СБ',
          org: 'Торговая сеть',
        },
      ],
    },
    finalCta: {
      line1: 'НАЧНИТЕ',
      line2: 'ПРЯМО СЕЙЧАС',
      subtext: 'Первые 2 проверки \u2014 бесплатно. Без карты.',
      timeNote: '30 секунд на регистрацию',
      cta: 'ПОПРОБОВАТЬ БЕСПЛАТНО',
    },
    footer: {
      platform: 'OSINT PLATFORM \u00B7 152-ФЗ COMPLIANT',
      privacy: 'Конфиденциальность',
      login: 'Войти',
    },
  },
  en: {
    nav: {
      problem: 'Problem',
      pipeline: 'Pipeline',
      comparison: 'Comparison',
      pricing: 'Pricing',
      login: 'LOGIN',
    },
    hero: {
      title: 'SHTIRLITZ',
      subtitle: 'Buratino in 5 minutes. Automated.',
      tags: 'COURTS / BAILIFFS / USRLE / VKONTAKTE / TELEGRAM / SANCTIONS',
      cta: 'TRY FOR FREE',
      subtext: '2 CHECKS / WEEK \u00B7 NO CARD REQUIRED',
    },
    pain: {
      label: '[PROBLEM]',
      heading: 'YOU SPEND 2 HOURS ON WHAT CAN BE DONE IN 5 MINUTES',
      subheading: 'IAS Buratino is built for trained analysts. Your business needs automation.',
      cards: [
        {
          title: 'ANALYST WORKS FOR HOURS',
          text: 'Buratino is a tool for specialists. Each check requires a trained analyst and takes 1\u20132 hours of manual work.',
        },
        {
          title: 'GOVERNMENT REGISTRIES ONLY',
          text: 'No social media, no leak analysis, no behavioral analysis. A candidate can hide risks that Buratino cannot see.',
        },
        {
          title: 'HIDDEN COSTS',
          text: '25,000 \u20BD/year for license + 30\u201399k \u20BD for training. Plus analyst salary. Real cost \u2014 hundreds of thousands per year.',
        },
      ],
    },
    pipeline: {
      label: '[PIPELINE]',
      heading: '9 STAGES. AUTOMATED.',
      stages: [
        { name: 'IDENTITY', desc: 'USRLE by TIN, identity verification' },
        { name: 'REGISTRIES', desc: 'Courts, bailiffs, pledges, bankruptcy' },
        { name: 'SECURITY', desc: 'Sanctions, MVD, Interpol, extremists' },
        { name: 'SOCIAL', desc: 'VKontakte, Telegram, Odnoklassniki' },
        { name: 'CONTACTS', desc: 'Phones, email, data leaks' },
        { name: 'DEEP_ANALYSIS', desc: 'Social graph, Search4Faces' },
        { name: 'BEHAVIOR', desc: 'Post analysis, last_seen, geolocation' },
        { name: 'RISK_SCORING', desc: 'Scoring 0\u2013100, facts vs suspicions' },
        { name: 'REPORT', desc: 'Dossier, PDF, JSON export' },
      ],
      complete: '> Dossier ready. 9/9 stages complete.',
      scanning: '> Scanning...',
    },
    comparison: {
      label: '[COMPARISON]',
      heading: 'SHTIRLITZ VS BURATINO',
      subtext: 'Buratino data from open public sources',
      paramHeader: 'Parameter',
      sledHeader: 'SHTIRLITZ',
      burHeader: 'IAS Buratino',
      rows: [
        { param: 'Check time', sled: '5\u201315 minutes', bur: '1\u20132 hours' },
        { param: 'Analyst required', sled: 'Not needed', bur: 'Required' },
        { param: 'Social media (VK, TG)', sled: 'Yes', bur: 'No' },
        { param: 'Leak databases', sled: 'Yes', bur: 'No' },
        { param: 'Risk scoring 0\u2013100', sled: 'Automatic', bur: 'No' },
        { param: 'API integrations', sled: 'Coming soon', bur: 'No' },
        { param: 'Cost', sled: 'from 1,500 \u20BD/mo', bur: '25,000 \u20BD/year + course' },
        { param: 'Free access', sled: '2 checks/week', bur: 'No' },
      ],
    },
    pricing: {
      label: '[PRICING]',
      heading: 'START FOR FREE',
      plans: [
        {
          label: 'FREE',
          amount: '0',
          currency: '₽',
          period: 'forever',
          features: ['2 checks per week', 'All 9 pipeline stages', 'PDF export', 'Risk scoring 0\u2013100'],
          cta: 'START FREE',
          href: APP_URL,
          featured: false,
        },
        {
          label: 'PRO',
          amount: '1500',
          currency: '₽',
          period: 'per month / unlimited',
          features: ['Unlimited checks', 'All data sources', 'PDF + JSON export', 'Check history', 'Priority processing'],
          cta: 'SUBSCRIBE',
          href: APP_URL,
          featured: true,
        },
        {
          label: 'ENTERPRISE',
          amount: 'On request',
          currency: '',
          period: 'custom terms',
          features: [
            'Full integration with your systems',
            'Your HR and security see what our admin sees',
            'Unlimited users',
            'Personal manager and 24/7 support',
            '152-FZ compliance turnkey',
          ],
          cta: 'DISCUSS TERMS',
          href: 'mailto:enterprise@shtirletzsled.ru',
          featured: false,
        },
      ],
    },
    testimonials: {
      label: '[TESTIMONIALS]',
      items: [
        {
          text: 'Used to spend half a day on one candidate. Now 10 minutes \u2014 and the full dossier is ready. Found fraud court cases we used to miss.',
          author: 'Security Director',
          org: 'Manufacturing Company',
        },
        {
          text: 'Tried Buratino \u2014 requires a trained specialist and takes hours. SHTIRLITZ can be run by any HR manager. Risk scoring immediately shows what to pay attention to.',
          author: 'HR Director',
          org: 'Financial Organization',
        },
        {
          text: 'Paid for itself in the first week. Discovered a candidate with an active enforcement proceeding for a large sum \u2014 information he hid during the interview.',
          author: 'Security Manager',
          org: 'Retail Chain',
        },
      ],
    },
    finalCta: {
      line1: 'START',
      line2: 'RIGHT NOW',
      subtext: 'First 2 checks \u2014 free. No card required.',
      timeNote: '30 seconds to sign up',
      cta: 'TRY FOR FREE',
    },
    footer: {
      platform: 'OSINT PLATFORM \u00B7 152-FZ COMPLIANT',
      privacy: 'Privacy',
      login: 'Login',
    },
  },
}
