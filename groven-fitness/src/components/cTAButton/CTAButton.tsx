import styles from "./CTAButton.module.css";

type CTAButtonProps = {
  styling?: "humongous" | "notBig";
  content?: string;
  link?: string;
};

const CTAButton = ({ styling, content, link }: CTAButtonProps) => {
  if (styling == "humongous") {
    return (
      <div className={styles.humongous}>
        <h1>{content ? content : "Bli medlem idag!"}</h1>
      </div>
    );
  }
  if (styling == "notBig") {
    return (
      <div className={styles.notBig}>
        <h2>{content ? content : "Bli medlem idag!"}</h2>
      </div>
    );
  }
  return (
    <div className={styles.humongous}>
      <h1>{content ? content : "Bli medlem idag!"}</h1>
    </div>
  );
};

export default CTAButton;
