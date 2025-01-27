import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Layers, ArrowLeft } from 'lucide-react';
import SideBar from '../../components/Sidebar';

// Service Interfaces
interface EnrollmentService {
  enrollCourse: (courseId: string) => Promise<void>;
}

interface AnalyticsService {
  trackEnrollment: (courseId: string, platform: string) => Promise<void>;
}

interface NotificationService {
  sendEnrollmentNotification: (courseId: string) => Promise<void>;
}

interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  enrolled?: boolean;
  progress?: number;
  category: string;
}

const CourseContent: React.FC = () => {
  const { pathTitle } = useParams<{ pathTitle: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'courses' | 'learning'>('courses');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate path and redirect if invalid
  useEffect(() => {
    const validPaths = [
      'Software Engineering',
      'Quality Assurance',
      'Project Management',
      'DevOps',
      'UI/UX Design',
      'Data Science',
      'Cloud Computing',
      'Cyber Security'
    ];
    
    if (!validPaths.includes(pathTitle || '')) {
      navigate('/');
    }
  }, [pathTitle, navigate]);

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
    // ... other courses
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
    // ... other enrolled courses
  ];

  const filteredCourses = courses.filter(course => course.category === pathTitle);
  const filteredEnrolledCourses = enrolledCourses.filter(course => course.category === pathTitle);

  const handleEnroll = async (courseId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Example service calls
      const enrollmentService: EnrollmentService = {
        enrollCourse: async (id) => { /* Implementation */ }
      };
      
      const analyticsService: AnalyticsService = {
        trackEnrollment: async (id, platform) => { /* Implementation */ }
      };
      
      const notificationService: NotificationService = {
        sendEnrollmentNotification: async (id) => { /* Implementation */ }
      };

      // Enroll in course
      await enrollmentService.enrollCourse(courseId);
      
      // Track analytics
      await analyticsService.trackEnrollment(courseId, 'internal');
      
      // Send notification
      await notificationService.sendEnrollmentNotification(courseId);

      setLoading(false);
    } catch (err) {
      setError('Failed to enroll in the course. Please try again.');
      setLoading(false);
    }
  };

  const handleContinueLearning = (courseId: string) => {
    navigate(`/course/${courseId}/learn`);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#52007C] to-[#1B0A3F]">
      <SideBar/>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-[#BF4BF6] to-[#D68BF9] text-transparent bg-clip-text font-unbounded font-bold mb-4 leading-loose pb-2">
            {pathTitle}
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-8 py-4 rounded-full font-nunito text-lg transition-all duration-300
              ${activeTab === 'courses'
                ? 'bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] text-white shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'}`}
            onClick={() => setActiveTab('courses')}
          >
            Available Courses
          </button>
          <button
            className={`px-8 py-3 rounded-full font-nunito text-lg transition-all duration-300
              ${activeTab === 'learning'
                ? 'bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] text-white shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'}`}
            onClick={() => setActiveTab('learning')}
          >
            My Learning
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'courses' ? (
            filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div
                  key={course.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl text-[#BF4BF6] font-unbounded font-bold">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-[#F6E6FF] font-nunito">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Layers size={16} className="mr-2" />
                        {course.level}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleEnroll(course.id)}
                      disabled={loading}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] text-white rounded-full hover:from-[#D68BF9] hover:to-[#BF4BF6] transition-all duration-300 font-nunito shadow-lg disabled:opacity-50"
                    >
                      {loading ? 'Enrolling...' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#F6E6FF] font-nunito">
                No courses available for this path yet.
              </div>
            )
          ) : (
            filteredEnrolledCourses.length > 0 ? (
              filteredEnrolledCourses.map(course => (
                <div
                  key={course.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl text-[#BF4BF6] font-unbounded font-bold">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-[#F6E6FF] font-nunito">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Layers size={16} className="mr-2" />
                        {course.level}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <p className="text-[#F6E6FF] font-nunito text-sm">
                        {course.progress}% Complete
                      </p>
                    </div>
                    <button 
                      onClick={() => handleContinueLearning(course.id)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] text-white rounded-full hover:from-[#D68BF9] hover:to-[#BF4BF6] transition-all duration-300 font-nunito shadow-lg"
                    >
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#F6E6FF] font-nunito">
                You haven't enrolled in any courses for this path yet.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;