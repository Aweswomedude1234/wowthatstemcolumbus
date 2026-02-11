import React from 'react';

export default function Header() {
  const [programsOpen, setProgramsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const closeTimeout = React.useRef<number | null>(null);

  const handleMouseEnter = (setter: (val: boolean) => void) => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    // Close other dropdowns to ensure clean switching
    if (setter === setProgramsOpen) setAboutOpen(false);
    if (setter === setAboutOpen) setProgramsOpen(false);
    setter(true);
  };

  const handleMouseLeave = (setter: (val: boolean) => void) => {
    closeTimeout.current = window.setTimeout(() => {
      setter(false);
    }, 200);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
          <a href="/" style={styles.logoLink}>
            <img src="/image1.png" alt="Logo" style={styles.logoImage} />
            <div style={styles.logoText}>WOW That's STEM Columbus</div>
          </a>
        </div>

        <div style={styles.navMenu}>
          {/* MAIN LINKS */}
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/upcoming-events" style={styles.navLink}>Upcoming Events</a>

          {/* OUR PROGRAMS DROPDOWN */}
          <div
            style={styles.dropdownWrapper}
            onMouseEnter={() => handleMouseEnter(setProgramsOpen)}
            onMouseLeave={() => handleMouseLeave(setProgramsOpen)}
          >
            <span style={styles.navLink}>Our Programs</span>
            {programsOpen && (
              <div style={styles.dropdownContent}>
                <a href="/invention-convention" style={styles.dropdownLink}>Invention Convention</a>
                <a href="/chess-club" style={styles.dropdownLink}>Chess Club</a>
                <a href="/summer-robotics" style={styles.dropdownLink}>Summer Robotics</a>
                <a href="/cad-impact" style={styles.dropdownLink}>CAD For Impact</a>
              </div>
            )}
          </div>

          {/* ABOUT US DROPDOWN */}
          <div
            style={styles.dropdownWrapper}
            onMouseEnter={() => handleMouseEnter(setAboutOpen)}
            onMouseLeave={() => handleMouseLeave(setAboutOpen)}
          >
            <span style={styles.navLink}>About Us</span>
            {aboutOpen && (
              <div style={styles.dropdownContent}>
                <a href="/about" style={styles.dropdownLink}>About WOW STEM</a>
                <a href="/team" style={styles.dropdownLink}>Our Team</a>
                <a href="/impact" style={styles.dropdownLink}>Our Impact</a>
                <a href="/join" style={styles.dropdownLink}>Join Us</a>
              </div>
            )}
          </div>

          {/* STANDALONE SUPPORT US LINK */}
          <a href="/donate" style={styles.supportButton}>Support Us</a>
        </div>
      </div>
    </nav>
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
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: "'Britannica Bold', sans-serif",
  },
  navMenu: {
    display: 'flex',
    gap: '4.5rem', // Large spacing between items
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 900,
    cursor: 'pointer',
    fontFamily: "'Britannica Bold', sans-serif",
    fontSize: '1rem',
  },
  supportButton: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 900,
    fontFamily: "'Britannica Bold', sans-serif",
    fontSize: '1rem',
    backgroundColor: '#FDB515', // Signature Yellow
    padding: '0.6rem 1.2rem',
    borderRadius: '50px',
    transition: 'transform 0.2s ease',
  },
  dropdownWrapper: {
    position: 'relative',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    padding: '0.5rem 0',
    marginTop: '0.5rem',
    minWidth: '220px',
    zIndex: 1001,
    borderRadius: '8px',
  },
  dropdownLink: {
    display: 'block',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 700,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
};