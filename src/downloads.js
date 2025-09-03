import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './downloads.css';

const Downloads = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTopBarVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        setIsTopBarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleDownload = (fileName, fileType) => {
    // Placeholder function for download functionality
    alert(`Downloading ${fileName} (${fileType})`);
  };

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Downloads Hero Section */}
      <section className={`downloads-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Downloads</h1>
            <p className="hero-subtitle">Find all the recent downloads and resources at City College of Bayawan</p>
            <p className="hero-motto">Explore our updated files, helpful guides, and important downloads</p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="downloads-section">
        <div className="container">
          <div className="downloads-content">
            <div className="announcements-section">
              <h2>Forms</h2>
              <p className="section-subtitle">Download essential forms for enrollment, clearance, leave, and other academic processes</p>
              
              <div className="announcements-grid">
                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                      <path d="M14 2v6h6"/>
                      <path d="M16 13H8"/>
                      <path d="M16 17H8"/>
                      <path d="M10 9H8"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Enrollment Forms</h4>
                    <div className="announcement-date">Essential Documents</div>
                    <p>Download application forms, enrollment forms, registration forms, and change of program forms</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Application Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Application Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Enrollment Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Enrollment Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Registration Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Registration Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Change of Program Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Change of Program Form
                      </button>
                    </div>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Clearance Forms</h4>
                    <div className="announcement-date">Student Services</div>
                    <p>Download student clearance forms, exit clearance forms, library clearance forms, and financial clearance forms</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Student Clearance Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Student Clearance Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Exit Clearance Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Exit Clearance Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Library Clearance Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Library Clearance Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Financial Clearance Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Financial Clearance Form
                      </button>
                    </div>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Leave Forms</h4>
                    <div className="announcement-date">Student Services</div>
                    <p>Download leave of absence forms, medical leave forms, emergency leave forms, and maternity leave forms</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Leave of Absence Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Leave of Absence Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Medical Leave Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Medical Leave Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Emergency Leave Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Emergency Leave Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Maternity Leave Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Maternity Leave Form
                      </button>
                    </div>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Other Forms</h4>
                    <div className="announcement-date">Additional Services</div>
                    <p>Download transcript request forms, certificate request forms, scholarship application forms, and grievance forms</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Transcript Request Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Transcript Request Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Certificate Request Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Certificate Request Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Scholarship Application Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Scholarship Application Form
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Grievance Form', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Grievance Form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Syllabi, Manuals, and Handbooks Section */}
            <div className="events-section">
              <h2>Syllabi, Manuals, and Handbooks</h2>
              <p className="section-subtitle">Access comprehensive academic resources, guidelines, and reference materials</p>
              
              <div className="events-grid">
                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">📚</span>
                      <span className="month">Syllabi</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Course Syllabi</h4>
                    <div className="event-time">Academic Resources</div>
                    <p>Download course syllabi for all programs including Business Administration, Information Technology, Education, and Hospitality Management</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Business Administration Syllabi', 'ZIP')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Business Administration
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Information Technology Syllabi', 'ZIP')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Information Technology
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Education Syllabi', 'ZIP')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Education
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Hospitality Management Syllabi', 'ZIP')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Hospitality Management
                      </button>
                    </div>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">📖</span>
                      <span className="month">Handbooks</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Student Handbooks</h4>
                    <div className="event-time">Student Resources</div>
                    <p>Download student handbooks, academic guidelines, code of conduct, and disciplinary policies</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Student Handbook 2024-2025', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Student Handbook 2024-2025
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Academic Guidelines', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Academic Guidelines
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Code of Conduct', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Code of Conduct
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Disciplinary Policies', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Disciplinary Policies
                      </button>
                    </div>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">📋</span>
                      <span className="month">Manuals</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Academic Manuals</h4>
                    <div className="event-time">Faculty Resources</div>
                    <p>Download faculty manual, thesis writing manual, research guidelines, and laboratory manual</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Faculty Manual', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Faculty Manual
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Thesis Writing Manual', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Thesis Writing Manual
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Research Guidelines', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Research Guidelines
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Laboratory Manual', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Laboratory Manual
                      </button>
                    </div>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">📅</span>
                      <span className="month">Reference</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Reference Materials</h4>
                    <div className="event-time">Academic Resources</div>
                    <p>Download academic calendar, course catalog, graduation requirements, and grading system guide</p>
                    <div className="download-links">
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Academic Calendar 2024-2025', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Academic Calendar 2024-2025
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Course Catalog', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Course Catalog
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Graduation Requirements', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Graduation Requirements
                      </button>
                      <button 
                        className="download-link"
                        onClick={() => handleDownload('Grading System Guide', 'PDF')}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                        </svg>
                        Grading System Guide
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Downloads;
