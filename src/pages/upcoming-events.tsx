import React from 'react';
import Header from '../components/Header'; // ✅ ADDED

export default function UpcomingEvents() {
  const events = [
    {
      title: "Dominoes Fundraiser",
      date: "February 14th-28th",
      description: "Support WOW That's STEM Columbus while enjoying delicious Domino's pizza! One 20 Dollar Card can get you Free large Pizzas with every large pizza you buy for the rest of the year!",
      link: "https://store.dominos.cards/53118/"
    },
    {
      title: "Online Panda Express Fundraiser",
      date: "February 27th",
      description: "Order online and a portion of proceeds will support our programs."
    },
    {
      title: "Invention Convention Mentoring Session",
      date: "February 22th",
      description: "We are offering assistance and free mentoring sessions for students K-12 for the Invention Convention.",
      link: "https://forms.gle/KWUkZkfMh9EptuCd9"
    }
  
  ];

  return (
    <>
      <Header /> {/* ✅ ADDED */}

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

        .event-card:hover {
          border-color: #FDB515;
          transform: translateY(-5px);
        }

        a.cta-button:hover {
          background-color: #FDB515 !important;
          color: #000 !important;
        }
      `}</style>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Upcoming Events</h1>
          
          <p style={styles.description}>
            Stay updated on our latest camps, workshops, fundraisers, and community events.
          </p>

          <div style={styles.eventsGrid}>
            {events.map((event, index) => (
              <div key={index} style={styles.eventCard} className="event-card">
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventDate}>{event.date}</p>
                <p style={styles.eventDescription}>{event.description}</p>
                {event.link && (
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.eventLink}
                  >
                    Learn More →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div style={styles.newsletterSection}>
            <h2 style={styles.newsletterTitle}>Stay in the Loop</h2>
            <p style={styles.newsletterText}>
              Sign up for our newsletter to get updates on new programs, events, and opportunities.
            </p>
            <a 
              href="https://forms.gle/HwAXgouJo4jqkHLV8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
              style={styles.ctaButton}
            >
              Subscribe to Newsletter
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
              <a href="/team" style={styles.footerLink}>Our Team</a>
              <a href="/join" style={styles.footerLink}>Join Us</a>
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
            <p style={styles.footerCopyright}>
              © 2025 WOW That's STEM Columbus. All rights reserved.
            </p>
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
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    padding: '1rem 0',
  },
  navContainer: { maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' },
  logoContainer: { display: 'flex', alignItems: 'center' },
  logoLink: { display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' },
  logoImage: { width: '50px', height: '50px' },
  logoText: { fontSize: '1.2rem', fontWeight: 'bold', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  main: { minHeight: '100vh', paddingTop: '120px', paddingBottom: '6rem', backgroundColor: 'white' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' },
  pageTitle: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  description: { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', lineHeight: 1.6, marginBottom: '3rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500 },
  eventsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '2rem', marginBottom: '4rem' },
  eventCard: { border: '2px solid #ddd', borderRadius: '12px', padding: '2rem', backgroundColor: 'white', transition: 'all 0.3s ease' },
  eventTitle: { fontSize: 'clamp(1.3rem,2vw,1.8rem)', fontWeight: 900, marginBottom: '0.5rem', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  eventDate: { fontSize: '1rem', color: '#FDB515', fontWeight: 700, marginBottom: '1rem', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  eventDescription: { fontSize: '1rem', lineHeight: 1.6, color: '#666', marginBottom: '1rem', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  eventLink: { display: 'inline-block', color: '#000', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif", transition: 'color 0.3s ease' },
  newsletterSection: { backgroundColor: '#f5f5f5', padding: '3rem', borderRadius: '12px', textAlign: 'center', marginTop: '4rem' },
  newsletterTitle: { fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 900, marginBottom: '1rem', color: '#000', fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif" },
  newsletterText: { fontSize: 'clamp(1rem,2vw,1.2rem)', lineHeight: 1.6, marginBottom: '2rem', color: '#666', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
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
