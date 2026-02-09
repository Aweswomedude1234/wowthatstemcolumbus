import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

      {/* Header */}
      <Header dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Invention Convention</h1>
          
          <p style={styles.description}>
            WOW That's STEM Columbus now offers mentorship for students participating in Invention Convention.
          </p>

          <div style={styles.content}>
            <p style={styles.paragraph}>
              We guide students through the full invention process, including identifying real-world problems,
              developing and testing solutions, and clearly presenting their ideas. Mentorship focuses on critical
              thinking, design, and communication, helping students build strong projects and confidence as young
              innovators.
            </p>
          </div>

          <div style={styles.buttonContainer}>
            <a 
              href="https://forms.gle/6K3ZE3Wf5fZbKYee9" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.ctaButton}
              className="cta-button"
            >
              Register for Mentorship
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
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
  buttonContainer: {
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
  },
};
