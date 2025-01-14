import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/signup" style={styles.navLink}>
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Inline styles for the navbar
const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
