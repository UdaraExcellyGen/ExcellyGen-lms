import React from "react";
import "./SocialButtons.css";

// Define props interface if needed for future expansion
interface GoogleButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      data-testid="social-auth-button-google"
      aria-label="Continue with Google"
      type="button"
      className="social-auth-button"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="button-content">
        <div className="icon-wrapper">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            aria-hidden="true" 
            role="presentation" 
            focusable="false" 
            style={{ display: "block", height: "20px", width: "20px" }}
          >
            <path 
              fill="#4285f4" 
              d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"
            />
            <path 
              fill="#34a853" 
              d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"
            />
            <path 
              fill="#fbbc02" 
              d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"
            />
            <path 
              fill="#ea4335" 
              d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"
            />
          </svg>
        </div>
        <div className="button-text">Continue with Google</div>
        <div className="icon-wrapper"></div>
      </div>
    </button>
  );
};

export default GoogleButton;