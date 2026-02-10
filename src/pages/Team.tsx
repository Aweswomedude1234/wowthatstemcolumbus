import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurTeam() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const team = [
    { role: "President", name: "Nithilan Murugesan", img: "/nithilan.png" },
    { role: "Vice President", name: "Heet Jain", img: "/heet.jpeg" },
    { role: "Outreach Director", name: "Aryan Patel", img: "/aryan.jpeg" },
    { role: "Social Media Manager", name: "Rithvik Aravind", img: "/rithvik.png" },
    { role: "Finance Director", name: "Shlok Sharma Chiruvelli", img: "/shlook.png" },
  ];

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

        .team-image {
          width: 180px;
          height: 240px;
          object-fit: cover;
          border-radius: 12px;
          margin-right: 1.5rem;
        }

        .join-button {
          display: inline-block;
          padding: 1rem 2rem;
          margin-top: 3rem;
          background-color: #FDB515;
          color: #000;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .join-button:hover { background-color: #e0aa00; }
      `}</style>

      {/* Header */}
      <Header dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Our Team</h1>
          
          <p style={styles.description}>
            Meet the student leaders helping WOW That's STEM Columbus bring free STEM opportunities to Central Ohio.
          </p>

          <div style={styles.teamGrid}>
            {team.map((person) => (
              <div key={person.name} style={styles.teamCard}>
                {person.img && <img src={person.img} alt={person.name} className="team-image" />}
                <div style={styles.teamCardContent}>
                  <h3 style={styles.teamRole}>{person.role}</h3>
                  <p style={styles.teamName}>{person.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/join" className="join-button">Interested? Join us!</a>
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
  teamGrid: { display: 'grid', gap: '1.5rem' },
  teamCard: {
    border: '2px solid #ddd',
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
  },
  teamCardContent: { display: 'flex', flexDirection: 'column' },
  teamRole: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    fontWeight: 900,
    color: '#000',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  teamName: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#666',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
  },
};
