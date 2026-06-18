import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Code, Sparkles, User } from 'lucide-react';
import About from './pages/About';
import Experience from './pages/Experience';
import CodeSamples from './pages/CodeSamples';
import Hobbies from './pages/Hobbies';
import { LanguageProvider, useLang } from './contexts/LanguageContext';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const navLabels = {
  about:      { ru: 'Обо мне',     en: 'About' },
  experience: { ru: 'Опыт',        en: 'Experience' },
  code:       { ru: 'Код',         en: 'Code' },
  hobbies:    { ru: 'Хобби',       en: 'Hobbies' },
};

const badgeLabels = {
  about:      { ru: 'Обо мне',       en: 'About me' },
  experience: { ru: 'Опыт работы',   en: 'Work experience' },
  code:       { ru: 'Примеры кода',  en: 'Code samples' },
  hobbies:    { ru: 'Хобби',         en: 'Hobbies' },
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900${isActive ? ' bg-slate-100 text-slate-900 font-medium' : ''}`;

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
      className="ml-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
      aria-label="Switch language"
    >
      {lang === 'ru' ? 'EN' : 'RU'}
    </button>
  );
}

function BottomNav() {
  const { lang } = useLang();
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-center gap-2 px-6 py-4 text-sm text-slate-500 md:gap-4">
        <NavLink to="/" end className={navLinkClass}>
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{navLabels.about[lang]}</span>
        </NavLink>
        <NavLink to="/experience" className={navLinkClass}>
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">{navLabels.experience[lang]}</span>
        </NavLink>
        <NavLink to="/code" className={navLinkClass}>
          <Code className="h-4 w-4" />
          <span className="hidden sm:inline">{navLabels.code[lang]}</span>
        </NavLink>
        <NavLink to="/hobbies" className={navLinkClass}>
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">{navLabels.hobbies[lang]}</span>
        </NavLink>
        <LangToggle />
      </nav>
    </footer>
  );
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 pb-24"
    >
      {children}
    </motion.main>
  );
}

function PageBadge({ icon, labelKey }: { icon: React.ReactNode; labelKey: keyof typeof badgeLabels }) {
  const { lang } = useLang();
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700 shadow-sm">
      {icon}
      <span>{badgeLabels[labelKey][lang]}</span>
    </div>
  );
}

function AppRoutes() {
  return (
    <div className="min-h-screen text-slate-900">
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <PageBadge icon={<User className="h-4 w-4" />} labelKey="about" />
              <div className="glass-card rounded-3xl p-8 shadow-glow">
                <About />
              </div>
            </PageLayout>
          }
        />
        <Route
          path="/experience"
          element={
            <PageLayout>
              <PageBadge icon={<Briefcase className="h-4 w-4" />} labelKey="experience" />
              <div className="glass-card rounded-3xl p-8 shadow-glow">
                <Experience />
              </div>
            </PageLayout>
          }
        />
        <Route
          path="/code"
          element={
            <PageLayout>
              <PageBadge icon={<Code className="h-4 w-4" />} labelKey="code" />
              <CodeSamples />
            </PageLayout>
          }
        />
        <Route
          path="/hobbies"
          element={
            <PageLayout>
              <PageBadge icon={<Sparkles className="h-4 w-4" />} labelKey="hobbies" />
              <div className="glass-card rounded-3xl p-8 shadow-glow">
                <Hobbies />
              </div>
            </PageLayout>
          }
        />
      </Routes>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
