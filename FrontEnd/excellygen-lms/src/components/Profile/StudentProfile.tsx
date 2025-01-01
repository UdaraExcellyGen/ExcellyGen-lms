import React, { useState } from 'react';
import { User, Book, Award, Star, Calendar, Trophy } from 'lucide-react';
import './StudentProfile.css';

interface Course {
  id: string;
  name: string;
  progress: number;
  completionDate?: string;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
}

const StudentProfile = () => {
  const [activeCourses] = useState<Course[]>([
    { id: '1', name: 'Advanced React Development', progress: 75 },
    { id: '2', name: 'Machine Learning Basics', progress: 45 },
    { id: '3', name: 'Cloud Architecture', progress: 90 }
  ]);

  const [earnedBadges] = useState<Badge[]>([
    { id: '1', name: 'Quick Learner', icon: '🚀' },
    { id: '2', name: 'Perfect Score', icon: '⭐' },
    { id: '3', name: 'Team Player', icon: '👥' }
  ]);

  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={48} className="avatar-icon" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-title">Software Engineering Student</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {/* Learning Progress Card */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                <Book className="card-icon" /> Learning Progress
              </h2>
            </div>
            <div className="card-content">
              <div className="progress-list">
                {activeCourses.map(course => (
                  <div key={course.id} className="progress-item">
                    <div className="progress-header">
                      <span className="course-name">{course.name}</span>
                      <span className="progress-value">{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                <Award className="card-icon" /> Achievements
              </h2>
            </div>
            <div className="card-content">
              <div className="badges-container">
                {earnedBadges.map(badge => (
                  <span key={badge.id} className="badge achievement-badge">
                    <span className="badge-icon">{badge.icon}</span>
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                <Trophy className="card-icon" /> Skills
              </h2>
            </div>
            <div className="card-content">
              <div className="skills-container">
                <span className="badge skill-badge primary">React</span>
                <span className="badge skill-badge secondary">TypeScript</span>
                <span className="badge skill-badge tertiary">Node.js</span>
                <span className="badge skill-badge quaternary">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;