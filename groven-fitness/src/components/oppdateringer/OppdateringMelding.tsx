import { ReactNode, useState } from "react";
import styles from "./OppdateringMelding.module.css";

export type OppdateringMeldingProps = {
  tittel: string;
  dato: string;
  message?: string;
  messageNode?: ReactNode;
};

const OppdateringMelding = ({
  tittel,
  dato,
  message,
  messageNode,
}: OppdateringMeldingProps) => {
  const [extend, setExtend] = useState(false);

  return (
    <div className={styles.card}>
      <p>{dato}</p>
      <h2 className={styles.tittel}>{tittel}</h2>
      {message ? <p>{message}</p> : ""}
      {messageNode ? messageNode : ""}
    </div>
  );
};

export default OppdateringMelding;
