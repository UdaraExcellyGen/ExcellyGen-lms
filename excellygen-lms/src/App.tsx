import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearnerProfile from './Learner/LearnerProfile/LearnerProfile';
import StudentDashboard from './Learner/LearnerDashboard/LearnerDashboard';
import LearningPath from './Admin/LearningPath/LearningPath';
import { SidebarProvider } from './components/SidebarContext';
import AdminDashboard from './Admin/AdminDashboard/AdminDashboard';
import CourseContent from './Admin/CourseContent/CourseContent';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learning-path" element={<SidebarProvider><LearningPath /></SidebarProvider>} />
          <Route path="/courses/:pathTitle" element={<CourseContent />} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/profile" element={<SidebarProvider> <LearnerProfile /></SidebarProvider> } />
            <Route path="/student-dashboard" element={
            <SidebarProvider>
            <StudentDashboard />
            </SidebarProvider>
            } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;