import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/britannica-bold');
        .highlight { color: #FDB515; }
      `}</style>

      <Header />

      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.pageTitle}>
              We are the <span className="highlight">Columbus Chapter</span> <br />
              of WOW That's STEM
            </h1>
            <p style={styles.description}>
              A global nonprofit dedicated to breaking down barriers in technology, 
              engineering, and science for every student in our community.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section style={styles.missionSection}>
          <div style={styles.container}>
            <div style={styles.missionGrid}>
              <div style={styles.textBlock}>
                <h2 style={styles.sectionHeading}>Our Mission</h2>
                <p style={styles.paragraph}>
                  At WOW That's STEM Columbus, we believe that curiosity has no zip code. 
                  As a local chapter of a global movement, we work to ensure that STEM 
                  education and resources are accessible to all, regardless of their 
                  background or socioeconomic status.
                </p>
                <p style={styles.paragraph}>
                  We provide free camps, workshops, and competitive clubs for students 
                  who might not otherwise have the opportunity to explore the world of 
                  robotics, coding, or engineering.
                </p>
              </div>
              <div style={styles.statsCard}>
                <h3 style={styles.cardHeading}>Promoting Equality</h3>
                <p style={styles.cardText}>
                  We are closing the gap in STEM by providing high-quality mentorship 
                  and materials to underserved neighborhoods across Central Ohio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section style={styles.communitySection}>
          <div style={styles.container}>
            <h2 style={styles.sectionHeading}>Helping the Community Through STEM</h2>
            <div style={styles.featureGrid}>
              <div style={styles.feature}>
                <h4 style={styles.featureTitle}>Access for All</h4>
                <p style={styles.featureText}>Removing financial barriers by keeping our programs 100% free for participants.</p>
              </div>
              <div style={styles.feature}>
                <h4 style={styles.featureTitle}>Local Empowerment</h4>
                <p style={styles.featureText}>Partnering with local schools and libraries to meet students where they are.</p>
              </div>
              <div style={styles.feature}>
                <h4 style={styles.featureTitle}>Global Vision</h4>
                <p style={styles.featureText}>Leveraging the curriculum and reach of our global organization to provide world-class education.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: { 
    backgroundColor: 'white', 
    minHeight: '100vh',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" 
  },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' },
  hero: { paddingTop: '160px', paddingBottom: '4rem', textAlign: 'center' },
  pageTitle: { 
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
    fontWeight: 900, 
    lineHeight: 1.1,
    marginBottom: '2rem',
    fontFamily: "'Britannica Bold', sans-serif"
  },
  description: { 
    fontSize: '1.5rem', 
    color: '#555', 
    maxWidth: '800px', 
    margin: '0 auto',
    fontWeight: 500
  },
  missionSection: { padding: '5rem 0', backgroundColor: '#f9f9f9' },
  missionGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1.5fr 1fr', 
    gap: '4rem', 
    alignItems: 'center' 
  },
  sectionHeading: { 
    fontSize: '2.5rem', 
    fontWeight: 900, 
    marginBottom: '1.5rem',
    fontFamily: "'Britannica Bold', sans-serif"
  },
  paragraph: { fontSize: '1.2rem', lineHeight: 1.7, color: '#444', marginBottom: '1rem' },
  statsCard: { 
    backgroundColor: '#000', 
    color: '#fff', 
    padding: '3rem', 
    borderRadius: '24px' 
  },
  cardHeading: { fontSize: '1.8rem', color: '#FDB515', marginBottom: '1rem', fontWeight: 900 },
  cardText: { fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.9 },
  communitySection: { padding: '6rem 0' },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' },
  feature: { borderLeft: '4px solid #FDB515', paddingLeft: '1.5rem' },
  featureTitle: { fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' },
  featureText: { color: '#666', lineHeight: 1.5 },
};