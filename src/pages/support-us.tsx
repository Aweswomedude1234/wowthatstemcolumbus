import React from 'react';

export default function SupportUs() {
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

        a.secondary-button:hover {
          background-color: #FDB515 !important;
          border-color: #FDB515 !important;
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
          <h1 style={styles.pageTitle}>Support Us</h1>
          
          <p style={styles.description}>
            WOW That's STEM Columbus is a community-based nonprofit dedicated to expanding access to STEM education,
            artificial intelligence, business, coding, and chess for K–12 students across Central Ohio.
          </p>

          <div style={styles.content}>
            <p style={styles.paragraph}>
              We provide free, hands-on learning experiences that help students develop technical skills, critical
              thinking, and confidence. Our programs include STEM workshops, AI and coding activities, business and
              entrepreneurship learning, and scholastic chess programs and tournaments. All WOW That's STEM Columbus
              events are offered at no cost to students and families.
            </p>
            
            <p style={styles.paragraph}>
              Funds raised through this campaign will be used to support:
            </p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>STEM, AI, business, coding, and chess education programs</li>
              <li style={styles.listItem}>Chess tournaments and scholastic competitive events</li>
              <li style={styles.listItem}>Equipment, software, and educational materials</li>
              <li style={styles.listItem}>Program operations and community outreach</li>
            </ul>

            <p style={styles.paragraph}>
              Every contribution directly supports free educational opportunities for students in our community.
            </p>
            
            <p style={styles.paragraph}>
              Thank you for supporting WOW That's STEM Columbus and the students we serve.
            </p>
          </div>

          <div style={styles.buttonGroup}>
            <a 
              href="https://gofund.me/192761194" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.ctaButton}
              className="cta-button"
            >
              Donate
            </a>
            <a 
              href="https://www.amazon.com/hz/wishlist/ls/2MXOKM3V9RENI?type=wishlist&filter=persistent_all&sort=priority&viewType=list" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.secondaryButton}
              className="secondary-button"
            >
              Amazon Wishlist
            </a>
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
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginTop: '3rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1.25rem 3rem',
    backgroundColor: '#000',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center',
    minWidth: '200px',
  },
  secondaryButton: {
    display: 'inline-block',
    padding: '1.25rem 3rem',
    backgroundColor: 'white',
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    border: '2px solid #000',
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center',
    minWidth: '200px',
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