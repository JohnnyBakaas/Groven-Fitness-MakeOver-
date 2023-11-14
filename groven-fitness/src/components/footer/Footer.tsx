import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <a
          className={styles.cardWrapper}
          target="_blank"
          href="https://www.google.com/maps/search/?api=1&query=%22Groven%20Fitness%20AS%2C%20Sandavegen%208%2C%203800%20B%C3%B8%20i%20Midt%20Telemark%2C%20Norway%22"
        >
          <svg viewBox="0 0 29 29" style={{ width: "32px" }}>
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            >
              <path d="M18.625 10.2a4 4 0 11-8 .001 4 4 0 018-.001z"></path>
              <path d="M23.825 10.2c0-5.985-4.92-9-9.5-8.95C9.797 1.2 5.3 4.223 5.3 10.2c0 5.979 8.188 16.677 8.426 17.116.238.438.976.438 1.214 0 5.923-7.41 8.885-13.116 8.885-17.116z"></path>
            </g>
          </svg>
          <h2>Adresse</h2>
          <p>Sandavegen 8, 3800 Bø i Midt Telemark</p>
        </a>
        <a className={styles.cardWrapper} href="tel:+4735060200">
          <svg viewBox="0 0 29 29" style={{ width: "32px" }}>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M6.364 3.81c1.496-1.503 5.032-2.139 6.907-2.108 1.88-.218 1.273 8.104.313 8.263 0 0-3.039.384-3.125 1.275-.116 1.217 3.009 8.67 4.22 8.84.65.091 2.606-1.402 2.606-1.402 1.521-1.145 4.678 2.2 6.161 3.596.649.627.617 1.159-.059 1.947-1.181 1.322-4.29 3.439-5.52 3.266-2.988-.42-8.05-4.592-10.483-9.582-2.743-5.629-2.712-12.82-1.02-14.095z"
            ></path>
          </svg>
          <h2>Telefon</h2>
          <p>350 60 200</p>
        </a>
        <a
          className={styles.cardWrapper}
          href="mailto:post@grovenfitness.no?subject = Feedback&body = Message"
        >
          <svg viewBox="0 0 29 29" style={{ width: "32px" }}>
            <path
              fill="currentColor"
              d="M5.135 5.37c-1.531 0-2.772 1.209-2.772 2.7v12.958c0 1.491 1.241 2.7 2.772 2.7h18.848c1.53 0 2.771-1.209 2.771-2.7V8.07c0-1.491-1.24-2.7-2.771-2.7H5.135zm0-1.62h18.848c2.449 0 4.434 1.934 4.434 4.32v12.958c0 2.386-1.985 4.32-4.434 4.32H5.135c-2.45 0-4.435-1.934-4.435-4.32V8.07c0-2.386 1.986-4.32 4.435-4.32z"
            ></path>
            <path
              fill="currentColor"
              d="M23.998 7.48c.335.306.35.819.036 1.145l-5.898 6.103 5.88 5.728c.298.29.323.745.075 1.062l-.075.083a.847.847 0 01-1.176 0l-5.844-5.693-1.832 1.896a.847.847 0 01-1.21 0l-1.833-1.896L6.277 21.6a.847.847 0 01-1.176 0 .795.795 0 010-1.145l5.88-5.728-5.897-6.103a.795.795 0 01.035-1.145.847.847 0 011.176.035l8.264 8.552 8.264-8.552a.847.847 0 011.175-.035z"
            ></path>
          </svg>
          <h2>Email</h2>
          <p>post@grovenfitness.no</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
