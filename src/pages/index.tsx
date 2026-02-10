import React, { useEffect, useState } from 'react';

export default function IndexPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Partner logos - place these images in the /public folder
  const partnerLogos = [
    '/partner1.png',
    '/partner2.png',
    '/partner3.png',
    '/partner4.png',
    '/partner5.png',
  ];

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Load LightWidget script
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Observe sections for fade-in animations
      const sections = document.querySelectorAll('[data-fade]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setVisibleSections(prev => new Set(prev).add(section.getAttribute('data-fade') || ''));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partnerLogos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [partnerLogos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partnerLogos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const heroScrolled = scrollY > 100;
  const heroTransitionDistance = Math.min(scrollY * 2, 500);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <img 
          src="/image1.png" 
          alt="WOW That's STEM Columbus"
          style={styles.loadingLogo}
          className="spinning-logo"
        />
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .spinning-logo {
            animation: spin 2s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/britannica-bold');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight-box {
          display: inline-block;
          padding: 4px 12px;
          background-color: #e0e0e0;
          border-radius: 8px;
          transition: background-color 0.3s ease, transform 0.2s ease;
          cursor: pointer;
        }

        .highlight-box:hover {
          background-color: #FDB515;
          transform: scale(1.05);
        }

        a.cta-button:hover {
          background-color: #FDB515 !important;
          color: #000 !important;
        }

        .link-item:hover {
          background-color: #FDB515 !important;
          transform: translateX(5px);
        }

        .partner-logo:hover {
          transform: scale(1.1);
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .partners-scroll {
          animation: scrollLogos 30s linear infinite;
        }

        .partners-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }

        .carousel-slide {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logoContainer}>
            <img 
              src="/image1.png" 
              alt="Logo" 
              style={styles.logoImage}
            />
            <div style={styles.logoText}>WOW That's STEM Columbus</div>
          </div>
          <div style={styles.navMenu} className="nav-menu">
            <div 
              style={styles.dropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span style={styles.navLink}>Our Programs</span>
              {dropdownOpen && (
                <div style={styles.dropdownContent}>
                  <a href="/invention-convention" style={styles.dropdownLink}>Invention Convention</a>
                  <a href="/chess-club" style={styles.dropdownLink}>Chess Club</a>
                  <a href="/summer-robotics" style={styles.dropdownLink}>Summer Robotics</a>
                  <a href="/cad-impact" style={styles.dropdownLink}>CAD For Impact</a>
                  <a href="/upcoming-events" style={styles.dropdownLink}>Upcoming Events</a>
                </div>
              )}
            </div>
            <a href="/team" style={styles.navLink}>Our Team</a>
            <a href="/joinus" style={styles.navLink}>Join Us</a>
            <a href="/support-us" style={styles.navLink}>Support Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1
            style={{
              ...styles.heroTextTop,
              transform: `translateX(-${heroTransitionDistance * 2}px)`,
              opacity: heroScrolled ? 0 : 1,
            }}
          >
            WOW THAT'S STEM
          </h1>
          <h1
            style={{
              ...styles.heroTextBottom,
              transform: `translateX(${heroTransitionDistance * 2}px)`,
              opacity: heroScrolled ? 0 : 1,
            }}
          >
            COLUMBUS
          </h1>
        </div>
      </section>

      {/* Our Partners and Sponsors Section */}
      <section style={styles.partnersSection}>
        <div style={styles.partnersContainer}>
          <h2 style={styles.partnersTitle}>Our Partners and Sponsors</h2>
          <div style={styles.partnersLogosWrapper}>
            <div style={styles.partnersLogosScroller}>
              <div style={styles.partnersLogosTrack} className="partners-scroll">
                {/* First set of logos */}
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    style={styles.partnerLogoBox}
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      style={styles.partnerLogo}
                      className="partner-logo"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    style={styles.partnerLogoBox}
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      style={styles.partnerLogo}
                      className="partner-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2
            data-fade="who-title"
            className={`fade-in ${visibleSections.has('who-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Who We Are
          </h2>
          <p
            data-fade="who-we-are"
            className={`fade-in ${visibleSections.has('who-we-are') ? 'visible' : ''}`}
            style={styles.whoWeAreStatement}
          >
            WOW That's STEM Columbus is a <span className="highlight-box">youth-led</span> nonprofit organization advancing community-driven <span className="highlight-box">STEM education</span> through hands-on programs that inspire <span className="highlight-box">curiosity</span>, confidence, and leadership in students.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={styles.whatWeDoLayout}>
            <div style={styles.whatWeDoLeft}>
              <h2
                data-fade="what-title"
                className={`fade-in ${visibleSections.has('what-title') ? 'visible' : ''}`}
                style={styles.sectionTitle}
              >
                What We Do
              </h2>
              <p
                data-fade="what-subtitle"
                className={`fade-in ${visibleSections.has('what-subtitle') ? 'visible' : ''}`}
                style={styles.whatWeDoSubtitle}
              >
                We host free camps and workshops in
              </p>
            </div>
            <div
              data-fade="what-list"
              className={`fade-in ${visibleSections.has('what-list') ? 'visible' : ''}`}
              style={styles.whatWeDoContainer}
            >
              {['Artificial Intelligence', 'STEM', 'CAD', 'Technology', 'Coding', 'Business', 'Chess', 'More'].map((item, index) => {
                const scrollProgress = Math.max(0, scrollY - (typeof window !== 'undefined' ? window.innerHeight * 1.5 : 0));
                const itemsScrolled = Math.floor(scrollProgress / 200);
                const isActive = itemsScrolled === index;
                
                return (
                  <div
                    key={item}
                    style={{
                      ...styles.whatWeDoItemLarge,
                      color: isActive ? '#000' : '#d0d0d0',
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    {isActive && (
                      <span style={styles.highlightPill}>{item}</span>
                    )}
                    {!isActive && item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* February Programs Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2
            data-fade="feb-title"
            className={`fade-in ${visibleSections.has('feb-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            February
          </h2>
          <p
            data-fade="feb-desc"
            className={`fade-in ${visibleSections.has('feb-desc') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            Explore our February camps and workshops. These opportunities are all free to kids. Sign up and find more information below.
          </p>
          <div
            data-fade="feb-buttons"
            className={`fade-in ${visibleSections.has('feb-buttons') ? 'visible' : ''}`}
            style={styles.buttonContainer}
          >
            <a href="https://forms.gle/KWUkZkfMh9EptuCd9" target="_blank" rel="noopener noreferrer" style={{...styles.ctaButton, marginRight: '1rem'}} className="cta-button">
              Business Camp
            </a>
            <a href="/upcoming-events" style={styles.ctaButton} className="cta-button">
              Upcoming Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2
            data-fade="opp-title"
            className={`fade-in ${visibleSections.has('opp-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Opportunities & Updates
          </h2>
          <p
            data-fade="opp-desc"
            className={`fade-in ${visibleSections.has('opp-desc') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            Let us know what you're excited about and stay in the loop for future programs.
          </p>
          <div
            data-fade="opp-links"
            className={`fade-in ${visibleSections.has('opp-links') ? 'visible' : ''}`}
            style={styles.linksGrid}
          >
            <a href="/summer-robotics" style={styles.linkItem} className="link-item">Robotics Team Interest →</a>
            <a href="/invention-convention" style={styles.linkItem} className="link-item">Invention Convention →</a>
            <a href="/cad-impact" style={styles.linkItem} className="link-item">CAD For Impact →</a>
            <a href="https://forms.gle/HwAXgouJo4jqkHLV8" target="_blank" rel="noopener noreferrer" style={styles.linkItem} className="link-item">Newsletter →</a>
            <a href="https://groupme.com/join_group/112544836/Em8Y58aW" target="_blank" rel="noopener noreferrer" style={styles.linkItem} className="link-item">Join our GroupMe →</a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2
            data-fade="events-title"
            className={`fade-in ${visibleSections.has('events-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Upcoming Events
          </h2>
          <ul
            data-fade="events-list"
            className={`fade-in ${visibleSections.has('events-list') ? 'visible' : ''}`}
            style={styles.eventsList}
          >
            <li style={styles.eventItem}>Dominoes Fundraiser - February 14th</li>
            <li style={styles.eventItem}>Online Panda Express Fundraiser - February 27th</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2
            data-fade="test-title"
            className={`fade-in ${visibleSections.has('test-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Testimonials
          </h2>
          
          <div style={styles.testimonialsGrid}>
            <div
              data-fade="test-1"
              className={`fade-in ${visibleSections.has('test-1') ? 'visible' : ''}`}
              style={styles.testimonialBox}
            >
              "WOW That's STEM is doing an amazing job. The camps are wonderful and had a very positive impact on my son. They motivated him to learn more about STEM, AI, and chess. We truly appreciate your efforts."
            </div>
            <div
              data-fade="test-2"
              className={`fade-in ${visibleSections.has('test-2') ? 'visible' : ''}`}
              style={styles.testimonialBox}
            >
              "Wow That STEM! program offering AI, coding, and chess camps has been incredibly valuable for my kids. They're genuinely enjoying every session, and it's amazing to see them learning cutting‑edge AI concepts and coding skills at such a young age. I truly appreciate the team's effort in hosting such meaningful and well‑organized STEM camps. Thank you so much for creating this opportunity for our children!"
            </div>
          </div>

          <p
            data-fade="test-desc"
            className={`fade-in ${visibleSections.has('test-desc') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            Share your experience with WOW That's STEM Columbus—your feedback helps us improve and grow.
          </p>
          <div
            data-fade="test-button"
            className={`fade-in ${visibleSections.has('test-button') ? 'visible' : ''}`}
            style={styles.buttonContainer}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAVQP06Wp1Y-TW-kW_cBOXmSt6Ax1gqU4PqOsds6DX1g5Suw/viewform" target="_blank" rel="noopener noreferrer" style={styles.ctaButton} className="cta-button">Submit a Testimonial →</a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2
            data-fade="insta-title"
            className={`fade-in ${visibleSections.has('insta-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Follow Our Journey
          </h2>
          <div
            data-fade="insta-feed"
            className={`fade-in ${visibleSections.has('insta-feed') ? 'visible' : ''}`}
          >
            <iframe 
              src="//lightwidget.com/widgets/7dc024f6bd825319b34cef16153e0efa.html" 
              scrolling="no" 
              allowTransparency={true}
              className="lightwidget-widget" 
              style={{
                width: '100%',
                border: 0,
                overflow: 'hidden',
                minHeight: '400px',
              }}
            />
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2
            data-fade="follow-title"
            className={`fade-in ${visibleSections.has('follow-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Follow Us
          </h2>
          <p
            data-fade="follow-desc"
            className={`fade-in ${visibleSections.has('follow-desc') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            Stay up to date with announcements, events, and program updates.
          </p>
          <div
            data-fade="follow-links"
            className={`fade-in ${visibleSections.has('follow-links') ? 'visible' : ''}`}
            style={styles.socialLinks}
          >
            <a href="https://www.facebook.com/profile.php?id=61587270806398" target="_blank" rel="noopener noreferrer" style={styles.linkItem} className="link-item">
              <span style={styles.socialIconText}>f</span>
              Facebook →
            </a>
            <a href="https://www.instagram.com/wowthatstem.columbus/" target="_blank" rel="noopener noreferrer" style={styles.linkItem} className="link-item">
              <span style={styles.socialIconText}>📷</span>
              Instagram →
            </a>
            <a href="https://www.linkedin.com/company/wowthatstemcolumbus/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={styles.linkItem} className="link-item">
              <span style={styles.socialIconText}>in</span>
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2
            data-fade="contact-title"
            className={`fade-in ${visibleSections.has('contact-title') ? 'visible' : ''}`}
            style={styles.sectionTitle}
          >
            Contact
          </h2>
          <p
            data-fade="contact-desc"
            className={`fade-in ${visibleSections.has('contact-desc') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            Have questions about our camps, workshops, or partnerships?
          </p>
          <p
            data-fade="contact-email"
            className={`fade-in ${visibleSections.has('contact-email') ? 'visible' : ''}`}
            style={styles.sectionDescription}
          >
            <strong>Contact us at:</strong>{' '}
            <a href="mailto:columbusOH@wowthatstem.org" style={styles.emailLink}>
              columbusOH@wowthatstem.org
            </a>
          </p>
        </div>
      </section>

      {/* Footer with Logo */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerTop}>
            <div style={styles.footerColumn}>
              <img 
                src="/image1.png" 
                alt="WOW That's STEM Columbus"
                style={styles.footerLogo}
              />
              <p style={styles.footerText}>Founded in 2025</p>
            </div>
            
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Quick Links</h3>
              <a href="/invention-convention" style={styles.footerLink}>Invention Convention</a>
              <a href="/chess-club" style={styles.footerLink}>Chess Club</a>
              <a href="/summer-robotics" style={styles.footerLink}>Summer Robotics</a>
              <a href="/cad-impact" style={styles.footerLink}>CAD For Impact</a>
              <a href="/upcoming-events" style={styles.footerLink}>Upcoming Events</a>
            </div>
            
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>About</h3>
              <a href="/team" style={styles.footerLink}>Our Team</a>
              <a href="/join-us" style={styles.footerLink}>Join Us</a>
              <a href="/support-us" style={styles.footerLink}>Support Us</a>
            </div>
            
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Connect</h3>
              <a href="https://www.facebook.com/profile.php?id=61587270806398" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Facebook</a>
              <a href="https://www.instagram.com/wowthatstem.columbus/" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Instagram</a>
              <a href="https://www.linkedin.com/company/wowthatstemcolumbus/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>LinkedIn</a>
              <a href="mailto:columbusOH@wowthatstem.org" style={styles.footerLink}>Email Us</a>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>© 2025 WOW That's STEM Columbus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  // Loading Screen
  loadingContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 9999,
  },
  loadingLogo: {
    width: '150px',
    height: '150px',
  },

  // Navigation
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '1rem 0',
  },
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logoImage: {
    width: '50px',
    height: '50px',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  navMenu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    minWidth: '220px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '0.5rem 0',
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    zIndex: 1001,
  },
  dropdownLink: {
    display: 'block',
    padding: '0.75rem 1.5rem',
    color: '#000',
    textDecoration: 'none',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '0.95rem',
    transition: 'background-color 0.3s ease',
  },

  // Hero Section
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #f5f5f5 50%, #FDB515 50%)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    textAlign: 'center',
    position: 'relative',
  },
  heroTextTop: {
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    margin: 0,
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  heroTextBottom: {
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    margin: 0,
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Our Partners Section
  partnersSection: {
    padding: '4rem 2rem',
    backgroundColor: '#e8e8e8',
  },
  partnersContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  partnersTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 900,
    marginBottom: '2rem',
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    textAlign: 'center',
  },
  partnersLogosWrapper: {
    marginBottom: '3rem',
    overflow: 'hidden',
    width: '100%',
  },
  partnersLogosScroller: {
    width: '100%',
    overflow: 'hidden',
  },
  partnersLogosTrack: {
    display: 'flex',
    gap: '4rem',
    width: 'max-content',
  },
  partnersLogos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  partnerLogoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '150px',
    flexShrink: 0,
  },
  partnerLogo: {
    maxHeight: '60px',
    maxWidth: '150px',
    objectFit: 'contain',
    filter: 'grayscale(0%)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },

  // Sections
  section: {
    padding: '6rem 2rem',
    backgroundColor: 'white',
  },
  sectionAlt: {
    padding: '6rem 2rem',
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  // Typography
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 900,
    marginBottom: '2rem',
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  sectionDescription: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    lineHeight: 1.6,
    marginBottom: '2rem',
    color: '#333',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  whoWeAreStatement: {
    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
    lineHeight: 1.6,
    color: '#333',
    textAlign: 'left',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 400,
  },

  // Buttons and Links
  buttonContainer: {
    marginTop: '2rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1.25rem 3rem',
    backgroundColor: '#000',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.4rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  socialLinks: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },

  // What We Do Section
  whatWeDoLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
    alignItems: 'start',
  },
  whatWeDoLeft: {
    position: 'sticky',
    top: '120px',
  },
  whatWeDoSubtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.4rem)',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 400,
    marginTop: '1rem',
  },
  whatWeDoContainer: {
    position: 'relative',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0',
  },
  whatWeDoItemLarge: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    lineHeight: 1.2,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
  },
  highlightPill: {
    backgroundColor: '#FDB515',
    padding: '0.2em 0.5em',
    borderRadius: '100px',
    display: 'inline-block',
  },

  // Testimonials
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  testimonialBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: 1.6,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontStyle: 'italic',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },

  // Social Icons
  socialIconText: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50%',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  // Footer
  footer: {
    padding: '4rem 2rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
  },
  footerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  footerTop: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLogo: {
    width: '80px',
    height: '80px',
    marginBottom: '1rem',
  },
  footerHeading: {
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    marginBottom: '0.5rem',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'color 0.3s ease',
    opacity: 0.8,
  },
  footerText: {
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    opacity: 0.8,
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  footerCopyright: {
    fontSize: '0.9rem',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    opacity: 0.6,
  },

  // Events
  eventsList: {
    listStyle: 'none',
    padding: 0,
  },
  eventItem: {
    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
    padding: '1.5rem 0',
    borderBottom: '1px solid #ddd',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'all 0.3s ease',
  },

  // Contact
  emailLink: {
    color: '#FDB515',
    textDecoration: 'none',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'color 0.3s ease',
  },
};