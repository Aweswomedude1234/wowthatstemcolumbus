import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ChessClubPage() {
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
          <h1 style={styles.pageTitle}>Chess Club</h1>

          <div style={styles.content}>
            <p style={styles.paragraph}>
              Our Chess Club offers free beginner and advanced workshops throughout the year, plus opportunities to play in
              USCF-rated tournaments.
            </p>
            <p style={styles.paragraph}>
              Whether you're brand new to chess or already competing, we'll help you learn, practice, and grow with a
              supportive community.
            </p>
            <p style={{ ...styles.paragraph, color: '#000', fontWeight: 700 }}>
              Use the button below to view programs and sign up.
            </p>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.buttonContainer}>
              <a
                href="https://forms.gle/4edjhkwB6az4bo6Z8"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.ctaButton}
                className="cta-button"
              >
                Chess Programs
              </a>
            </div>
            <p style={styles.infoText}>
              After you submit the form, we'll follow up with details on upcoming workshops, meeting times, and tournament
              options.
            </p>
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
  infoBox: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '2rem',
    backgroundColor: '#fafafa',
    marginTop: '2rem',
  },
  buttonContainer: {
    marginBottom: '1.5rem',
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
  infoText: {
    fontSize: '0.95rem',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    lineHeight: 1.6,
  },
};
