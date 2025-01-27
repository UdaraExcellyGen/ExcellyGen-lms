import React, { useState } from 'react';
import { Book, Users, Bell, Settings, ChevronDown } from 'lucide-react';

const AdminDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    { id: 1, text: 'New course submission needs review', time: '2 hours ago', isNew: true },
    { id: 2, text: 'User reports for certificate generation', time: '3 hours ago', isNew: true },
    { id: 3, text: 'System maintenance scheduled', time: '5 hours ago', isNew: true },
  ];

  const stats = {
    coordinators: { total: 45, active: 28 },
    users: { total: 1250, active: 890 }
  };

  return (
    <div className="min-h-screen bg-[#F6E6FF] p-4 sm:p-6 lg:p-8">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#BF4BF6] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl text-[#1B0A3F] font-['Unbounded']">Admin Name</h1>
              <p className="text-sm sm:text-base text-gray-400 font-['Nunito_Sans']">System Administrator</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-end">
            <div className="relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 text-gray-500 hover:text-[#BF4BF6] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-[#F6E6FF]"
              >
                <Settings size={20} />
                <span className="font-['Nunito_Sans'] hidden sm:inline">System Settings</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${showSettings ? 'rotate-180' : ''}`} />
              </button>
              
              {showSettings && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-20">
                  {['Profile Settings', 'System Config', 'Backup', 'Security'].map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#F6E6FF] hover:text-[#BF4BF6] transition-colors duration-200 font-['Nunito_Sans']"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative hover:text-[#BF4BF6] transition-colors duration-200"
              >
                <Bell size={20} className="text-gray-500 hover:text-[#BF4BF6]" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#BF4BF6] rounded-full text-white text-xs flex items-center justify-center animate-pulse">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-2 z-20">
                  <h3 className="px-4 py-2 font-semibold text-[#1B0A3F] border-b font-['Unbounded']">Notifications</h3>
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className="px-4 py-3 hover:bg-[#F6E6FF] cursor-pointer transition-colors duration-200"
                    >
                      <p className="text-sm text-[#1B0A3F] font-['Nunito_Sans']">{notif.text}</p>
                      <p className="text-xs text-gray-500 mt-1 font-['Nunito_Sans']">{notif.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Three Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {/* Course Coordinator Management Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <Book size={24} className="text-[#BF4BF6]" />
            <h2 className="text-lg text-[#1B0A3F] font-['Unbounded']">Course Coordinator Management</h2>
          </div>
          
          <div className="space-y-6 mb-6">
            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <p className="text-4xl text-[#BF4BF6] font-['Unbounded'] mb-2">{stats.coordinators.total}</p>
              <p className="text-gray-400 font-['Nunito_Sans']">Total Courses Coordinators</p>
            </div>
            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <p className="text-4xl text-[#BF4BF6] font-['Unbounded'] mb-2">{stats.coordinators.active}</p>
              <p className="text-gray-400 font-['Nunito_Sans']">Active Courses Coordinators</p>
            </div>
          </div>
          
          <button className="w-full py-3 bg-[#BF4BF6] text-white rounded-xl font-['Nunito_Sans'] transform transition-all duration-300 hover:bg-[#7A00B8] hover:shadow-lg active:scale-95">
            View More
          </button>
        </div>

        {/* User Management Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <Users size={24} className="text-[#BF4BF6]" />
            <h2 className="text-lg text-[#1B0A3F] font-['Unbounded']">User Management</h2>
          </div>
          
          <div className="space-y-6 mb-6">
            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <p className="text-4xl text-[#BF4BF6] font-['Unbounded'] mb-2">{stats.users.total}</p>
              <p className="text-gray-400 font-['Nunito_Sans']">Total Users</p>
            </div>
            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <p className="text-4xl text-[#BF4BF6] font-['Unbounded'] mb-2">{stats.users.active}</p>
              <p className="text-gray-400 font-['Nunito_Sans']">Active Users</p>
            </div>
          </div>
          
          <button className="w-full py-3 bg-[#BF4BF6] text-white rounded-xl font-['Nunito_Sans'] transform transition-all duration-300 hover:bg-[#7A00B8] hover:shadow-lg active:scale-95">
            View More
          </button>
        </div>

        {/* Recent Notifications Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Bell size={24} className="text-[#BF4BF6]" />
            <h2 className="text-lg text-[#1B0A3F] font-['Unbounded']">Recent Notifications</h2>
          </div>
          
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div 
                key={index} 
                className="p-4 bg-[#F6E6FF] rounded-xl transform transition-all duration-300 hover:translate-x-2 hover:shadow-md cursor-pointer"
              >
                <p className="text-[#1B0A3F] font-['Nunito_Sans'] mb-1">{notification.text}</p>
                <p className="text-sm text-gray-500 font-['Nunito_Sans']">{notification.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { text: 'Manage Courses Coordinators', color: 'bg-[#00BFFF]', hoverColor: 'hover:bg-[#0099CC]' },
          { text: 'Manage Users', color: 'bg-[#0609C6]', hoverColor: 'hover:bg-[#0507A3]' },
          { text: 'View Reports', color: 'bg-[#03045e]', hoverColor: 'hover:bg-[#02034B]' },
          { text: 'Manage Learning Paths', color: 'bg-[#7A00B8]', hoverColor: 'hover:bg-[#5F008F]' }
        ].map((button, index) => (
          <button 
            key={index}
            className={`py-3 px-4 text-white rounded-xl font-['Nunito_Sans'] ${button.color} ${button.hoverColor} transform transition-all duration-300 hover:shadow-lg active:scale-95 text-sm sm:text-base`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;