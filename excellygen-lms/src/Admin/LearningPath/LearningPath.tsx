import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Target,
  ClipboardList,
  Settings,
  Palette,
  LineChart,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../../components/Layout';

interface PathCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  totalCourses: number;
}

const LearningPath: React.FC = () => {
  const navigate = useNavigate();
  
  const paths: PathCard[] = [
    {
      title: "Software Engineering",
      icon: <Code2 size={30} className="text-white" />,
      description: "Master modern software development practices and programming languages",
      totalCourses: 8
    },
    {
      title: "Quality Assurance",
      icon: <Target size={30} className="text-white" />,
      description: "Learn testing methodologies and quality control processes",
      totalCourses: 6
    },
    {
      title: "Project Management",
      icon: <ClipboardList size={30} className="text-white" />,
      description: "Develop skills in managing software projects and teams",
      totalCourses: 5
    },
    {
      title: "DevOps",
      icon: <Settings size={30} className="text-white" />,
      description: "Learn automation, CI/CD, and cloud infrastructure",
      totalCourses: 7
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={30} className="text-white" />,
      description: "Create engaging user interfaces and experiences",
      totalCourses: 6
    },
    {
      title: "Data Science",
      icon: <LineChart size={30} className="text-white" />,
      description: "Master data analysis and machine learning",
      totalCourses: 9
    },
    {
      title: "Cloud Computing",
      icon: <Cloud size={30} className="text-white" />,
      description: "Explore cloud platforms and services",
      totalCourses: 7
    },
    {
      title: "Cyber Security",
      icon: <Shield size={30} className="text-white" />,
      description: "Learn to protect systems and data",
      totalCourses: 8
    }
  ];

  const handleExplore = (pathTitle: string) => {
    navigate(`/courses/${encodeURIComponent(pathTitle)}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-[#BF4BF6] to-[#D68BF9] text-transparent bg-clip-text font-unbounded font-bold mb-4">
            Choose Your Path
          </h1>
          <p className="text-[#F6E6FF] text-center text-lg mb-12 font-nunito">
            Select your career path and start your journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {paths.map((path, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative min-h-[320px] hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1B0A3F] rounded-full p-4 shadow-lg">
                {path.icon}
              </div>

              {/* Content */}
              <div className="pt-16">
                <h3 className="text-xl text-[#BF4BF6] font-unbounded font-bold mb-3 text-center">
                  {path.title}
                </h3>
                <p className="text-[#F6E6FF] mb-4 font-nunito text-center">
                  {path.description}
                </p>
                <p className="absolute bottom-6 left-6 right-6 px-6 py-3 text-[#D68BF9] text-sm mb-16 font-nunito text-center">
                  {path.totalCourses} Courses Available
                </p>
              </div>

              {/* Gradient Button */}
              <button
                onClick={() => handleExplore(path.title)}
                className="absolute bottom-6 left-6 right-6 px-6 py-3 bg-gradient-to-r from-[#BF4BF6] to-[#7A00B8] text-white rounded-full hover:from-[#D68BF9] hover:to-[#BF4BF6] transition-all duration-300 font-nunito shadow-lg"
              >
                Explore Path
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LearningPath;