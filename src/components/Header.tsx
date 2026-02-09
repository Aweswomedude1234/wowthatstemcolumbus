import React from 'react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

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
          {/* FIXED DROPDOWN WRAPPER */}
          <div
            style={styles.dropdownWrapper}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={styles.navLink}>Our Programs</span>

            {dropdownOpen && (
              <div style={styles.dropdownContent}>
                <a href="/invention-convention" style={styles.dropdownLink}>Invention Convention</a>
                <a href="/chess-club" style={styles.dropdownLink}>Chess Club</a>
                <a href="/summer-robotics" style={styles.dropdownLink}>Summer Robotics</a>
                <a href="/cad-impact" style={styles.dropdownLink}>CAD For Impact</a>
                <a href="/upcoming-events" style={styles.dropdownLink}>Upcoming Events</a>
              </div>
            )}
          </div>

          <a href="/our-team" style={styles.navLink}>Our Team</a>
          <a href="/join-us" style={styles.navLink}>Join Us</a>
          <a href="/support-us" style={styles.navLink}>Support Us</a>
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
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  navMenu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 900,
    cursor: 'pointer',
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },

  /* 🔹 NEW wrapper, no visual change */
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
