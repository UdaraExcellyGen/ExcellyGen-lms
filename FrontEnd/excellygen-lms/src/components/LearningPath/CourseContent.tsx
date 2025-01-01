import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseContent.css';

interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  enrolled?: boolean;
  progress?: number;
  category: string;
}

interface CourseContentProps {}

const CourseContent: React.FC<CourseContentProps> = () => {
  const { pathTitle } = useParams<{ pathTitle: string }>();
  const [activeTab, setActiveTab] = useState<'courses' | 'learning'>('courses');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Introduction to Software Engineering',
      duration: '8 weeks',
      level: 'Beginner',
      category: 'Software Engineering'
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      duration: '12 weeks',
      level: 'Intermediate',
      category: 'Software Engineering'
    },
    {
      id: '3',
      title: 'UI/UX Design Basics',
      duration: '6 weeks',
      level: 'Beginner',
      category: 'UI/UX Design'
    },
    // Add more courses...
  ];

  const enrolledCourses: Course[] = [
    {
      id: '1',
      title: 'Introduction to Software Engineering',
      duration: '8 weeks',
      level: 'Beginner',
      enrolled: true,
      progress: 75,
      category: 'Software Engineering'
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      duration: '12 weeks',
      level: 'Intermediate',
      enrolled: true,
      progress: 30,
      category: 'Software Engineering'
    }
  ];

  const filteredCourses = courses.filter(course => course.category === pathTitle);
  const filteredEnrolledCourses = enrolledCourses.filter(course => course.category === pathTitle);

  return (
    <div className="course-content-container">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">ExcellyGen</a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      <div className="content">
        <h1>{pathTitle}</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            Available Courses
          </button>
          <button
            className={`tab ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            My Learning
          </button>
        </div>

        <div className="courses-grid">
          {activeTab === 'courses' ? (
            filteredCourses.map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <div className="course-details">
                    <span><i className="far fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-layer-group"></i> {course.level}</span>
                  </div>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            ))
          ) : (
            filteredEnrolledCourses.map(course => (
              <div className="course-card enrolled" key={course.id}>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <div className="course-details">
                    <span><i className="far fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-layer-group"></i> {course.level}</span>
                  </div>
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${course.progress}%` }}
                    />
                    <span className="progress-text">{course.progress}% Complete</span>
                  </div>
                  <button className="continue-btn">Continue Learning</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
