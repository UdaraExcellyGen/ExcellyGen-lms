import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/signup_login/SignUp';
import Login from './components/signup_login/Login';
import Home from './components/pages/Home';
import StudentProfile from './components/Profile/StudentProfile';
import CourseContent from './components/LearningPath/CourseContent';
import LearningPath from './components/LearningPath/LearningPath';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/courses/:pathTitle" element={<CourseContent />} />
        <Route path="/user-profile" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
