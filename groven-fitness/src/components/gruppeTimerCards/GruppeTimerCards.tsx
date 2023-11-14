import { Link } from "react-router-dom";
import CTAButton from "../cTAButton/CTAButton";
import styles from "./GruppeTimerCards.module.css";

const GruppeTimerCards = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={[styles.baa, styles.card].join(" ")}>
        <CTAButton content="Gruppetimeplan avd Bø" styling="notBig" />
      </Link>
      <Link to={"/"} className={[styles.fyresdal, styles.card].join(" ")}>
        <CTAButton content="Gruppetimeplan avd Fyresdal" styling="notBig" />
      </Link>
    </div>
  );
};

export default GruppeTimerCards;
