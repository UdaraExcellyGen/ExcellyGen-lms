import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/signup_login/SignUp';
import Login from './components/signup_login/Login';
<<<<<<< Updated upstream
import Home from './pages/Home';
=======
import LearningPath from './components/LearningPath/LearningPath';
import CourseContent from './components/LearningPath/CourseContent';
import StudentProfile from './components/Profile/StudentProfile';
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
=======
        <Route path="/" element={<SignUp />} />
>>>>>>> Stashed changes
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
