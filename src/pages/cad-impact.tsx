// File: /pages/cad-impact.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CADImpactPage() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/britannica-bold');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
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
          <h1 style={styles.pageTitle}>CAD For Impact</h1>

          <p style={styles.description}>
            Learn Computer-Aided Design (CAD) and use your skills to make a difference in your community.
          </p>

          <div style={styles.content}>
            <p style={styles.paragraph}>
              Our CAD For Impact program teaches students how to use professional design software to create solutions for real-world problems. Through hands-on workshops and project-based learning, students develop technical skills while working on meaningful community projects.
            </p>
            <p style={styles.paragraph}>
              Whether you're interested in engineering, architecture, product design, or just want to learn a valuable skill, this program will help you turn your ideas into reality.
            </p>
          </div>

          <div style={styles.buttonContainer}>
            <a
              href="https://forms.gle/CADImpactForm"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              style={styles.ctaButton}
            >
              Learn More
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
  main: { minHeight: '100vh', paddingTop: '120px', paddingBottom: '6rem', backgroundColor: 'white' },
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 2rem' },
  pageTitle: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  description: { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', lineHeight: 1.6, marginBottom: '3rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500 },
  content: { marginBottom: '3rem' },
  paragraph: { fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.6, marginBottom: '1.5rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500 },
  buttonContainer: { marginTop: '3rem' },
  ctaButton: { display: 'inline-block', padding: '1.25rem 3rem', backgroundColor: '#000', color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 900, fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif", borderRadius: '50px', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', cursor: 'pointer' },
};
