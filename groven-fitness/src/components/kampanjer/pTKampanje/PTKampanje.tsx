import styles from "./PTKampanje.module.css";

const PTKampanje = () => {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.imageTextH1}>
        Til sommer <span className="highlight-span">kampanje</span> på Personlig
        trener!
      </h1>
      <h2 className={styles.imageTextH2}>
        Vi på Groven Fitness har en fatastisk pakke deal for deg som er besatt
        på å gjøre deg klar til sommeren 2024. Vi legger opp mat plan, trening
        og PT så du får det til.
      </h2>
    </div>
  );
};

export default PTKampanje;
