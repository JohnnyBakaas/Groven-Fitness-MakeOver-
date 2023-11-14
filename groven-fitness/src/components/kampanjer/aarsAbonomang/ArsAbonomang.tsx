import styles from "./ArsAbonomang.module.css";

const ArsAbonomang = () => {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.imageTextH1}>
        Få års abonomang med{" "}
        <span className="highlight-span">1500kr i avslag!</span>
      </h1>
      <h2 className={styles.imageTextH2}>
        Vi vil starte året rett med å gi deg muligheten til å kjøpe abonomang
        for hele året! Du får tillgan fra du kjøper til nyttårsaften 2024
      </h2>
    </div>
  );
};

export default ArsAbonomang;
