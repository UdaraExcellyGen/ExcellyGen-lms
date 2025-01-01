import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  // Initialize navigate hook
  const navigate = useNavigate();

  const togglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);

    // Redirect to Learning Path page after login
    navigate('/learning-path');
  };

  return (
    <div className="login-container">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            ExcellyGen
          </a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      <div className="login-form-container card">
        <div className="card-body">
          <h1 className="Log">Login</h1>
          <p className="subtitleLog">Welcome back to ExcellyGen-L&MS</p>

          <div className="social-buttons">
            <GoogleButton />
            <FacebookButton />
          </div>

          <div className="divider">OR</div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email"
                name="email" 
                className="form-control" 
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-input">
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control" 
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <i 
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={togglePassword}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && togglePassword()}
                ></i>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-link">
              Don't have an Account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
