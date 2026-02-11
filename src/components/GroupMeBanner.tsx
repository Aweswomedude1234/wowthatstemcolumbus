import * as React from "react";

const GROUPME_BANNER_STORAGE_KEY = "wow-stem:groupme-banner-dismissed";

export default function GroupMeBanner() {
  const [showGroupMeBanner, setShowGroupMeBanner] = React.useState(false);

  React.useEffect(() => {
    try {
      const dismissed = localStorage.getItem(GROUPME_BANNER_STORAGE_KEY);
      if (dismissed !== "1") {
        setShowGroupMeBanner(true);
      }
    } catch {
      setShowGroupMeBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    setShowGroupMeBanner(false);
    try {
      localStorage.setItem(GROUPME_BANNER_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!showGroupMeBanner) return null;

  return (
    <div style={styles.bannerWrapper}>
      <div style={styles.bannerContainer}>
        <p style={styles.bannerText}>
          <a
            href="https://groupme.com/join_group/112544836/Em8Y58aW"
            target="_blank"
            rel="noreferrer"
            style={styles.bannerLink}
          >
            Join our GroupMe
          </a>{" "}
          for February&apos;s free camps and workshops.
        </p>
        <button
          type="button"
          onClick={handleDismiss}
          style={styles.closeButton}
          aria-label="Dismiss banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  bannerWrapper: {
    width: "100%",
    backgroundColor: "#FDB515",
    color: "#000",
    position: "fixed",
    top: "80px", // Positions it exactly below the 80px fixed header
    left: 0,
    zIndex: 999, // Just below the header (usually 1000) but above content
    padding: "10px 0",
    fontFamily: "'Britannica Bold', 'Helvetica Neue', Arial, sans-serif",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  bannerContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bannerText: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    margin: 0,
    textAlign: "center",
  },
  bannerLink: {
    color: "#000",
    textDecoration: "underline",
    fontWeight: 900,
  },
  closeButton: {
    position: "absolute",
    right: "2rem",
    background: "rgba(0,0,0,0.1)",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
};