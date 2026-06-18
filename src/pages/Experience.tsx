import { useState } from 'react';
import experienceData from '../data/experience';
import { useLang } from '../contexts/LanguageContext';

const INITIALS_COLORS = [
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-indigo-100 text-indigo-700',
  'bg-teal-100 text-teal-700',
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function getColorClass(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) & 0xffff;
  return INITIALS_COLORS[hash % INITIALS_COLORS.length];
}

function CompanyLogo({ logoUrl, company }: { logoUrl: string | null; company: string }) {
  const [failed, setFailed] = useState(false);

  if (logoUrl && !failed) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white p-1 shadow-sm">
        <img
          src={logoUrl}
          alt={company}
          onError={() => setFailed(true)}
          className="h-8 w-8 object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${getColorClass(company)}`}>
      {getInitials(company)}
    </div>
  );
}

function Experience() {
  const { lang } = useLang();

  const labels = {
    responsibilities: { ru: 'Обязанности', en: 'Responsibilities' },
    achievements: { ru: 'Достижения', en: 'Achievements' },
  };

  return (
    <div className="space-y-6 text-slate-800">
      {experienceData.map((job) => (
        <article key={job.company.ru} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                <CompanyLogo logoUrl={job.logoUrl} company={job.company[lang]} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {job.company[lang]}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">{job.title[lang]}</h2>
                <p className="mt-1 text-sm text-slate-500">{job.period[lang]}</p>
              </div>
            </div>
            <span className="shrink-0 self-start rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
              {job.duration[lang]}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-700">
                {labels.responsibilities[lang]}
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {job.responsibilities[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-700">
                {labels.achievements[lang]}
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {job.achievements[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Experience;
