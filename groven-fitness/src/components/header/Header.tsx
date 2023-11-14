import { NavLink } from "react-router-dom";
import GrovenFitnessLogo from "../grovenFitnessLogo/GrovenFitnessLogo";
import styles from "./Header.module.css";

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
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to={`/`}>
          <GrovenFitnessLogo />
        </NavLink>
        <nav className={styles.nav}>
          {navElements.map((e, i) => {
            return e.target ? (
              <a
                href={e.ref}
                key={i}
                className={styles.navCard}
                target="_blank"
              >
                <h2 className={styles.navCardText}>{e.content}</h2>
              </a>
            ) : (
              <NavLink
                to={e.ref}
                key={i}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${styles.navCard} ${styles.active}`
                    : isPending
                    ? `${styles.navCard} ${styles.pending}`
                    : `${styles.navCard}`
                }
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
