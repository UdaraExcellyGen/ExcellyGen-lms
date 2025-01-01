// src/pages/MemberArea.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MemberArea: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black flex flex-col">
      {/* Header */}
      <header className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 shadow-sm">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Excelly LMS - Member Area</h1>
          {/* Optional: Add navigation links or user info here */}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Welcome to the Member Area</h1>
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md">
            Back to Home
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="h-16 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Excelly Labs (Pvt). Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MemberArea;
