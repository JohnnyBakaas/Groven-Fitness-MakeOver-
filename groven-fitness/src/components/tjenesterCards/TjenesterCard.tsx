import styles from "./TjenesterCard.module.css";

export type TjenesterCardProps = {
  img: string;
  texts: string[];
  extraMessage?: string;
};

const TjenesterCard = ({ img, texts, extraMessage }: TjenesterCardProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        img == "PT"
          ? styles.PT
          : img == "fysioterapeut"
          ? styles.fysioterapeut
          : img == "kurskatalog"
          ? styles.kurskatalog
          : img == "lokaler"
          ? styles.lokaler
          : ""
      }`}
    >
      {texts.map((e, i) => (
        <h1 key={i}>{e}</h1>
      ))}
    </div>
  );
};

export default TjenesterCard;
