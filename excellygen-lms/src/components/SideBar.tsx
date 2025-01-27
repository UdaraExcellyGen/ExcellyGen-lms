import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ChevronLeft,
    BookOpen,
    Award,
    BarChart2,
    Settings,
    Home,
    GraduationCap,
    UserCircle,
    Search,
    Trophy,
    Target,
    MessageSquare
} from 'lucide-react';
import { useSidebar } from './SidebarContext';

const SideBar = () => {
    const { isCollapsed, setIsCollapsed } = useSidebar();
    const location = useLocation();

    const learningMenuItems = [
        { title: 'Dashboard', icon: Home, path: '/student-dashboard' },
        { title: 'Courses', icon: BookOpen, path: '/learning-path' },
        { title: 'Learning Paths', icon: GraduationCap, path: '/paths' },
        { title: 'Upcoming Assessments', icon: Award, path: '/assessments' },
        { title: 'Analytics', icon: BarChart2, path: '/analytics' },
    ];

    const progressMenuItems = [
        { title: 'Certificates', icon: Award, path: '/certificates' },
        { title: 'Badges & Rewards', icon: Trophy, path: '/badges' },
        { title: 'Skill Analysis', icon: Target, path: '/skill-analysis' },
    ];

    const communityMenuItems = [
        { title: 'Discussion Forum', icon: MessageSquare, path: '/forum' },
    ];

    const bottomMenuItems = [
        { title: 'Settings', icon: Settings, path: '/settings' },
        { title: 'Profile', icon: UserCircle, path: '/profile' },
    ];

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    const renderMenuSection = (items, title) => (
        <div className="mb-6">
            {!isCollapsed && (
                <p className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase">{title}</p>
            )}
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className={`w-full flex items-center rounded-xl px-4 py-3 mb-2 
                        transition-all duration-300 group hover:bg-gray-50
                        ${isActivePath(item.path) ? 'bg-[#F6E6FF] text-[#52007C]' : 'text-gray-600'}`}
                >
                    <item.icon className="h-5 w-5 text-gray-500 group-hover:text-[#52007C]" />
                    {!isCollapsed && (
                        <span className={`ml-3 text-sm font-medium transition-colors duration-300
                            ${isActivePath(item.path) ? 'text-[#52007C]' : 'text-gray-700'}`}>
                            {item.title}
                        </span>
                    )}
                </Link>
            ))}
        </div>
    );

    return (
        <div className="fixed top-0 left-0 h-full p-4 z-[100]">
            <div
                className={`h-screen bg-white shadow-lg transition-all duration-500 ease-in-out
                    relative flex flex-col rounded-[42px]
                    ${isCollapsed ? 'w-20' : 'w-72'}`}
            >
                {/* Collapse Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-12 bg-white shadow-lg rounded-full p-1.5 
                        hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-50"
                >
                    <ChevronLeft
                        className={`h-4 w-4 text-gray-600 transition-transform duration-500 
                            ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </button>

                {/* Logo Area */}
                <Link to="/dashboard" className="h-20 flex items-center px-6">
                    {!isCollapsed ? (
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#52007C] to-[#BF4BF6] 
                                rounded-xl flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-[#1B0A3F] to-[#52007C] 
                                bg-clip-text text-transparent">ExcellyGen</span>
                        </div>
                    ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-[#52007C] to-[#BF4BF6] 
                            rounded-xl flex items-center justify-center shadow-md mx-auto">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                    )}
                </Link>

                {/* Search Bar */}
                <div className="px-4 mt-6">
                    <div className={`relative ${isCollapsed ? 'hidden' : 'block'}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-xl bg-gray-50 border-none 
                                focus:ring-2 focus:ring-[#BF4BF6] focus:ring-opacity-50 
                                placeholder-gray-400 text-sm transition-all duration-300"
                        />
                        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 mt-6 px-4 overflow-y-auto">
                    {isCollapsed ? (
                        // Collapsed view - show only icons
                        <div className="flex flex-col gap-1">
                            {[...learningMenuItems, ...progressMenuItems, ...communityMenuItems].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`flex items-center justify-center rounded-xl p-2
                                        transition-all duration-300 group hover:bg-gray-50
                                        ${isActivePath(item.path) ? 'bg-[#F6E6FF]' : ''}`}
                                >
                                    <item.icon className={`h-5 w-5 ${isActivePath(item.path) ? 'text-[#52007C]' : 'text-gray-500 group-hover:text-[#52007C]'
                                        }`} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        // Expanded view - show sections with titles and full menu items
                        <>
                            {renderMenuSection(learningMenuItems, 'Learning')}
                            {renderMenuSection(progressMenuItems, 'Progress')}
                            {renderMenuSection(communityMenuItems, 'Community')}
                        </>
                    )}
                </nav>

                {/* Bottom Section */}
                <div className="px-4 py-4 mt-auto border-t border-gray-100">
                    {bottomMenuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`w-full flex items-center rounded-xl px-4 py-3 mb-2 
                                transition-all duration-300 group hover:bg-gray-50
                                ${isActivePath(item.path) ? 'bg-[#F6E6FF] text-[#52007C]' : 'text-gray-600'}`}
                        >
                            <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'
                                } ${isActivePath(item.path) ? 'text-[#52007C]' : 'text-gray-500 group-hover:text-[#52007C]'}`} />
                            {!isCollapsed && (
                                <span className={`text-sm font-medium transition-colors duration-300
                                    ${isActivePath(item.path) ? 'text-[#52007C]' : 'text-gray-700'}`}>
                                    {item.title}
                                </span>
                            )}
                        </Link>
                    ))}

                    {/* User Profile */}
                    <div className="pt-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <img
                                    src="/api/placeholder/40/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-xl object-cover shadow-sm"
                                />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">John Doe</h4>
                                    <p className="text-xs text-gray-500">Learner</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;