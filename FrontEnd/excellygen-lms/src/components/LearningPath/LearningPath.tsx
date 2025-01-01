import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LearningPath.css';

interface PathCard {
  title: string;
  icon: string;
  description: string;
}

const LearningPath: React.FC = () => {
  const navigate = useNavigate();

  const paths: PathCard[] = [
    {
      title: "Software Engineering",
      icon: "💻",
      description: "Master modern software development practices and programming languages"
    },
    {
      title: "Quality Assurance",
      icon: "🎯",
      description: "Learn testing methodologies and quality control processes"
    },
    {
      title: "Project Management",
      icon: "📊",
      description: "Develop skills in managing software projects and teams"
    },
    {
      title: "DevOps",
      icon: "⚙️",
      description: "Learn automation, CI/CD, and cloud infrastructure"
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Create engaging user interfaces and experiences"
    },
    {
      title: "Data Science",
      icon: "📈",
      description: "Master data analysis and machine learning"
    },
    {
      title: "Cloud Computing",
      icon: "☁️",
      description: "Explore cloud platforms and services"
    },
    {
      title: "Cyber Security",
      icon: "🔒",
      description: "Learn to protect systems and data"
    }
  ];

  const handleExplore = (pathTitle: string) => {
    navigate(`/courses/${encodeURIComponent(pathTitle)}`);
  };

  return (
    <div className="learning-path-container">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">ExcellyGen</a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      <div className="content">
        <h1 id="cyp">Choose Your Path</h1>
        <p className="subtitle">Select your career path and start your journey</p>

        <div className="path-grid">
          {paths.map((path, index) => (
            <div className="path-card" key={index}>
              <div className="card-content">
                <div className="icon">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <button
                  className="explore-btn"
                  onClick={() => handleExplore(path.title)}
                >
                  Explore Path
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
