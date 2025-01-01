import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserCircle, FaProjectDiagram, FaCheckCircle, FaTimesCircle,
  FaSearch, FaSun, FaMoon, FaArrowLeft, FaFilter, FaFileExport,
  FaUsers, FaClock, FaFlag
} from 'react-icons/fa';
import './EmployeeManagement.css';

interface Employee {
  id: number;
  name: string;
  role: string;
  availability: boolean;
  currentProject?: string;
  skills: string[];
  capacity: number;
}

interface Project {
  id: number;
  name: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  description: string;
  requiredSkills: string[];
  priority: 'High' | 'Medium' | 'Low';
  deadline?: string;
}

const EmployeeManagement = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [filterAvailableOnly, setFilterAvailableOnly] = useState(false);
  const [skillFilter, setSkillFilter] = useState<string>('');

  const [employees] = useState<Employee[]>([
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      availability: true,
      skills: ["React", "TypeScript", "CSS"],
      capacity: 80
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Backend Developer",
      availability: true,
      currentProject: "API Development",
      skills: ["Node.js", "Python", "SQL"],
      capacity: 60
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "UI/UX Designer",
      availability: false,
      currentProject: "Website Redesign",
      skills: ["Figma", "Adobe XD", "UI Design"],
      capacity: 100
    }
  ]);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      description: "Redesign company website using React",
      requiredSkills: ["React", "TypeScript", "CSS"],
      priority: "High",
      deadline: "2024-03-01"
    },
    {
      id: 2,
      name: "API Development",
      status: "In Progress",
      description: "Develop REST APIs for new features",
      requiredSkills: ["Node.js", "Python", "SQL"],
      priority: "Medium",
      deadline: "2024-03-15"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAssignProject = (employeeId: number, projectId: number) => {
    console.log(`Assigning project ${projectId} to employee ${employeeId}`);
  };

  const toggleEmployeeSelection = (employee: Employee) => {
    // Only allow selection if employee is available
    if (!employee.availability) {
      return;
    }
    
    setSelectedEmployees(prev => 
      prev.includes(employee.id)
        ? prev.filter(id => id !== employee.id)
        : [...prev, employee.id]
    );
  };

  const handleExportData = () => {
    const exportData = employees.filter(emp => 
      selectedEmployees.length === 0 || selectedEmployees.includes(emp.id)
    );
    console.log('Exporting:', exportData);
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAvailability = !filterAvailableOnly || employee.availability;
    const matchesSkill = !skillFilter || employee.skills.includes(skillFilter);
    return matchesSearch && matchesAvailability && matchesSkill;
  });

  const allSkills = Array.from(new Set(employees.flatMap(emp => emp.skills)));

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-500 dark:text-red-400';
      case 'medium': return 'text-yellow-500 dark:text-yellow-400';
      case 'low': return 'text-green-500 dark:text-green-400';
      default: return '';
    }
  };

  return (
    <div className="employee-management-container">
      <header className="page-header">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
            <FaArrowLeft size={24} />
          </Link>
          <h1 className="page-title">Employee Project Management</h1>
        </div>
        <div className="header-controls">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filters flex gap-2">
            <select
              className="filter-select"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
            >
              <option value="">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <button
              onClick={() => setFilterAvailableOnly(!filterAvailableOnly)}
              className={`filter-button ${filterAvailableOnly ? 'active' : ''}`}
            >
              <FaFilter />
              Available Only
            </button>
            <button
              onClick={handleExportData}
              className="export-button"
              disabled={selectedEmployees.length === 0}
            >
              <FaFileExport />
              Export Selected
            </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle-button"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </header>

      <div className="content-grid">
        <section className="employees-section">
          <div className="section-header">
            <h2 className="section-title">Employees</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {selectedEmployees.length} selected
            </p>
          </div>
          <div className="employees-list">
            {filteredEmployees.map(employee => (
              <div 
                key={employee.id}
                className={`employee-card 
                  ${selectedEmployees.includes(employee.id) ? 'selected' : ''} 
                  ${!employee.availability ? 'unavailable' : ''}`}
                onClick={() => toggleEmployeeSelection(employee)}
                style={{ cursor: employee.availability ? 'pointer' : 'not-allowed' }}
              >
                <div className="employee-header">
                  <FaUserCircle className="employee-icon" />
                  <div className="employee-info">
                    <h3>{employee.name}</h3>
                    <p>{employee.role}</p>
                  </div>
                  {employee.availability ? 
                    <FaCheckCircle className="status-icon available" /> : 
                    <FaTimesCircle className="status-icon unavailable" />
                  }
                </div>
                <div className="employee-details">
                  <p><strong>Current Project:</strong> {employee.currentProject || 'None'}</p>
                  <p><strong>Capacity:</strong></p>
                  <div className="capacity-bar">
                    <div 
                      className="capacity-fill" 
                      style={{ width: `${employee.capacity}%` }}
                    />
                    <span className="capacity-text">{employee.capacity}%</span>
                  </div>
                  <div className="skills-list">
                    {employee.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Available Projects</h2>
          </div>
          <div className="projects-list">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <FaProjectDiagram className="project-icon" />
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                      <span className={`priority-indicator ${getPriorityColor(project.priority)}`}>
                        <FaFlag /> {project.priority}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                {project.deadline && (
                  <p className="deadline-info">
                    <FaClock className="inline-block mr-2" />
                    Deadline: {new Date(project.deadline).toLocaleDateString()}
                  </p>
                )}
                <div className="required-skills">
                  <p>Required Skills:</p>
                  <div className="skills-list">
                    {project.requiredSkills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <button
                  className="assign-button"
                  disabled={selectedEmployees.length === 0}
                  onClick={() => selectedEmployees.forEach(empId => handleAssignProject(empId, project.id))}
                >
                  <FaUsers className="inline-block mr-2" />
                  {selectedEmployees.length === 0 
                    ? 'Select Employees to Assign' 
                    : `Assign ${selectedEmployees.length} Employee${selectedEmployees.length > 1 ? 's' : ''}`
                  }
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeManagement;