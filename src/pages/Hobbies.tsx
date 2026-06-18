import { Zap, BookOpen, Sparkles, BarChart2 } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const hobbies = [
  {
    icon: Zap,
    title: { ru: 'Realtime-архитектуры', en: 'Realtime Architectures' },
    description: {
      ru: 'Изучение WebSocket, SSE и паттернов для построения систем реального времени.',
      en: 'Studying WebSocket, SSE, and patterns for building real-time systems.',
    },
  },
  {
    icon: BookOpen,
    title: { ru: 'Техническое чтение', en: 'Technical Reading' },
    description: {
      ru: 'Профессиональная литература, технические блоги и обзоры архитектурных решений.',
      en: 'Professional literature, technical blogs, and architectural design reviews.',
    },
  },
  {
    icon: Sparkles,
    title: { ru: 'Интерактивный UI', en: 'Interactive UI' },
    description: {
      ru: 'Создание анимаций, сложных интерфейсов и экспериментов с motion-дизайном.',
      en: 'Creating animations, complex interfaces, and experimenting with motion design.',
    },
  },
  {
    icon: BarChart2,
    title: { ru: 'Визуализация данных', en: 'Data Visualization' },
    description: {
      ru: 'Эксперименты с многомерными графиками, аналитикой и data-driven UI.',
      en: 'Experiments with multidimensional charts, analytics, and data-driven UI.',
    },
  },
];

function Hobbies() {
  const { lang } = useLang();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {hobbies.map(({ icon: Icon, title, description }) => (
        <div
          key={title.ru}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <div className="shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{title[lang]}</h3>
            <p className="mt-1 text-sm text-slate-600">{description[lang]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hobbies;
