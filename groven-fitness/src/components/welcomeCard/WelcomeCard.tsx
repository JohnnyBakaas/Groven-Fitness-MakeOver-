import styles from "./WelcomeCard.module.css";

const WelcomCard = () => {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.imageTextH1}>
        Den <span className="highlight-span">ALLER</span> beste treningen, er
        den det blir noe av!
      </h1>
      <h2 className={styles.imageTextH2}>
        Groven Fitness er størst i området på profesjonell veiledet trening. Vi
        tilbyr et bredt utvalg av gruppetimer og moderne treningsfasiliteter.{" "}
      </h2>
    </div>
  );
};

export default WelcomCard;
