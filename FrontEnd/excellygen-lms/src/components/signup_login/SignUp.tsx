import React, { useState } from 'react';
import './SignUp.css';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            ExcellyGen
          </a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      <div className="signup-form-container card">
        <div className="card-body">
          <h1>Create Account</h1>
          <p className="subtitle">Welcome to ExcellyGen-L&MS</p>

          <div className="social-buttons">
            <GoogleButton />
            <FacebookButton />
          </div>

          <div className="divider">OR</div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Enter your user name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
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
                  placeholder="Create a password"
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

            <button type="submit" className="create-account-btn">
              Create Account
            </button>

            <p className="terms">
              By creating an account, you agree to our <br />
              <a href="#"> Terms & Conditions</a>
            </p>

            <p className="login-link">
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
