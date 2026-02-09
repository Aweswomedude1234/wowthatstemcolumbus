import React from 'react';

export default function PageName() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

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

        a.cta-button:hover {
          background-color: #FDB515 !important;
          color: #000 !important;
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logoContainer}>
            <a href="/" style={styles.logoLink}>
              <img 
                src="/image1.png" 
                alt="Logo" 
                style={styles.logoImage}
              />
              <div style={styles.logoText}>WOW That's STEM Columbus</div>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Join Us</h1>
          
          <p style={styles.description}>
            Help us make STEM education accessible to every student in Central Ohio.
          </p>

          <div style={styles.content}>
            <h2 style={styles.sectionHeading}>Volunteer Opportunities</h2>
            <p style={styles.paragraph}>
              We're always looking for passionate volunteers to help with our programs. Whether you're a student, educator, or community member, there are many ways to get involved:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Mentor students in STEM subjects</li>
              <li style={styles.listItem}>Assist with workshops and camps</li>
              <li style={styles.listItem}>Help organize events and tournaments</li>
              <li style={styles.listItem}>Support outreach and marketing efforts</li>
              <li style={styles.listItem}>Share your professional expertise</li>
            </ul>

            <h2 style={styles.sectionHeading}>Student Leadership</h2>
            <p style={styles.paragraph}>
              Interested in taking on a leadership role? We welcome motivated students who want to help shape our programs and make a bigger impact in the community.
            </p>

            <h2 style={styles.sectionHeading}>Get Started</h2>
            <p style={styles.paragraph}>
              Reach out to learn more about volunteer opportunities and how you can contribute to our mission.
            </p>
          </div>

          <div style={styles.contactBox}>
            <p style={styles.contactText}>
              <strong>Contact us at:</strong>{' '}
              <a href="mailto:columbusOH@wowthatstem.org" style={styles.emailLink}>
                columbusOH@wowthatstem.org
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
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
              <a href="/our-team" style={styles.footerLink}>Our Team</a>
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
    padding: '0 2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
  },
  logoImage: {
    width: '50px',
    height: '50px',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  main: {
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '6rem',
    backgroundColor: 'white',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  pageTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 900,
    marginBottom: '2rem',
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  description: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    lineHeight: 1.6,
    marginBottom: '3rem',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
  },
  content: {
    marginBottom: '3rem',
  },
  sectionHeading: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 900,
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  paragraph: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
  },
  list: {
    marginLeft: '2rem',
    marginBottom: '2rem',
  },
  listItem: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: 1.8,
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  contactBox: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '12px',
    marginTop: '3rem',
  },
  contactText: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#333',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    textAlign: 'center',
  },
  emailLink: {
    color: '#FDB515',
    textDecoration: 'none',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'color 0.3s ease',
  },
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
};