import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup_login/SignUp';
import Login from './components/signup_login/Login';
import { Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Default route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
