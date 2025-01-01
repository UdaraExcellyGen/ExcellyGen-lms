import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaChartLine, FaUsers, FaSun, FaMoon, FaUserGraduate, FaUsersCog, FaGlobe } from 'react-icons/fa';
import './Home.css';

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
      footer: `© ${new Date().getFullYear()} Excellygen (Pvt). Ltd. All rights reserved.`,
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
      footer: `© ${new Date().getFullYear()} Excellygen (Pvt). Ltd. Alle rettigheter reservert.`,
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
    <div className="home">
      <header className="header">
        <nav className="nav">
          <button onClick={toggleLanguage} className="nav-button">
            <FaGlobe size={20} />
            <span>{language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="nav-button"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </nav>
      </header>

      <main className="main">
        <section className="main-section">
          <h1 className="main-title">{t.title}</h1>
          <p className="main-subtitle">{t.subtitle}</p>
          <div className="button-group">
            <Link to="/member-area">
              <button className="action-button">
                <FaUserGraduate />
                {t.memberArea}
              </button>
            </Link>
            <Link to="/employee-management">
              <button className="action-button">
                <FaUsersCog />
                {t.employeeManagement}
              </button>
            </Link>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <FaChalkboardTeacher className="feature-icon" style={{ color: '#4f46e5' }} />
            <h3 className="feature-title">{t.courseAccess.title}</h3>
            <p className="feature-description">{t.courseAccess.description}</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" style={{ color: '#9333ea' }} />
            <h3 className="feature-title">{t.progressTracking.title}</h3>
            <p className="feature-description">{t.progressTracking.description}</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" style={{ color: '#db2777' }} />
            <h3 className="feature-title">{t.aiSearch.title}</h3>
            <p className="feature-description">{t.aiSearch.description}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default Home;
