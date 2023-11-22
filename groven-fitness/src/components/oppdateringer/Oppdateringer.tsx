import Carousel from "react-material-ui-carousel";
import OppdateringMelding, {
  OppdateringMeldingProps,
} from "./OppdateringMelding";
import styles from "./Oppdateringer.module.css";
import React from "react";

const OppdateringerMeldinger: OppdateringMeldingProps[] = [
  {
    tittel: "Fysioterapeut er også tilgjengelig på dagtid!",
    dato: "06.11.23",
    messageNode: (
      <p>
        Vår fysioterapeut har åpnet opp for undersøkese- og behandlingstimer
        også på dagtid. Dette blir i første omgang på torsdager og kan bookes
        <span style={{ color: "red" }}> her</span> eller via telefon: 97075812
      </p>
    ),
  },
  {
    tittel: (
      <>
        Visste du at hos oss kan du leie sal og trener for bursdag/
        <wbr />
        teambuilding/
        <wbr />
        annet arrangement?
      </>
    ),

    dato: "09.08.23",
    message:
      "Vi tilbyr blant annet utleie av sal med coach for din begivenhet -1500,- per time.",
  },
  {
    tittel: "VI ÅPNER OPP FOR MEDLEMSKAP FOR UNGE 11-14 ÅR!",
    dato: "09.08.23",
    message: "Du finner nå disse i inne i medlemsportalen:)",
  },
];

const Oppdateringer = () => {
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}
      >
        Nyheter!
      </h1>
      <div className={styles.newsWrapper}>
        {OppdateringerMeldinger.map((e, i) => (
          <React.Fragment key={i}>
            <OppdateringMelding
              tittel={e.tittel}
              dato={e.dato}
              message={e.message}
              messageNode={e.messageNode}
            />
            <div className={styles.spacer} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Oppdateringer;
