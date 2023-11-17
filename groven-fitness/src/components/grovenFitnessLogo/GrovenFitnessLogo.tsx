import styles from "./GrovenFitnessLogo.module.css";
import logo from "../../assets/grovenFitnessLogo.png";

type GrovenFitnessLogoProps = {
  logoHeight?: number;
  logoWidth?: number;
};

const GrovenFitnessLogo = ({
  logoHeight,
  logoWidth,
}: GrovenFitnessLogoProps) => {
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
