import Carousel from "react-material-ui-carousel";
import styles from "./Hjem.module.css";
import WelcomCard from "../../components/welcomeCard/WelcomeCard";
import PTKampanje from "../../components/kampanjer/pTKampanje/PTKampanje";
import ArsAbonomang from "../../components/kampanjer/aarsAbonomang/ArsAbonomang";
import VektPakker from "../../components/kampanjer/vektPakker/VektPakker";
import Oppdateringer from "../../components/oppdateringer/Oppdateringer";
import CTAButton from "../../components/cTAButton/CTAButton";
import GruppeTimerCards from "../../components/gruppeTimerCards/GruppeTimerCards";
import TjenesterCards from "../../components/tjenesterCards/TjenesterCards";

const Hjem = () => {
  return (
    <main>
      <Carousel animation="slide" autoPlay={true}>
        <WelcomCard />
        <PTKampanje />
        <ArsAbonomang />
        <VektPakker />
      </Carousel>
      <div style={{ paddingBottom: "30px" }} />
      <div style={{ display: "flex" }}>
        <a
          style={{ width: "100%" }}
          href="https://portal.boostsystem.no/grovenfitness/member"
          target="_blank"
        >
          <CTAButton styling="humongous" />
        </a>
        <div style={{ minWidth: "var(--spacer-width)" }}></div>
        <a
          style={{ width: "100%" }}
          href="https://portal.boostsystem.no/grovenfitness/member?membershipId=1711&amp;departmentId=3483"
          target="_blank"
        >
          <CTAButton styling="humongous" content="Droppin!" />
        </a>
      </div>
      <div style={{ paddingBottom: "30px" }} />
      <Oppdateringer />
      <div style={{ paddingBottom: "30px" }} />
      <GruppeTimerCards />
      <div style={{ paddingBottom: "30px" }} />
      <TjenesterCards />
      <div style={{ paddingBottom: "30px" }} />
    </main>
  );
};

export default Hjem;

/*
Våre lokaler
PT
Fysio
Kurskatalog
*/
