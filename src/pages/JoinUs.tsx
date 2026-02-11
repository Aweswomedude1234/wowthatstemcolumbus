import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/britannica-bold');
        .join-card:hover { transform: translateY(-5px); transition: 0.3s ease; }
        .cta-btn:hover { background-color: #FDB515 !important; color: #000 !important; }
      `}</style>

      <Header />

      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Join Our Community</h1>
          <p style={styles.description}>
            Empowering the next generation of STEM leaders in Central Ohio. Choose your path below to get involved.
          </p>

          <div style={styles.grid}>
            {/* Section 1: High Schoolers */}
            <div style={styles.card}>
              <h2 style={styles.sectionHeading}>For High Schoolers</h2>
              <p style={styles.paragraph}>
                Build your leadership skills, mentor younger students, and earn volunteer hours while making a real difference.
              </p>
              <a 
                href="https://forms.gle/LyEm4ELy4yJT74xY6" 
                target="_blank" 
                style={styles.ctaButton} 
                className="cta-btn"
              >
                Apply Here
              </a>
            </div>

            {/* Section 2: Parents & Students */}
            <div style={styles.card}>
              <h2 style={styles.sectionHeading}>For Parents & Families</h2>
              <p style={styles.paragraph}>
                Stay updated on our latest free camps, workshops, and STEM opportunities for your children.
              </p>
              <div style={styles.buttonStack}>
                <a 
                  href="https://groupme.com/join_group/112544836/Em8Y58aW" 
                  target="_blank" 
                  style={{...styles.ctaButton, backgroundColor: '#00aff0'}} 
                  className="cta-btn"
                >
                  Join Our GroupMe
                </a>
                <a 
                  href="/upcoming-events" 
                  style={{...styles.ctaButton, backgroundColor: '#FDB515', color: '#000'}} 
                  className="cta-btn"
                >
                  View Upcoming Events
                </a>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXuj0qWk4OhZgSjCjL-spGRBuX-FMR8DYFrAYUKu285GVXHw/viewform?usp=send_form" 
                  target="_blank" 
                  style={{...styles.ctaButton, backgroundColor: '#333'}} 
                  className="cta-btn"
                >
                  Join Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: { paddingTop: '140px', paddingBottom: '6rem', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' },
  pageTitle: { fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', textAlign: 'center' },
  description: { fontSize: '1.25rem', textAlign: 'center', marginBottom: '4rem', color: '#555' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' },
  card: { 
    backgroundColor: '#fff', 
    padding: '3rem', 
    borderRadius: '20px', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  sectionHeading: { fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 900 },
  paragraph: { marginBottom: '2rem', lineHeight: '1.6', color: '#666' },
  buttonStack: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' },
  ctaButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 900,
    fontSize: '1.1rem',
    transition: '0.3s',
  }
};