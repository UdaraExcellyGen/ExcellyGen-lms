// src/pages/LearnerProfile/index.tsx
import { 
  User, 
  Award,
  Target,
  Activity,
  BookCheck,
  BookOpen,
  Medal,
  FileText,
  Star,
  Shield,
  Rocket,
  Edit,
  TrendingUp,
  Clock,
  CheckCircle,
  Download
} from 'lucide-react';
import Layout from '../../components/Layout';

const LearnerProfile = () => {
  const learnerData = {
    name: "John Doe",
    role: "Software Engineer",
    level: "Advanced",
    progress: 78,
    completedCourses: 12,
    inProgress: 3,
    certifications: 8,
    learningStreak: "15 days",
    badges: [
      { id: 1, name: "Top Performer", color: "#BF4BF6", icon: Star, description: "Achieved 95% in Advanced React" },
      { id: 2, name: "Security Expert", color: "#7A00B8", icon: Shield, description: "Completed Security Certification" },
      { id: 3, name: "Fast Learner", color: "#52007C", icon: Rocket, description: "Finished 5 courses in a month" },
    ],
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 70 }
    ],
    recentActivities: [
      { id: 1, activity: "Completed Advanced React Course", date: "2 days ago", type: "completion" },
      { id: 2, activity: "Earned AWS Certificate", date: "1 week ago", type: "certification" },
      { id: 3, activity: "Started DevOps Basics", date: "2 weeks ago", type: "start" }
    ]
  };

  return (
    <Layout>
      <main className="px-4 md:px-8 py-6 md:py-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-russian-violet to-french-violet rounded-2xl p-4 md:p-8 mb-6 md:mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group transition-all duration-300 hover:scale-105">
                  <User className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-phlox rounded-lg px-2 py-1 text-xs text-white font-medium shadow-lg shadow-phlox/20">
                  Level {learnerData.level}
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{learnerData.name}</h1>
                <p className="text-gray-200 mb-3">{learnerData.role}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                    <TrendingUp className="w-4 h-4" /> {learnerData.progress}% Complete
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                    <Clock className="w-4 h-4" /> {learnerData.learningStreak}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:shadow-white/10">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:shadow-white/10">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Completed Courses */}
          <div className="group bg-white p-[1px] rounded-2xl bg-gradient-to-r from-phlox to-french-violet hover:shadow-lg hover:shadow-phlox/10 transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 md:p-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-phlox/20 to-french-violet/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-phlox" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-russian-violet">{learnerData.completedCourses}</h3>
                  <p className="text-gray-600">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="group bg-white p-[1px] rounded-2xl bg-gradient-to-r from-phlox to-french-violet hover:shadow-lg hover:shadow-phlox/10 transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 md:p-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-phlox/20 to-french-violet/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-phlox" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-russian-violet">{learnerData.inProgress}</h3>
                  <p className="text-gray-600">In Progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="group bg-white p-[1px] rounded-2xl bg-gradient-to-r from-phlox to-french-violet hover:shadow-lg hover:shadow-phlox/10 transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 md:p-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-phlox/20 to-french-violet/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-phlox" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-russian-violet">{learnerData.certifications}</h3>
                  <p className="text-gray-600">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills and Badges Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-phlox" />
              <h2 className="text-xl font-bold text-russian-violet">Skills & Expertise</h2>
            </div>
            <div className="space-y-4">
              {learnerData.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-phlox to-french-violet rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-6">
              <Medal className="w-6 h-6 text-phlox" />
              <h2 className="text-xl font-bold text-russian-violet">Achievements</h2>
            </div>
            <div className="grid gap-4">
              {learnerData.badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className="group relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${badge.color}20` }}
                    >
                      <badge.icon className="w-6 h-6" style={{ color: badge.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-russian-violet">{badge.name}</h3>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-6 h-6 text-phlox" />
            <h2 className="text-xl font-bold text-russian-violet">Learning Journey</h2>
          </div>
          <div className="space-y-6">
            {learnerData.recentActivities.map((activity, index) => (
              <div 
                key={activity.id} 
                className="relative flex items-start gap-4"
              >
                <div className="absolute left-6 top-10 bottom-0 w-px bg-gray-200 -z-10">
                  {index !== learnerData.recentActivities.length - 1 && 
                    <div className="absolute w-px h-full bg-gray-200"></div>
                  }
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-phlox/20 to-french-violet/20 flex items-center justify-center shrink-0">
                  {activity.type === 'completion' && <CheckCircle className="w-6 h-6 text-green-500" />}
                  {activity.type === 'certification' && <Award className="w-6 h-6 text-phlox" />}
                  {activity.type === 'start' && <BookOpen className="w-6 h-6 text-blue-500" />}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-4 group hover:bg-gray-100 transition-colors duration-200">
                  <p className="text-gray-700 font-medium">{activity.activity}</p>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LearnerProfile;