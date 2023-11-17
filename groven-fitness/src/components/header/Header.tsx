import { NavLink } from "react-router-dom";
import GrovenFitnessLogo from "../grovenFitnessLogo/GrovenFitnessLogo";
import styles from "./Header.module.css";
import { useState } from "react";

const navElements = [
  {
    ref: "https://portal.boostsystem.no/grovenfitness/member",
    content: "Bli medlem",
    target: true,
  },
  {
    ref: "/OmOss",
    content: "Om oss",
  },
  {
    ref: "/PersonligTrener",
    content: "PT",
  },
  {
    ref: "/Fysio",
    content: "Fysio",
  },
  {
    ref: "/Kontakt",
    content: "Kontakt",
  },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header
      className={
        showNav ? [styles.header, styles.headerShow].join(" ") : styles.header
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <NavLink
            to={`/`}
            className={styles.logoFixer}
            onClick={() => setShowNav(false)}
          >
            <GrovenFitnessLogo />
          </NavLink>
          <button
            className={styles.togleButton}
            onClick={() => setShowNav((pre) => !pre)}
          >
            <div
              className={
                showNav
                  ? [styles.togleButtonBarSelected, styles.togleButtonBar].join(
                      " "
                    )
                  : styles.togleButtonBar
              }
            ></div>
            <div
              className={
                showNav
                  ? [styles.togleButtonBarSelected, styles.togleButtonBar].join(
                      " "
                    )
                  : styles.togleButtonBar
              }
            ></div>
            <div
              className={
                showNav
                  ? [styles.togleButtonBarSelected, styles.togleButtonBar].join(
                      " "
                    )
                  : styles.togleButtonBar
              }
            ></div>
          </button>
        </div>
        <nav
          className={
            showNav ? styles.nav : [styles.nav, styles.hideNav].join(" ")
          }
        >
          {navElements.map((e, i) => {
            return e.target ? (
              <a
                href={e.ref}
                key={i}
                className={
                  showNav
                    ? [styles.navCard, styles.showNavCard].join(" ")
                    : [styles.navCard, styles.hideNavCard].join(" ")
                }
                target="_blank"
                onClick={() => setShowNav(false)}
              >
                <h2 className={styles.navCardText}>{e.content}</h2>
              </a>
            ) : (
              <NavLink
                to={e.ref}
                key={i}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${styles.navCard} ${styles.active} ${
                        showNav ? styles.showNavCard : styles.hideNavCard
                      }`
                    : isPending
                    ? `${styles.navCard} ${styles.pending} ${
                        showNav ? styles.showNavCard : styles.hideNavCard
                      }`
                    : `${styles.navCard} ${
                        showNav ? styles.showNavCard : styles.hideNavCard
                      }`
                }
                onClick={() => setShowNav(false)}
              >
                <h2 className={styles.navCardText}>{e.content}</h2>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
