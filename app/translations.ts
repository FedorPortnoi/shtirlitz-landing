export type Lang = 'ru' | 'en'
export type CheckType = 'person' | 'company'

type Stage = { id: string; icon: string; name: string; desc: string }
type TileColor = 'green' | 'amber' | 'red' | 'dim'
type TileKey = 'identity' | 'business' | 'courts' | 'financial' | 'sanctions' | 'media' | 'social' | 'graph'
type TileContent = { main: string; sub: string; badge: string; color: TileColor }
type TourOutcome = {
  riskScore: number
  riskLevel: 'clean' | 'medium'
  riskLabel: string
  riskDesc: string
  tiles: Record<TileKey, TileContent>
}
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
type PainCard = { title: string; text: string }
type ComparisonRow = { param: string; sled: string; bur: string }

type Translations = {
  nav: {
    tour: string
    pricing: string
    testimonials: string
    login: string
  }
  hero: {
    title: string
    tagline: string
  }
  intro: {
    eyebrow: string
    beats: string[]
    skip: string
    continueCta: string
  }
  login: {
    title: string
    usernameLabel: string
    usernameValue: string
    passwordLabel: string
    passwordValue: string
    statusInit: string
    statusVerify: string
    statusGranted: string
    continueCta: string
    skip: string
  }
  tour: {
    typeSelect: {
      eyebrow: string
      heading: string
      subheading: string
      person: { typeLabel: string; title: string; desc: string; sources: string[]; cta: string }
      company: { typeLabel: string; title: string; desc: string; sources: string[]; cta: string }
    }
    form: {
      eyebrow: string
      heading: string
      nameLabel: string
      namePlaceholder: string
      dobLabel: string
      innLabel: string
      innPlaceholder: string
      companyNameLabel: string
      companyNameDefault: string
      companyInnPlaceholder: string
      modeLabel: string
      modeQuick: { title: string; desc: string }
      modePrecise: { title: string; desc: string }
      qualityEmpty: string
      qualityFilled: string
      companyQualityEmpty: string
      companyQualityFilled: string
      consentText: string
      consentTextCompany: string
      submitCta: string
      coverageLabel: string
      coverageItems: string[]
    }
    pipeline: {
      eyebrow: string
      heading: string
      subjectFallback: Record<CheckType, string>
      progressLabel: string
      logHeading: string
      completeLabel: string
      stages: Record<CheckType, Stage[]>
    }
    dossier: {
      eyebrow: string
      heading: string
      riskCaption: string
      sourcesLabel: string
      aiSummaryLabel: string
      tileIcons: Record<TileKey, string>
      tileLabels: Record<CheckType, Record<TileKey, string>>
      outcomes: Record<CheckType, TourOutcome[]>
      personSubjectFallback: string[]
      companySubjectFallback: string
      ctaLine: string
      ctaButton: string
      runAgain: string
      disclaimer: string
    }
  }
  pain: {
    label: string
    heading: string
    subheading: string
    cards: PainCard[]
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

export const APP_URL = 'https://shtirletzsled.ru/login'
export const PRIVACY_URL = 'https://shtirletzsled.ru/privacy'

const TILE_ICONS: Record<TileKey, string> = {
  identity: '◉',
  business: '▣',
  courts: '⊟',
  financial: '⊠',
  sanctions: '⊗',
  media: '◫',
  social: '⊕',
  graph: '⬡',
}

export const translations: Record<Lang, Translations> = {
  ru: {
    nav: {
      tour: 'Как это работает',
      pricing: 'Тарифы',
      testimonials: 'Отзывы',
      login: 'ВОЙТИ',
    },
    hero: {
      title: 'ШТИРЛИЦ',
      tagline: 'Автоматическая проверка кандидатов. За 5 минут.',
    },
    intro: {
      eyebrow: '[ИНИЦИАЛИЗАЦИЯ]',
      beats: [
        'ШТИРЛИЦ: платформа автоматической проверки кандидатов',
        'Ручной OSINT занимает часы и требует обученного аналитика',
        'Система собирает реестры, суды, санкции, соцсети и связи в одно досье',
        'HR и служба безопасности получают риск-скоринг за 5 минут',
      ],
      skip: 'Пропустить',
      continueCta: 'Продолжить',
    },
    login: {
      title: 'ДЕМО-ДОСТУП',
      usernameLabel: 'Логин',
      usernameValue: 'demo@shtirlitz.local',
      passwordLabel: 'Пароль',
      passwordValue: '••••••••••••',
      statusInit: 'Инициализация защищённой сессии',
      statusVerify: 'Проверка demo-токена',
      statusGranted: 'Доступ разрешён',
      continueCta: 'Продолжить',
      skip: 'Пропустить',
    },
    tour: {
      typeSelect: {
        eyebrow: '[ШАГ 1 / 4]',
        heading: 'ВЫБЕРИТЕ ТИП ПРОВЕРКИ',
        subheading: 'Так выглядит первый экран платформы: это те же 2 карточки, что видит пользователь после входа.',
        person: {
          typeLabel: 'Тип 01',
          title: 'Физическое лицо',
          desc: 'Полная проверка по государственным реестрам, судам, ФССП, санкционным спискам и социальным сетям. Поведенческий анализ и оценка рисков.',
          sources: ['ЕГРЮЛ', 'Суды', 'ФССП', 'Санкции', 'ВКонтакте', 'Telegram'],
          cta: 'Начать проверку',
        },
        company: {
          typeLabel: 'Тип 02',
          title: 'Юридическое лицо / ИП',
          desc: 'Проверка компании или ИП по ЕГРЮЛ, арбитражным делам, санкционным спискам. Учредители, директора, оценка рисков.',
          sources: ['ЕГРЮЛ', 'Суды', 'Санкции', 'Директора', 'Учредители'],
          cta: 'Начать проверку',
        },
      },
      form: {
        eyebrow: '[ШАГ 2 / 4]',
        heading: 'ЗАПОЛНИТЕ ДАННЫЕ',
        nameLabel: 'Полное имя (ФИО)',
        namePlaceholder: 'Морозов Андрей Викторович',
        dobLabel: 'Дата рождения',
        innLabel: 'ИНН',
        innPlaceholder: '771234567890',
        companyNameLabel: 'Название компании',
        companyNameDefault: 'ООО "Вектор Снаб"',
        companyInnPlaceholder: '7712345678',
        modeLabel: 'Режим проверки',
        modeQuick: { title: 'Быстрый', desc: 'Автоматический выбор профиля' },
        modePrecise: { title: 'Точный', desc: 'Вы подтверждаете профиль вручную' },
        qualityEmpty: 'Заполните ФИО и дату рождения для начала проверки',
        qualityFilled: 'Стандартная проверка: ФИО + ИНН + дата рождения',
        companyQualityEmpty: 'Укажите ИНН для начала проверки',
        companyQualityFilled: 'Проверка по ИНН компании',
        consentText: 'Я подтверждаю, что имею законное основание для проверки данного лица и получил его согласие на обработку персональных данных в соответствии с 152-ФЗ.',
        consentTextCompany: 'Информация о компании основана на общедоступных государственных реестрах. Проверяя контрагента, я подтверждаю законный интерес в получении этих данных для целей due diligence.',
        submitCta: 'Начать проверку',
        coverageLabel: 'Coverage',
        coverageItems: ['ЕГРЮЛ/ЕГРИП', 'ФССП', 'Суды', 'Банкротство', 'Санкции', 'VK / Telegram', 'Email / Телефон', 'Оценка рисков'],
      },
      pipeline: {
        eyebrow: '[ШАГ 3 / 4]',
        heading: 'PIPELINE АКТИВЕН',
        subjectFallback: { person: 'Кандидат', company: 'Компания' },
        progressLabel: 'Инициализация...',
        logHeading: 'Журнал проверки',
        completeLabel: 'Проверка завершена. Переход к досье...',
        stages: {
          person: [
            { id: 'identity', icon: '\u{1F194}', name: 'Идентификация', desc: 'ИНН, ЕГРЮЛ, ЕФРСБ, бизнес-связи' },
            { id: 'registries', icon: '\u{1F3DB}\u{FE0F}', name: 'Реестры', desc: 'ЕГРЮЛ, суды, ФССП, залоги' },
            { id: 'security', icon: '\u{1F6E1}\u{FE0F}', name: 'Безопасность', desc: 'Санкции, розыск, экстремизм' },
            { id: 'social', icon: '\u{1F4F1}', name: 'Соцсети', desc: 'ВКонтакте, Telegram' },
            { id: 'contacts', icon: '\u{1F4E7}', name: 'Контакты', desc: 'Телефон, email, утечки' },
            { id: 'deep', icon: '\u{1F50D}', name: 'Глубокий анализ', desc: 'Граф связей, аккаунты' },
            { id: 'behavioral', icon: '\u{1F4CA}', name: 'Поведение', desc: 'Текст, география, хронология' },
            { id: 'risk', icon: '\u{26A0}\u{FE0F}', name: 'Риски', desc: 'Красные флаги, оценка' },
            { id: 'report', icon: '\u{1F4C4}', name: 'Отчёт', desc: 'Генерация досье' },
          ],
          company: [
            { id: 'identity', icon: '\u{1F194}', name: 'Идентификация', desc: 'ЕГРЮЛ, ИНН, статус компании' },
            { id: 'founders', icon: '\u{1F465}', name: 'Учредители и директора', desc: 'Роли, доли, история руководства' },
            { id: 'related', icon: '\u{1F578}\u{FE0F}', name: 'Связанные компании', desc: 'Граф соучредителей и руководителей' },
            { id: 'arbitration', icon: '\u{2696}\u{FE0F}', name: 'Арбитраж', desc: 'Арбитражные дела и роли в процессах' },
            { id: 'bankruptcy', icon: '\u{1F4C9}', name: 'Банкротство', desc: 'Федресурс, признаки несостоятельности' },
            { id: 'sanctions', icon: '\u{1F6E1}\u{FE0F}', name: 'Санкции и РНП', desc: 'Санкционные списки и реестр недобросовестных поставщиков' },
            { id: 'contracts', icon: '\u{1F4CB}', name: 'Госконтракты', desc: 'Контракты, заказчики, исполнение' },
            { id: 'financial', icon: '\u{1F4B0}', name: 'Финансовые риски', desc: 'Выручка, долги, признаки риска' },
            { id: 'report', icon: '\u{1F4C4}', name: 'Отчёт', desc: 'Генерация досье по компании' },
          ],
        },
      },
      dossier: {
        eyebrow: '[ШАГ 4 / 4]',
        heading: 'ДОСЬЕ ГОТОВО',
        riskCaption: 'Риск / 100',
        sourcesLabel: 'Источников',
        aiSummaryLabel: 'Итоговая оценка',
        tileIcons: TILE_ICONS,
        tileLabels: {
          person: {
            identity: 'Личность',
            business: 'Бизнес и ИП',
            courts: 'Судебные дела',
            financial: 'Долги и залоги',
            sanctions: 'Санкции и розыск',
            media: 'СМИ и интернет',
            social: 'Соцсети и контакты',
            graph: 'Граф связей',
          },
          company: {
            identity: 'Регистрация',
            business: 'Учредители',
            courts: 'Арбитраж',
            financial: 'Финансы',
            sanctions: 'Санкции и РНП',
            media: 'Директора',
            social: 'Госконтракты',
            graph: 'Граф связей',
          },
        },
        personSubjectFallback: ['Морозов Андрей Викторович', 'Кузнецов Сергей Павлович'],
        companySubjectFallback: 'ООО "Вектор Снаб"',
        outcomes: {
          person: [
            {
              riskScore: 8,
              riskLevel: 'clean',
              riskLabel: 'НИЗКИЙ РИСК',
              riskDesc: 'Проблем не обнаружено',
              tiles: {
                identity: { main: 'ИНН подтверждён', sub: '771234567890', badge: 'Подтверждён', color: 'green' },
                business: { main: 'Бизнес не обнаружен', sub: 'ЕГРЮЛ / ЕГРИП', badge: 'Нет', color: 'green' },
                courts: { main: '0 дел в арбитраже', sub: 'kad.arbitr.ru', badge: 'Нет', color: 'green' },
                financial: { main: 'Задолженностей нет', sub: 'ФССП · Залоги · Банкротство', badge: 'Нет', color: 'green' },
                sanctions: { main: 'Санкций не обнаружено', sub: '12 из 12 источников', badge: 'Чисто', color: 'green' },
                media: { main: 'Негативных упоминаний нет', sub: 'Яндекс · Google', badge: 'Чисто', color: 'green' },
                social: { main: 'VK профиль · подтверждён', sub: '0 тел. · 1 email', badge: 'Найден', color: 'green' },
                graph: { main: 'Граф не построен', sub: 'ИНН · Компании · Контакты', badge: 'Нет данных', color: 'dim' },
              },
            },
            {
              riskScore: 47,
              riskLevel: 'medium',
              riskLabel: 'СРЕДНИЙ РИСК',
              riskDesc: 'Обнаружены потенциальные проблемы',
              tiles: {
                identity: { main: 'ИНН подтверждён', sub: '771234567890', badge: 'Подтверждён', color: 'green' },
                business: { main: 'Активных: 1', sub: 'Бизнес-история', badge: '1 запись', color: 'amber' },
                courts: { main: '0 дел в арбитраже', sub: 'kad.arbitr.ru', badge: 'Нет', color: 'green' },
                financial: { main: '1 испол. производство', sub: 'ФССП · 340 000 ₽', badge: '1 пр-во', color: 'red' },
                sanctions: { main: 'Санкций не обнаружено', sub: '12 из 12 источников', badge: 'Чисто', color: 'green' },
                media: { main: '1 упоминание в СМИ', sub: 'Яндекс · Google', badge: '1 упоминание', color: 'amber' },
                social: { main: 'Найдено · требует проверки', sub: '1 тел. · 2 email в утечках', badge: '2 профиля', color: 'amber' },
                graph: { main: '3 подтв. · 2 возможных', sub: 'ИНН · Компании · Контакты', badge: '5 субъектов', color: 'amber' },
              },
            },
          ],
          company: [
            {
              riskScore: 12,
              riskLevel: 'clean',
              riskLabel: 'НИЗКИЙ РИСК',
              riskDesc: 'Компания активна, критических признаков риска не обнаружено',
              tiles: {
                identity: { main: 'Активна с 2019', sub: 'ЕГРЮЛ', badge: 'Подтверждена', color: 'green' },
                business: { main: '2 учредителя', sub: 'Физические лица', badge: 'Раскрыты', color: 'green' },
                courts: { main: '0 активных дел', sub: 'kad.arbitr.ru', badge: 'Чисто', color: 'green' },
                financial: { main: 'Выручка стабильна', sub: 'Финансовая отчётность', badge: 'Стабильно', color: 'green' },
                sanctions: { main: 'Совпадений нет', sub: 'Санкции · РНП', badge: 'Чисто', color: 'green' },
                media: { main: 'Директор подтверждён', sub: 'ЕГРЮЛ', badge: 'Подтверждён', color: 'green' },
                social: { main: '3 исполненных контракта', sub: 'ЕИС Закупки', badge: '3 контракта', color: 'green' },
                graph: { main: 'Связи без красных флагов', sub: 'Соучредители · директора', badge: 'Чисто', color: 'green' },
              },
            },
            {
              riskScore: 58,
              riskLevel: 'medium',
              riskLabel: 'СРЕДНИЙ РИСК',
              riskDesc: 'Есть признаки повышенной проверки: арбитраж, смена директора, связанные компании',
              tiles: {
                identity: { main: 'Активна, изменения 2025', sub: 'ЕГРЮЛ', badge: 'Изменения', color: 'amber' },
                business: { main: '1 массовый учредитель', sub: 'Реестр массовых учредителей', badge: 'Флаг', color: 'red' },
                courts: { main: '4 дела за 24 месяца', sub: 'kad.arbitr.ru', badge: '4 дела', color: 'amber' },
                financial: { main: 'Снижение выручки', sub: 'Финансовая отчётность', badge: 'Снижение', color: 'amber' },
                sanctions: { main: 'Санкций нет, РНП чисто', sub: 'Санкции · РНП', badge: 'Чисто', color: 'green' },
                media: { main: 'Смена директора', sub: 'ЕГРЮЛ', badge: 'Изменение', color: 'amber' },
                social: { main: '1 контракт с просрочкой', sub: 'ЕИС Закупки', badge: 'Просрочка', color: 'red' },
                graph: { main: '9 связанных юрлиц', sub: 'Соучредители · директора', badge: '9 связей', color: 'amber' },
              },
            },
          ],
        },
        ctaLine: 'Это заняло 12 секунд на вымышленных данных. Реальная проверка работает с реальными источниками и занимает 5–15 минут.',
        ctaButton: 'ПОПРОБОВАТЬ НА РЕАЛЬНОМ КАНДИДАТЕ',
        runAgain: 'ЗАПУСТИТЬ ЕЩЁ РАЗ',
        disclaimer: 'Демо-режим · данные вымышленные · воспроизводит реальный интерфейс платформы',
      },
    },
    pain: {
      label: '[ПРОБЛЕМА]',
      heading: 'РУЧНАЯ ПРОВЕРКА ЗАНИМАЕТ ЧАСЫ. У ВАС ЕСТЬ 5 МИНУТ.',
      subheading: 'Ручной OSINT требует обученного аналитика и данных из десятков разрозненных источников.',
      cards: [
        { title: 'РУЧНОЙ ТРУД', text: 'Проверка вручную требует часов работы обученного аналитика, а не пяти минут.' },
        { title: 'РАЗРОЗНЕННЫЕ ИСТОЧНИКИ', text: 'Реестры, суды, санкции, соцсети и связи хранятся отдельно. Собрать из них цельную картину вручную долго, и легко что-то упустить.' },
        { title: 'ПРОПУЩЕННЫЕ РИСКИ', text: 'Медленный и непоследовательный процесс означает, что HR и служба безопасности узнают о рисках слишком поздно.' },
      ],
    },
    comparison: {
      label: '[СРАВНЕНИЕ]',
      heading: 'ШТИРЛИЦ ПРОТИВ БУРАТИНО',
      subtext: 'Данные о Буратино основаны на общедоступных источниках.',
      paramHeader: 'Параметр',
      sledHeader: 'ШТИРЛИЦ',
      burHeader: 'Ручной / Буратино',
      rows: [
        { param: 'Время проверки', sled: '5-15 минут', bur: '1-2 часа' },
        { param: 'Нужен аналитик', sled: 'Не требуется', bur: 'Обязателен' },
        { param: 'Источники', sled: 'Реестры, суды, санкции, соцсети, граф связей', bur: 'Только госреестры' },
        { param: 'Результат', sled: 'Единое досье с риск-скорингом', bur: 'Разрозненные результаты' },
        { param: 'Повторяемость', sled: 'Одинаковый процесс каждый раз', bur: 'Зависит от аналитика' },
        { param: 'Стоимость', sled: 'от 1 500 ₽/мес', bur: '25 000 ₽/год + курс' },
        { param: 'Бесплатный доступ', sled: '2 проверки в неделю', bur: 'Нет' },
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
          text: 'Раньше тратили полдня на одного кандидата. Теперь 10 минут, и полное досье готово. Нашли судебные дела о мошенничестве которые раньше пропускали.',
          author: 'Директор по безопасности',
          org: 'Производственная компания',
        },
        {
          text: 'Раньше проверка требовала обученного специалиста и занимала часы. ШТИРЛИЦ запускает любой HR менеджер. Риск-скоринг сразу показывает на что обратить внимание.',
          author: 'HR директор',
          org: 'Финансовая организация',
        },
        {
          text: 'Окупился за первую неделю. Обнаружили кандидата с активным исполнительным производством на крупную сумму: информацию, которую он скрыл на собеседовании.',
          author: 'Руководитель СБ',
          org: 'Торговая сеть',
        },
      ],
    },
    finalCta: {
      line1: 'НАЧНИТЕ',
      line2: 'ПРЯМО СЕЙЧАС',
      subtext: 'Первые 2 проверки бесплатно. Без карты.',
      timeNote: '30 секунд на регистрацию',
      cta: 'ПОПРОБОВАТЬ БЕСПЛАТНО',
    },
    footer: {
      platform: 'OSINT PLATFORM · 152-ФЗ COMPLIANT',
      privacy: 'Конфиденциальность',
      login: 'Войти',
    },
  },
  en: {
    nav: {
      tour: 'How It Works',
      pricing: 'Pricing',
      testimonials: 'Reviews',
      login: 'LOGIN',
    },
    hero: {
      title: 'SHTIRLITZ',
      tagline: 'Automated candidate screening. In 5 minutes.',
    },
    intro: {
      eyebrow: '[INITIALIZING]',
      beats: [
        'SHTIRLITZ is an automated candidate screening platform',
        'Manual OSINT takes hours and requires a trained analyst',
        'The system brings registries, courts, sanctions, social signals, and links into one dossier',
        'HR and security teams get a risk score in 5 minutes',
      ],
      skip: 'Skip',
      continueCta: 'Continue',
    },
    login: {
      title: 'DEMO ACCESS',
      usernameLabel: 'Login',
      usernameValue: 'demo@shtirlitz.local',
      passwordLabel: 'Password',
      passwordValue: '••••••••••••',
      statusInit: 'Initializing secure session',
      statusVerify: 'Verifying demo token',
      statusGranted: 'Access granted',
      continueCta: 'Continue',
      skip: 'Skip',
    },
    tour: {
      typeSelect: {
        eyebrow: '[STEP 1 / 4]',
        heading: 'CHOOSE WHAT TO CHECK',
        subheading: 'This is the actual first screen of the platform: the same two cards a user sees right after signing in.',
        person: {
          typeLabel: 'Type 01',
          title: 'Individual',
          desc: 'Full check across government registries, courts, bailiffs, sanctions lists, and social media. Behavioral analysis and risk scoring.',
          sources: ['USRLE', 'Courts', 'Bailiffs', 'Sanctions', 'VKontakte', 'Telegram'],
          cta: 'Start check',
        },
        company: {
          typeLabel: 'Type 02',
          title: 'Legal Entity / Sole Prop',
          desc: 'Company or sole proprietor check against USRLE, arbitration cases, sanctions lists. Founders, directors, risk scoring.',
          sources: ['USRLE', 'Courts', 'Sanctions', 'Directors', 'Founders'],
          cta: 'Start check',
        },
      },
      form: {
        eyebrow: '[STEP 2 / 4]',
        heading: 'FILL IN THE DETAILS',
        nameLabel: 'Full name',
        namePlaceholder: 'John Michael Smith',
        dobLabel: 'Date of birth',
        innLabel: 'TIN',
        innPlaceholder: '771234567890',
        companyNameLabel: 'Company name',
        companyNameDefault: 'Vector Snab LLC',
        companyInnPlaceholder: '7712345678',
        modeLabel: 'Check mode',
        modeQuick: { title: 'Quick', desc: 'Automatic profile matching' },
        modePrecise: { title: 'Precise', desc: 'You confirm the profile manually' },
        qualityEmpty: 'Fill in name and date of birth to start the check',
        qualityFilled: 'Standard check: name + TIN + date of birth',
        companyQualityEmpty: 'Enter the TIN to start the check',
        companyQualityFilled: 'Company TIN check',
        consentText: 'I confirm I have a lawful basis to check this person and have obtained their consent to process personal data under applicable law.',
        consentTextCompany: "Company information is based on publicly available government registries. By checking this counterparty, I confirm a lawful interest in this data for due diligence purposes.",
        submitCta: 'Start check',
        coverageLabel: 'Coverage',
        coverageItems: ['USRLE', 'Bailiffs', 'Courts', 'Bankruptcy', 'Sanctions', 'VK / Telegram', 'Email / Phone', 'Risk scoring'],
      },
      pipeline: {
        eyebrow: '[STEP 3 / 4]',
        heading: 'PIPELINE ACTIVE',
        subjectFallback: { person: 'Candidate', company: 'Company' },
        progressLabel: 'Initializing...',
        logHeading: 'Check log',
        completeLabel: 'Check complete. Opening dossier...',
        stages: {
          person: [
            { id: 'identity', icon: '\u{1F194}', name: 'Identity', desc: 'TIN, USRLE, bankruptcy registry, business ties' },
            { id: 'registries', icon: '\u{1F3DB}\u{FE0F}', name: 'Registries', desc: 'USRLE, courts, bailiffs, pledges' },
            { id: 'security', icon: '\u{1F6E1}\u{FE0F}', name: 'Security', desc: 'Sanctions, wanted lists, extremism' },
            { id: 'social', icon: '\u{1F4F1}', name: 'Social', desc: 'VKontakte, Telegram' },
            { id: 'contacts', icon: '\u{1F4E7}', name: 'Contacts', desc: 'Phone, email, leaks' },
            { id: 'deep', icon: '\u{1F50D}', name: 'Deep analysis', desc: 'Connection graph, accounts' },
            { id: 'behavioral', icon: '\u{1F4CA}', name: 'Behavior', desc: 'Text, geography, timeline' },
            { id: 'risk', icon: '\u{26A0}\u{FE0F}', name: 'Risk', desc: 'Red flags, scoring' },
            { id: 'report', icon: '\u{1F4C4}', name: 'Report', desc: 'Dossier generation' },
          ],
          company: [
            { id: 'identity', icon: '\u{1F194}', name: 'Identification', desc: 'Company registry, TIN, legal status' },
            { id: 'founders', icon: '\u{1F465}', name: 'Founders & Directors', desc: 'Roles, shares, management history' },
            { id: 'related', icon: '\u{1F578}\u{FE0F}', name: 'Related Companies', desc: 'Co-founder and director graph' },
            { id: 'arbitration', icon: '\u{2696}\u{FE0F}', name: 'Arbitration', desc: 'Arbitration cases and procedural roles' },
            { id: 'bankruptcy', icon: '\u{1F4C9}', name: 'Bankruptcy', desc: 'Fedresurs and insolvency signals' },
            { id: 'sanctions', icon: '\u{1F6E1}\u{FE0F}', name: 'Sanctions & Supplier Blacklist', desc: 'Sanctions lists and unreliable supplier registry' },
            { id: 'contracts', icon: '\u{1F4CB}', name: 'Government Contracts', desc: 'Contracts, customers, fulfillment' },
            { id: 'financial', icon: '\u{1F4B0}', name: 'Financial Risks', desc: 'Revenue, debts, risk signals' },
            { id: 'report', icon: '\u{1F4C4}', name: 'Report', desc: 'Company dossier generation' },
          ],
        },
      },
      dossier: {
        eyebrow: '[STEP 4 / 4]',
        heading: 'DOSSIER READY',
        riskCaption: 'Risk / 100',
        sourcesLabel: 'Sources',
        aiSummaryLabel: 'Overall assessment',
        tileIcons: TILE_ICONS,
        tileLabels: {
          person: {
            identity: 'Identity',
            business: 'Business & Sole Prop',
            courts: 'Court Cases',
            financial: 'Debts & Liens',
            sanctions: 'Sanctions & Wanted Lists',
            media: 'Media & Web',
            social: 'Social & Contacts',
            graph: 'Connection Graph',
          },
          company: {
            identity: 'Registration',
            business: 'Founders',
            courts: 'Arbitration',
            financial: 'Financials',
            sanctions: 'Sanctions & Blacklists',
            media: 'Directors',
            social: 'Gov Contracts',
            graph: 'Connection Graph',
          },
        },
        personSubjectFallback: ['Andrey Morozov', 'Sergey Kuznetsov'],
        companySubjectFallback: 'Vector Snab LLC',
        outcomes: {
          person: [
            {
              riskScore: 8,
              riskLevel: 'clean',
              riskLabel: 'LOW RISK',
              riskDesc: 'No issues found',
              tiles: {
                identity: { main: 'TIN confirmed', sub: '771234567890', badge: 'Confirmed', color: 'green' },
                business: { main: 'No business found', sub: 'USRLE', badge: 'None', color: 'green' },
                courts: { main: '0 arbitration cases', sub: 'kad.arbitr.ru', badge: 'None', color: 'green' },
                financial: { main: 'No debts found', sub: 'Bailiffs · Liens · Bankruptcy', badge: 'None', color: 'green' },
                sanctions: { main: 'No sanctions found', sub: '12 of 12 sources', badge: 'Clean', color: 'green' },
                media: { main: 'No negative mentions', sub: 'Yandex · Google', badge: 'Clean', color: 'green' },
                social: { main: 'VK profile · confirmed', sub: '0 phone · 1 email', badge: 'Found', color: 'green' },
                graph: { main: 'Graph not built', sub: 'TIN · Companies · Contacts', badge: 'No data', color: 'dim' },
              },
            },
            {
              riskScore: 47,
              riskLevel: 'medium',
              riskLabel: 'MODERATE RISK',
              riskDesc: 'Potential issues found',
              tiles: {
                identity: { main: 'TIN confirmed', sub: '771234567890', badge: 'Confirmed', color: 'green' },
                business: { main: 'Active: 1', sub: 'Business history', badge: '1 record', color: 'amber' },
                courts: { main: '0 arbitration cases', sub: 'kad.arbitr.ru', badge: 'None', color: 'green' },
                financial: { main: '1 active enforcement', sub: 'Bailiffs · 340,000 ₽', badge: '1 case', color: 'red' },
                sanctions: { main: 'No sanctions found', sub: '12 of 12 sources', badge: 'Clean', color: 'green' },
                media: { main: '1 media mention', sub: 'Yandex · Google', badge: '1 mention', color: 'amber' },
                social: { main: 'Found · needs review', sub: '1 phone · 2 emails in leaks', badge: '2 profiles', color: 'amber' },
                graph: { main: '3 confirmed · 2 possible', sub: 'TIN · Companies · Contacts', badge: '5 entities', color: 'amber' },
              },
            },
          ],
          company: [
            {
              riskScore: 12,
              riskLevel: 'clean',
              riskLabel: 'LOW RISK',
              riskDesc: 'The company is active, with no critical risk signals found',
              tiles: {
                identity: { main: 'Active since 2019', sub: 'USRLE', badge: 'Confirmed', color: 'green' },
                business: { main: '2 founders', sub: 'Individuals', badge: 'Disclosed', color: 'green' },
                courts: { main: '0 active cases', sub: 'kad.arbitr.ru', badge: 'Clean', color: 'green' },
                financial: { main: 'Stable revenue', sub: 'Financial statements', badge: 'Stable', color: 'green' },
                sanctions: { main: 'No matches', sub: 'Sanctions · Blacklist', badge: 'Clean', color: 'green' },
                media: { main: 'Director confirmed', sub: 'USRLE', badge: 'Confirmed', color: 'green' },
                social: { main: '3 fulfilled contracts', sub: 'Procurement registry', badge: '3 contracts', color: 'green' },
                graph: { main: 'No red flags in links', sub: 'Co-founders · directors', badge: 'Clean', color: 'green' },
              },
            },
            {
              riskScore: 58,
              riskLevel: 'medium',
              riskLabel: 'MODERATE RISK',
              riskDesc: 'Enhanced review recommended: arbitration, director change, related companies',
              tiles: {
                identity: { main: 'Active, changes in 2025', sub: 'USRLE', badge: 'Changed', color: 'amber' },
                business: { main: '1 high-volume founder', sub: 'High-volume founder registry', badge: 'Flag', color: 'red' },
                courts: { main: '4 cases in 24 months', sub: 'kad.arbitr.ru', badge: '4 cases', color: 'amber' },
                financial: { main: 'Revenue decline', sub: 'Financial statements', badge: 'Decline', color: 'amber' },
                sanctions: { main: 'No sanctions, blacklist clear', sub: 'Sanctions · Blacklist', badge: 'Clean', color: 'green' },
                media: { main: 'Director changed', sub: 'USRLE', badge: 'Changed', color: 'amber' },
                social: { main: '1 delayed contract', sub: 'Procurement registry', badge: 'Delayed', color: 'red' },
                graph: { main: '9 related entities', sub: 'Co-founders · directors', badge: '9 links', color: 'amber' },
              },
            },
          ],
        },
        ctaLine: 'This took 12 seconds on fictional data. A real check works with real sources and takes 5–15 minutes.',
        ctaButton: 'TRY IT ON A REAL CANDIDATE',
        runAgain: 'RUN AGAIN',
        disclaimer: "Demo mode · fictional data · reproduces the platform's real interface",
      },
    },
    pain: {
      label: '[THE PROBLEM]',
      heading: 'MANUAL SCREENING TAKES HOURS. YOU HAVE 5 MINUTES.',
      subheading: 'Manual OSINT requires a trained analyst and data scattered across dozens of separate sources.',
      cards: [
        { title: 'MANUAL EFFORT', text: "A manual check takes hours of a trained analyst's time, not five minutes." },
        { title: 'SCATTERED SOURCES', text: 'Registries, courts, sanctions, social media, and links all live in separate systems. Piecing together the full picture by hand takes time, and it is easy to miss something.' },
        { title: 'MISSED RISKS', text: 'A slow, inconsistent process means HR and security teams learn about risks too late, or not at all.' },
      ],
    },
    comparison: {
      label: '[COMPARISON]',
      heading: 'SHTIRLITZ VS BURATINO',
      subtext: 'Buratino data is based on publicly available sources.',
      paramHeader: 'Parameter',
      sledHeader: 'SHTIRLITZ',
      burHeader: 'Manual / Buratino',
      rows: [
        { param: 'Check time', sled: '5-15 minutes', bur: '1-2 hours' },
        { param: 'Analyst required', sled: 'Not required', bur: 'Required' },
        { param: 'Sources', sled: 'Registries, courts, sanctions, social media, connection graph', bur: 'Government registries only' },
        { param: 'Output', sled: 'Unified dossier with risk scoring', bur: 'Fragmented results' },
        { param: 'Repeatability', sled: 'Same process every time', bur: 'Depends on the analyst' },
        { param: 'Cost', sled: 'from 1,500 ₽/month', bur: '25,000 ₽/year + training course' },
        { param: 'Free access', sled: '2 checks per week', bur: 'None' },
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
          features: ['2 checks per week', 'All 9 pipeline stages', 'PDF export', 'Risk scoring 0–100'],
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
          text: 'Used to spend half a day on one candidate. Now 10 minutes, and the full dossier is ready. Found fraud court cases we used to miss.',
          author: 'Security Director',
          org: 'Manufacturing Company',
        },
        {
          text: 'Checks used to require a trained specialist and took hours. SHTIRLITZ can be run by any HR manager. Risk scoring immediately shows what to pay attention to.',
          author: 'HR Director',
          org: 'Financial Organization',
        },
        {
          text: 'Paid for itself in the first week. Discovered a candidate with an active enforcement proceeding for a large sum: information he hid during the interview.',
          author: 'Security Manager',
          org: 'Retail Chain',
        },
      ],
    },
    finalCta: {
      line1: 'START',
      line2: 'RIGHT NOW',
      subtext: 'First 2 checks free. No card required.',
      timeNote: '30 seconds to sign up',
      cta: 'TRY FOR FREE',
    },
    footer: {
      platform: 'OSINT PLATFORM · 152-FZ COMPLIANT',
      privacy: 'Privacy',
      login: 'Login',
    },
  },
}
