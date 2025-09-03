import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './academicprogram.css';

const AcademicPrograms = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial 100px
        setIsTopBarVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        // Scrolling up and almost at the top (within 50px)
        setIsTopBarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Academic Programs Hero Section */}
      <section className={`academicprogram-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Academic Programs</h1>
            <p className="hero-subtitle">Begin your journey to academic excellence at City College of Bayawan</p>
            <p className="hero-motto">Your future starts here with quality education and endless opportunities</p>
          </div>
        </div>
      </section>

      {/* List of Degree Programs Section */}
      <section className="academicprogram-section programs-list-section">
        <div className="container">
          <div className="academicprogram-content">
            <div className="announcements-section">
              <h2>List of Degree Programs</h2>
              <p className="section-subtitle">Choose from our diverse selection of undergraduate programs</p>
              
              <div className="announcements-grid">
                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Bachelor of Science in Business Administration</h4>
                    <div className="announcement-date">4 Years • 124 Units</div>
                    <p>Develop essential business skills and knowledge for leadership roles in various industries.</p>
                    <a href="#" className="read-more">Learn More</a>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Bachelor of Science in Information Technology</h4>
                    <div className="announcement-date">4 Years • 120 Units</div>
                    <p>Master the latest technologies and prepare for careers in the digital world.</p>
                    <a href="#" className="read-more">Learn More</a>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Bachelor of Science in Education</h4>
                    <div className="announcement-date">4 Years • 126 Units</div>
                    <p>Shape the future by becoming an educator and inspiring the next generation.</p>
                    <a href="#" className="read-more">Learn More</a>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Bachelor of Science in Hospitality Management</h4>
                    <div className="announcement-date">4 Years • 122 Units</div>
                    <p>Excel in the dynamic world of hospitality and tourism management.</p>
                    <a href="#" className="read-more">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Descriptions and Course Outlines Section */}
            <div className="events-section">
              <h2>Program Descriptions & Course Outlines</h2>
              <p className="section-subtitle">Detailed information about each program's curriculum and learning outcomes</p>
              
              <div className="events-grid">
                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">BSBA</span>
                      <span className="month">Business</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Bachelor of Science in Business Administration</h4>
                    <div className="event-time">4 Years • 124 Units</div>
                    <p>The BSBA program prepares students for managerial and leadership positions in various business sectors.</p>
                    <a href="#" className="event-link">View Details</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">BSIT</span>
                      <span className="month">Technology</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Bachelor of Science in Information Technology</h4>
                    <div className="event-time">4 Years • 120 Units</div>
                    <p>The BSIT program focuses on the practical application of technology in solving business problems.</p>
                    <a href="#" className="event-link">View Details</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">BSEd</span>
                      <span className="month">Education</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Bachelor of Science in Education</h4>
                    <div className="event-time">4 Years • 126 Units</div>
                    <p>The BSEd program prepares future educators with strong pedagogical skills and subject matter expertise.</p>
                    <a href="#" className="event-link">View Details</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">BSHM</span>
                      <span className="month">Hospitality</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Bachelor of Science in Hospitality Management</h4>
                    <div className="event-time">4 Years • 122 Units</div>
                    <p>The BSHM program combines theoretical knowledge with practical training in hospitality operations.</p>
                    <a href="#" className="event-link">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Requirements Section */}
            <div className="achievements-section">
              <h2>Admission Requirements per Program</h2>
              <p className="section-subtitle">Specific requirements and qualifications for each academic program</p>
              
              <div className="achievements-grid">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                      <path d="M14 2v6h6"/>
                      <path d="M16 13H8"/>
                      <path d="M16 17H8"/>
                      <path d="M10 9H8"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>General Requirements</h4>
                    <div className="achievement-date">All Programs</div>
                    <p>High School Diploma, Official Transcript, Medical Certificate, Valid ID, 2x2 Photos, Certificate of Good Moral Character</p>
                    <a href="#" className="read-more">View Details</a>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>Program-Specific Requirements</h4>
                    <div className="achievement-date">Varies by Program</div>
                    <p>Each program has specific entrance exams, aptitude tests, and additional requirements based on the field of study.</p>
                    <a href="#" className="read-more">View Details</a>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>Application Process</h4>
                    <div className="achievement-date">6 Steps</div>
                    <p>Choose Program → Prepare Requirements → Submit Application → Take Entrance Exam → Interview → Enrollment</p>
                    <a href="#" className="read-more">View Details</a>
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

export default AcademicPrograms;
