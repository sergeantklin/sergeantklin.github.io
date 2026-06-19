export interface BilingualText {
  ru: string;
  en: string;
}

export interface ExperienceEntry {
  company: BilingualText;
  logoUrl: string | null;
  title: BilingualText;
  period: BilingualText;
  duration: BilingualText;
  responsibilities: { ru: string[]; en: string[] };
  achievements: { ru: string[]; en: string[] };
  stack: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    company: { ru: 'Potok', en: 'Potok' },
    logoUrl: '/img/potok.png',
    title: { ru: 'Ведущий фронтенд-разработчик', en: 'Lead Frontend Developer' },
    period: {
      ru: 'Январь 2022 — сейчас (4 года и 6 месяцев)',
      en: 'January 2022 — present (4 years 6 months)',
    },
    duration: { ru: '4 года 6 месяцев', en: '4 years 6 months' },
    stack: ['React', 'Vue', 'Next.js', 'TypeScript', 'BFF', 'AI'],
    responsibilities: {
      ru: [
        'Разработка и развитие клиентской и серверной частей HR CRM системы',
        'Проектирование и согласование API-контрактов между frontend, backend и BFF',
        'Разработка сложных интерфейсов: динамические формы, аналитические панели, визуализация данных',
        'Техническое лидерство frontend-направления: код-ревью, архитектурные решения, развитие инженерных практик',
        'Внедрение ИИ-инструментов в процессы разработки и анализа данных',
      ],
      en: [
        'Developed and maintained both frontend and backend components of an HR CRM system',
        'Designed and coordinated API contracts between frontend, backend, and BFF',
        'Built complex UIs, including dynamic forms, analytics dashboards, and data visualizations used by 5,000+ users',
        'Led frontend engineering efforts, including code reviews, architectural decision-making, and engineering practice development',
        'Integrated AI tools into development and data analysis workflows',
      ],
    },
    achievements: {
      ru: [
        'Мигрировал более 80% frontend-кода с JavaScript на TypeScript',
        'Разработал систему пользовательской аналитики с многомерной визуализацией данных, анализом трендов и генерацией рекомендаций',
        'Вырос до роли лидера frontend-разработки и координировал работу команды из 4 человек',
        'Внедрил MCP-агента и собственные AI-скиллы для автоматизации разработки, сократив время реализации задач на 50%',
      ],
      en: [
        'Migrated 80%+ of frontend code from JavaScript to TypeScript',
        'Built a user analytics system with multidimensional data visualization, trend analysis, and recommendation generation',
        'Promoted to Frontend Lead and coordinated a team of 4 engineers',
        'Introduced an MCP agent and custom AI-powered development tools, reducing task delivery time by 50%',
      ],
    },
  },
  {
    company: { ru: 'Дойче-телеком Айти RUS', en: 'Deutsche Telekom IT RUS' },
    logoUrl: '/img/telekom.png',
    title: { ru: 'Ведущий фронтенд-разработчик', en: 'Senior Frontend Developer' },
    period: {
      ru: 'Декабрь 2020 — Декабрь 2021 (1 год и 1 месяц)',
      en: 'December 2020 — December 2021 (1 year 1 month)',
    },
    duration: { ru: '1 год 1 месяц', en: '1 year 1 month' },
    stack: ['Vue', 'Nuxt.js', 'MySQL', 'Design System', 'Accessibility'],
    responsibilities: {
      ru: [
        'Поддерживал фронтенд-часть CRM внутреннего веб-приложения',
        'Создал дизайн-систему и UI-кит для CRM',
        'Разрабатывал низкоуровневые компоненты с учетом требований по доступности и локализации',
        'Разрабатывал инструкции по интеграции компонентов в микросервисные приложения',
        'Поддерживал и создавал техническую и пользовательскую документацию',
      ],
      en: [
        'Maintained the frontend of an internal CRM web application',
        'Built a design system and UI kit for the CRM',
        'Developed low-level components meeting accessibility and localization requirements',
        'Authored integration guides for adopting components across microservice applications',
        'Maintained and created technical and user documentation',
      ],
    },
    achievements: {
      ru: ['Увеличил покрытие кода тестами с 0% до 85%'],
      en: ['Increased test coverage from 0% to 85%'],
    },
  },
  {
    company: { ru: 'Altenar', en: 'Altenar' },
    logoUrl: '/img/altenar.png',
    title: { ru: 'Ведущий фронтенд-разработчик', en: 'Lead Frontend Developer' },
    period: {
      ru: 'Ноябрь 2015 — Декабрь 2020 (5 лет и 2 месяца)',
      en: 'November 2015 — December 2020 (5 years 2 months)',
    },
    duration: { ru: '5 лет 2 месяца', en: '5 years 2 months' },
    stack: ['Vue', 'PHP', 'MySQL'],
    responsibilities: {
      ru: [
        'Ответственный за фронтенд-часть игровой платформы Altenar',
        'Прямое взаимодействие с клиентами',
        'Проведение технических интервью соискателей',
        'Онбординг, коучинг сотрудников',
      ],
      en: [
        'Led frontend development for the Altenar gaming platform',
        'Collaborated directly with clients to gather requirements and deliver solutions',
        'Conducted technical interviews for candidates',
        'Onboarded and coached new team members',
      ],
    },
    achievements: {
      ru: [
        'Построение архитектуры фронтенд-части приложения',
        'Успешный поэтапный перевод легаси-кода на Vue',
      ],
      en: [
        'Designed the frontend architecture of the application',
        'Led the incremental migration of a legacy codebase to Vue',
      ],
    },
  },
  {
    company: { ru: 'Газпром Газораспределение Владимир', en: 'Gazprom Gas Distribution Vladimir' },
    logoUrl: '/img/gazprom.png',
    title: { ru: 'Главный специалист', en: 'Chief Specialist' },
    period: {
      ru: 'Июнь 2007 — Ноябрь 2015 (8 лет и 6 месяцев)',
      en: 'June 2007 — November 2015 (8 years 6 months)',
    },
    duration: { ru: '8 лет 6 месяцев', en: '8 years 6 months' },
    stack: ['JavaScript', 'GIS', 'SQL', 'UIKit'],
    responsibilities: {
      ru: [
        'Создание фронтенд-части системы диспетчеризации учета объектов газоснабжения',
        'Оптимизация сетевых запросов',
        'Оптимизация для слабых клиентов',
        'Создание UIKit с нуля',
        'Интеграция картографии',
      ],
      en: [
        'Built the frontend of a GIS dispatch system for gas supply infrastructure management',
        'Optimized network requests and performance for low-end client machines, reduced page load time by 40%',
        'Built a UI kit from scratch',
        'Integrated mapping and cartography',
      ],
    },
    achievements: {
      ru: ['За внедрение ГИС-системы для диспетчера отмечен дипломом форума EXPO в Санкт-Петербурге'],
      en: ['Received an industry award at an expo in St. Petersburg for the implementation of the GIS dispatch system'],
    },
  },
  {
    company: { ru: 'Демидовский фанерный комбинат', en: 'Demidovsky Plywood Mill' },
    logoUrl: '/img/demidovo.gif',
    title: { ru: 'Начальник IT-отдела', en: 'Head of IT Department' },
    period: {
      ru: 'Февраль 2006 — Апрель 2007 (1 год и 3 месяца)',
      en: 'February 2006 — April 2007 (1 year 3 months)',
    },
    duration: { ru: '1 год 3 месяца', en: '1 year 3 months' },
    stack: ['SQL', 'ERP'],
    responsibilities: {
      ru: [
        'Внедрение системы ERP и сопровождение информационной инфраструктуры предприятия',
        'Написание SQL-запросов и тонкая настройка форм отчетности',
      ],
      en: [
        'Implemented an ERP system and maintained the company\'s IT infrastructure',
        'Wrote SQL queries and fine-tuned reporting forms',
      ],
    },
    achievements: {
      ru: ['Поддержка ERP-системы и улучшение отчетности для руководства'],
      en: ['Supported the ERP system and improved management reporting'],
    },
  },
  {
    company: { ru: 'Фэнтази парк', en: 'Fantasy Park' },
    logoUrl: '/img/fpark.jpg',
    title: {
      ru: 'Системный администратор, программист, начальник IT-отдела',
      en: 'System Administrator, Developer, Head of IT Department',
    },
    period: {
      ru: 'Январь 2005 — Январь 2006 (1 год и 1 месяц)',
      en: 'January 2005 — January 2006 (1 year 1 month)',
    },
    duration: { ru: '1 год 1 месяц', en: '1 year 1 month' },
    stack: ['Flash', 'ActionScript 3'],
    responsibilities: {
      ru: [
        'Сопровождение информационной инфраструктуры предприятия: зона игровых аппаратов, общепит',
        'Разработка программы для игрового автомата CrazyMonkey (Flash, ActionScript3)',
        'Создание рекламных flash-роликов и баннеров',
      ],
      en: [
        'Maintained IT infrastructure for arcade machines and food service areas',
        'Developed software for the CrazyMonkey slot machine (Flash, ActionScript3)',
        'Created advertising flash animations and banners',
      ],
    },
    achievements: {
      ru: ['Реализация приложения для игрового аппарата и сопровождение IT-инфраструктуры'],
      en: ['Delivered the slot machine application and maintained IT infrastructure'],
    },
  },
  {
    company: { ru: 'НИПТИЭМ', en: 'NIPTIÉM' },
    logoUrl: null,
    title: { ru: 'Системный администратор, программист', en: 'System Administrator, Developer' },
    period: {
      ru: 'Август 2003 — Ноябрь 2004 (1 год и 4 месяца)',
      en: 'August 2003 — November 2004 (1 year 4 months)',
    },
    duration: { ru: '1 год 4 месяца', en: '1 year 4 months' },
    stack: ['Delphi', 'Windows AD'],
    responsibilities: {
      ru: [
        'Администрирование домена предприятия',
        'Участие в создании системы учета оргтехники (программирование табличных модулей на Delphi7)',
      ],
      en: [
        'Administered the company\'s domain',
        'Contributed to building an office equipment tracking system (Delphi 7 table modules)',
      ],
    },
    achievements: {
      ru: ['Поддержка корпоративной инфраструктуры и участие в разработке отчетных модулей'],
      en: ['Maintained corporate infrastructure and contributed to reporting module development'],
    },
  },
];

export default experienceData;
