import styles from "./VektPakker.module.css";

const VektPakker = () => {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.imageTextH1}>
        Bli med på <span className="highlight-span">8 kilo 8 uker </span>{" "}
        programmet!
      </h1>
      <h2 className={styles.imageTextH2}>
        Vi gir deg trenings og mat program for alle 8 ukene, tett oppfulging av
        PT og gruppe timer mandag til fredag med de andre som også er med.
        Klarer du det spanderer vi neste måneds abonomang og blir du med på
        trekning av ett års abonomang
      </h2>
    </div>
  );
};

export default VektPakker;
