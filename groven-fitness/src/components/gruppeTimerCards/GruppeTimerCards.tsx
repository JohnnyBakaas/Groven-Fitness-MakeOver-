import { Link } from "react-router-dom";
import styles from "./GruppeTimerCards.module.css";

const GruppeTimerCards = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={[styles.baa, styles.card].join(" ")}>
        <h2 className={styles.h2}>Gruppetimeplan avd Bø</h2>
      </Link>
      <Link to={"/"} className={[styles.fyresdal, styles.card].join(" ")}>
        <h2 className={styles.h2}>Gruppetimeplan avd Fyresdal</h2>
      </Link>
    </div>
  );
};

export default GruppeTimerCards;
