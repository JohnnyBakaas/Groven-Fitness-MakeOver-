import React from "react";
import TjenesterCard, { TjenesterCardProps } from "./TjenesterCard";
import styles from "./TjenesterCards.module.css";

const data: TjenesterCardProps[] = [
  {
    img: "lokaler",
    texts: ["Våre lokaler"],
  },
  {
    img: "PT",
    texts: ["Personlig trener"],
  },
  {
    img: "fysioterapeut",
    texts: ["Fysioterapeut "],
  },
  {
    img: "kurskatalog",
    texts: ["Kurskatalog"],
  },
];

const TjenesterCards = () => {
  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}
      >
        Tjenester
      </h1>

      <div className={styles.wrapper}>
        {data.map((e, i) => (
          <React.Fragment key={i}>
            <TjenesterCard
              img={e.img}
              texts={e.texts}
              extraMessage={e.extraMessage}
            />
            <div className={styles.spacer} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default TjenesterCards;

/*
Våre lokaler
PT
Fysio
Kurskatalog
*/
