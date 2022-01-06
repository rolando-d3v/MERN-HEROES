import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const exitApp = () => {
    console.log("exit app");
  };

  return (
    <header className={styles.header}>
      <article className={styles.content_header}>
        <div className={styles.content_nav}>
          <nav>
            <Link className={`${styles.link_title} `} to="/">
              HERO APP
            </Link>
          </nav>

          <nav className={styles.content_link}>
            <NavLink
              className={({ isActive }) =>
                ` ${styles.link}   ${isActive && styles.link_active} `
              }
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${styles.link}   ${isActive && styles.link_active} `
              }
              to="/marvel"
            >
              Marvel
            </NavLink>
          </nav>
        </div>

        <div className={styles.nav_derecho}>
          <span>Rolando</span>
          <button type="button" onClick={exitApp}>
            Logout
          </button>
        </div>
      </article>
    </header>
  );
}
