import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Impact() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const stats = [
    { label: 'Students Impacted', value: '500+' },
    { label: 'Events Hosted', value: '20+' },
    { label: 'Teaching Hours', value: '50+' },
    { label: 'Partnerships', value: '2' },
    { label: 'Dollars Raised', value: '$200+' },
  ];

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

        .stat-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }

        a.cta-button:hover {
          background-color: #FDB515 !important;
          color: #000 !important;
        }

        a.secondary-button:hover {
          background-color: #FDB515 !important;
          border-color: #FDB515 !important;
          color: #000 !important;
        }
      `}</style>

      {/* Header */}
      <Header dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Our Impact</h1>
          
          <p style={styles.description}>
            Since our founding, WOW That's STEM Columbus has been committed to making 
            high-quality STEM education accessible to everyone. Here is what we've 
            accomplished together so far.
          </p>

          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard} className="stat-card">
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={styles.content}>
            <h2 style={styles.sectionHeading}>Building the Future</h2>
            <p style={styles.paragraph}>
              Our impact goes beyond just numbers. By providing free workshops, 
              chess tournaments, and mentorship programs, we are fostering a 
              community of young innovators who are prepared to lead in a 
              technology-driven world.
            </p>
            <p style={styles.paragraph}>
              Through our strategic partnerships and community support, we continue 
              to bridge the gap in STEM education across Central Ohio, ensuring 
              every student has the tools to succeed.
            </p>
          </div>

          {/* New Button Group */}
          <div style={styles.buttonGroup}>
            <a 
              href="/join" 
              style={styles.ctaButton}
              className="cta-button"
            >
              Join Us
            </a>
            <a 
              href="/donate" 
              style={styles.secondaryButton}
              className="secondary-button"
            >
              Support Us
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
    maxWidth: '1000px',
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
    marginBottom: '4rem',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    padding: '2.5rem 1.5rem',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid #eee',
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: 900,
    color: '#FDB515',
    marginBottom: '0.5rem',
    fontFamily: "'Britannica Bold', sans-serif",
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  content: {
    marginTop: '2rem',
  },
  sectionHeading: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 900,
    marginBottom: '1.5rem',
    color: '#000',
    fontFamily: "'Britannica Bold', sans-serif",
  },
  paragraph: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
    color: '#444',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginTop: '4rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1.25rem 3rem',
    backgroundColor: '#000',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', sans-serif",
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    minWidth: '220px',
  },
  secondaryButton: {
    display: 'inline-block',
    padding: '1.25rem 3rem',
    backgroundColor: 'white',
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', sans-serif",
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    border: '2px solid #000',
    textAlign: 'center',
    minWidth: '220px',
  },
};