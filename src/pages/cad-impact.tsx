// File: /pages/cad-impact.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function CADImpactPage() {
  return (
    <>
      <Head>
        <title>CAD For Impact | WOW That's STEM Columbus</title>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/britannica-bold" />
      </Head>

      {/* Global Styles */}
      <style jsx global>{`
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
            <Link href="/" legacyBehavior>
              <a style={styles.logoLink}>
                <img src="/image1.png" alt="Logo" style={styles.logoImage} />
                <div style={styles.logoText}>WOW That's STEM Columbus</div>
              </a>
            </Link>
          </div>
        </div>
      </nav>

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
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerTop}>
            <div style={styles.footerColumn}>
              <img src="/image1.png" alt="WOW That's STEM Columbus" style={styles.footerLogo} />
              <p style={styles.footerText}>Founded in 2025</p>
            </div>

            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Quick Links</h3>
              <Link href="/invention-convention" legacyBehavior><a style={styles.footerLink}>Invention Convention</a></Link>
              <Link href="/chess-club" legacyBehavior><a style={styles.footerLink}>Chess Club</a></Link>
              <Link href="/summer-robotics" legacyBehavior><a style={styles.footerLink}>Summer Robotics</a></Link>
              <Link href="/cad-impact" legacyBehavior><a style={styles.footerLink}>CAD For Impact</a></Link>
              <Link href="/upcoming-events" legacyBehavior><a style={styles.footerLink}>Upcoming Events</a></Link>
            </div>

            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>About</h3>
              <Link href="/our-team" legacyBehavior><a style={styles.footerLink}>Our Team</a></Link>
              <Link href="/join-us" legacyBehavior><a style={styles.footerLink}>Join Us</a></Link>
              <Link href="/support-us" legacyBehavior><a style={styles.footerLink}>Support Us</a></Link>
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

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  navbar: { position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 1000, padding: '1rem 0' },
  navContainer: { maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' },
  logoContainer: { display: 'flex', alignItems: 'center' },
  logoLink: { display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' },
  logoImage: { width: '50px', height: '50px' },
  logoText: { fontSize: '1.2rem', fontWeight: 'bold', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  main: { minHeight: '100vh', paddingTop: '120px', paddingBottom: '6rem', backgroundColor: 'white' },
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 2rem' },
  pageTitle: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  description: { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', lineHeight: 1.6, marginBottom: '3rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500 },
  content: { marginBottom: '3rem' },
  paragraph: { fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.6, marginBottom: '1.5rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500 },
  buttonContainer: { marginTop: '3rem' },
  ctaButton: { display: 'inline-block', padding: '1.25rem 3rem', backgroundColor: '#000', color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 900, fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif", borderRadius: '50px', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', cursor: 'pointer' },
  footer: { padding: '4rem 2rem 2rem', backgroundColor: '#000', color: '#fff' },
  footerContainer: { maxWidth: '1400px', margin: '0 auto' },
  footerTop: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '3rem', marginBottom: '3rem' },
  footerColumn: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  footerLogo: { width: '80px', height: '80px', marginBottom: '1rem' },
  footerHeading: { fontSize: '1.2rem', fontWeight: 900, fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif", marginBottom: '0.5rem' },
  footerLink: { color: '#fff', textDecoration: 'none', fontSize: '1rem', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", transition: 'color 0.3s ease', opacity: 0.8 },
  footerText: { color: '#fff', fontSize: '0.95rem', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", opacity: 0.8 },
  footerBottom: { borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' },
  footerCopyright: { fontSize: '0.9rem', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", opacity: 0.6 },
};
