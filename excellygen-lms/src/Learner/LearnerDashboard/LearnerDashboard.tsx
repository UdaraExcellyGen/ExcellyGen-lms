// src/pages/StudentDashboard/index.tsx
import React from 'react';
import {
  BookOpen,
  Clock,
  Trophy,
  Calendar,
  TrendingUp,
  PlayCircle,
  BarChart2,
  FileText,
  ChevronRight,
  Star,
  Clock3
} from 'lucide-react';
import Layout from '../../components/Layout';

const StudentDashboard = () => {
  // Mock data - replace with real data
  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, label: "Active Courses", value: "4" },
    { icon: <Clock className="w-6 h-6" />, label: "Learning Hours", value: "26" },
    { icon: <Trophy className="w-6 h-6" />, label: "Certificates", value: "3" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Course Progress", value: "68%" }
  ];

  const currentCourses = [
    {
      title: "Advanced React Development",
      progress: 75,
      timeLeft: "2 weeks left",
      image: "/api/placeholder/120/80",
      lastAccessed: "2 hours ago"
    },
    {
      title: "Cloud Computing Fundamentals",
      progress: 45,
      timeLeft: "4 weeks left",
      image: "/api/placeholder/120/80",
      lastAccessed: "1 day ago"
    },
    {
      title: "Data Science with Python",
      progress: 30,
      timeLeft: "6 weeks left",
      image: "/api/placeholder/120/80",
      lastAccessed: "3 days ago"
    }
  ];

  const upcomingDeadlines = [
    {
      title: "React Project Submission",
      course: "Advanced React Development",
      dueDate: "Tomorrow, 11:59 PM",
      type: "Assignment"
    },
    {
      title: "Cloud Architecture Quiz",
      course: "Cloud Computing Fundamentals",
      dueDate: "Friday, 3:00 PM",
      type: "Quiz"
    }
  ];

  const weeklySchedule = [
    {
      title: "Live Session: React State Management",
      time: "Tuesday, 2:00 PM",
      duration: "1h 30m"
    },
    {
      title: "Group Discussion: Cloud Services",
      time: "Wednesday, 4:00 PM",
      duration: "1h"
    }
  ];

  return (
    <Layout>
    <div className="p-8">
      {/* Welcome Section */}
<div className="mb-8">
  <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John! 👋</h1>
  <p className="text-gray-200">Here's what's happening with your learning journey.</p>
</div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-phlox/20 to-french-violet/20 rounded-xl flex items-center justify-center text-phlox">
                {stat.icon}
              </div>
              <span className="text-2xl font-bold text-russian-violet">{stat.value}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-russian-violet">Current Courses</h2>
              <button className="text-french-violet hover:text-indigo text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-6">
              {currentCourses.map((course, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-24 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-russian-violet mb-2">{course.title}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-gradient-to-r from-phlox to-french-violet rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock3 size={14} />
                        {course.timeLeft}
                      </span>
                      <span>Last accessed {course.lastAccessed}</span>
                    </div>
                  </div>
                  <button className="self-center p-2 rounded-lg hover:bg-white transition-colors duration-200">
                    <PlayCircle size={24} className="text-french-violet" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-russian-violet">Weekly Schedule</h2>
              <button className="text-french-violet hover:text-indigo text-sm font-medium">
                View Calendar
              </button>
            </div>
            <div className="space-y-4">
              {weeklySchedule.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-phlox/10 rounded-xl flex items-center justify-center text-phlox">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-russian-violet">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.time} • {event.duration}</p>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white transition-colors duration-200">
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-russian-violet mb-6">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-phlox">{deadline.type}</span>
                    <span className="text-sm text-gray-500">{deadline.dueDate}</span>
                  </div>
                  <h3 className="font-semibold text-russian-violet mb-1">{deadline.title}</h3>
                  <p className="text-sm text-gray-600">{deadline.course}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-russian-violet mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-phlox/10 rounded-lg flex items-center justify-center text-phlox">
                  <FileText size={20} />
                </div>
                <span className="text-sm font-medium text-russian-violet">Resources</span>
              </button>
              <button className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-phlox/10 rounded-lg flex items-center justify-center text-phlox">
                  <BarChart2 size={20} />
                </div>
                <span className="text-sm font-medium text-russian-violet">Progress</span>
              </button>
              <button className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-phlox/10 rounded-lg flex items-center justify-center text-phlox">
                  <Trophy size={20} />
                </div>
                <span className="text-sm font-medium text-russian-violet">Certificates</span>
              </button>
              <button className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-phlox/10 rounded-lg flex items-center justify-center text-phlox">
                  <Star size={20} />
                </div>
                <span className="text-sm font-medium text-russian-violet">Achievements</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default StudentDashboard;