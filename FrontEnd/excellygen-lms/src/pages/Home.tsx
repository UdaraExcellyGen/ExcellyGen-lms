import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaChartLine, FaUsers, FaSun, FaMoon, FaUserGraduate, FaUsersCog, FaGlobe } from 'react-icons/fa';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'no'>('en');

  const content = {
    en: {
      title: 'Welcome to Excelly LMS',
      subtitle: 'Empowering your team with seamless learning and development tools.',
      memberArea: 'Go to Member Area',
      employeeManagement: 'Employee Management',
      courseAccess: {
        title: 'Course Access',
        description: 'Enroll in a variety of courses tailored to your role and career growth.'
      },
      progressTracking: {
        title: 'Progress Tracking',
        description: 'Monitor your learning journey and stay motivated with real-time updates.'
      },
      aiSearch: {
        title: 'AI-Based Search',
        description: 'Quickly find specific topics or phrases within training videos using AI.'
      },
      footer: `© ${new Date().getFullYear()} Excellygen (Pvt). Ltd. All rights reserved.`
    },
    no: {
      title: 'Velkommen til Excelly LMS',
      subtitle: 'Styrker teamet ditt med sømløse lærings- og utviklingsverktøy.',
      memberArea: 'Gå til medlemsområdet',
      employeeManagement: 'Ansattstyring',
      courseAccess: {
        title: 'Kurstilgang',
        description: 'Meld deg på ulike kurs tilpasset din rolle og karriereutvikling.'
      },
      progressTracking: {
        title: 'Fremgangssporing',
        description: 'Overvåk læreisen din og hold motivasjonen oppe med sanntidsoppdateringer.'
      },
      aiSearch: {
        title: 'AI-basert søk',
        description: 'Finn raskt spesifikke emner eller fraser i opplæringsvideoer ved hjelp av AI.'
      },
      footer: `© ${new Date().getFullYear()} Excellygen (Pvt). Ltd. Alle rettigheter reservert.`
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'no' : 'en');
  };

  const t = content[language];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <header className="h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-700 animate-[slideInLeft_0.5s_ease-out]">
        <nav className="h-full max-w-7xl mx-auto px-6 flex justify-end items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-xl text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <FaGlobe size={20} />
            <span className="font-medium">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-12 px-6 py-12">
        <section className="text-center max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
            {t.subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/member-area">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-lg animate-[fadeInUp_0.8s_ease-out_0.4s_backwards]">
                <FaUserGraduate />
                {t.memberArea}
              </button>
            </Link>
            <Link to="/employee-management">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-lg animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]">
                <FaUsersCog />
                {t.employeeManagement}
              </button>
            </Link>
          </div>
        </section>

        <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="bg-white/95 dark:bg-slate-800/95 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg text-center">
            <FaChalkboardTeacher className="mx-auto text-4xl text-indigo-600 dark:text-slate-50 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {t.courseAccess.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t.courseAccess.description}
            </p>
          </div>
          <div className="bg-white/95 dark:bg-slate-800/95 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg text-center">
            <FaChartLine className="mx-auto text-4xl text-purple-600 dark:text-slate-50 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {t.progressTracking.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t.progressTracking.description}
            </p>
          </div>
          <div className="bg-white/95 dark:bg-slate-800/95 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg text-center">
            <FaUsers className="mx-auto text-4xl text-pink-600 dark:text-slate-50 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {t.aiSearch.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t.aiSearch.description}
            </p>
          </div>
        </section>
      </main>

      <footer className="h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-700 flex items-center justify-center animate-[slideInLeft_0.5s_ease-out]">
        <p className="text-slate-500 dark:text-slate-400">
          {t.footer}
        </p>
      </footer>
    </div>
  );
};

export default Home;