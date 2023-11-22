import styles from "./GrovenFitnessLogo.module.css";
import logo from "../../assets/grovenFitnessLogo.png";

type GrovenFitnessLogoProps = {
  logoHeight?: number;
  logoWidth?: number;
  isHeader?: boolean;
};

const GrovenFitnessLogo = ({
  logoHeight,
  logoWidth,
  isHeader,
}: GrovenFitnessLogoProps) => {
  if (isHeader)
    return (
      <div
        className={[styles.logo, styles.headerLogo].join(" ")}
        style={{ backgroundImage: `url(${logo})` }}
      />
    );

  return (
    <div
      className={styles.logo}
      style={
        logoHeight
          ? {
              backgroundImage: `url(${logo})`,
              height: `${logoHeight}px`,
              aspectRatio: 848 / 322,
            }
          : logoWidth
          ? {
              backgroundImage: `url(${logo})`,
              width: `${logoWidth}px`,
              aspectRatio: 848 / 322,
            }
          : {
              backgroundImage: `url(${logo})`,
              height: `${90}px`,
              aspectRatio: 848 / 322,
            }
      }
    />
  );
};

export default GrovenFitnessLogo;
