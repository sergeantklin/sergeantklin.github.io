import { useLang } from '../contexts/LanguageContext';

const GITHUB_URL = 'https://github.com/sergeantklin';
const TELEGRAM_URL = 'https://t.me/SergeiKalinkovsky';
const EMAIL = '315013898@mail.ru';

const bio = {
  ru: [
    'Я разработчик, который любит превращать идеи в работающие продукты.',
    'Меня интересуют современный фронтенд, realtime-технологии и всё, что связано с созданием интерактивного пользовательского опыта.',
    'Большую часть свободного времени посвящаю собственным проектам и изучению новых технологий. Мне нравится разбираться в том, как устроены сложные системы, и находить простые решения для сложных задач.',
  ],
  en: [
    "Frontend engineer with 18+ years of experience building complex web applications and developer platforms.",
    "My primary interests are TypeScript, React, Vue, application architecture, realtime systems, and AI-assisted development. I enjoy solving technically challenging problems, designing maintainable solutions, and improving developer experience.",
    "In my spare time, I work on personal projects, study new technologies, and explore how modern tools can simplify complex systems.",
  ],
};

const role = { ru: 'Frontend Developer', en: 'Frontend Developer' };

function About() {
  const { lang } = useLang();

  return (
    <div className="space-y-10 text-slate-800">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Photo */}
        <div className="shrink-0 self-center md:self-start">
          <div
            className="relative h-36 w-36 rounded-full p-[2px]"
            style={{ background: 'linear-gradient(135deg, #38bdf8, #a855f7)' }}
          >
            <img
              src="/img/photo.jpg"
              alt="Sergei Kalinkovskii"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {lang === 'ru' ? 'Сергей Калиновский' : 'Sergei Kalinkovskii'}
            </h1>
            <span className="mt-2 inline-block rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
              {role[lang]}
            </span>
          </div>

          <div className="space-y-3 text-slate-700">
            {bio[lang].map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.04 13.88l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.679z" />
              </svg>
              Telegram
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
