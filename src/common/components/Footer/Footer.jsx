// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Footer.module.css";
// Assets
import Logo from "../../../assets/svgs/LogoFooter";
import { ReactComponent as InstagramIcon } from "../../../assets/svgs/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/svgs/facebook-icon.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.contacts}>
          <h4>Contact</h4>

          <div>
            <p>
              Address: <span>Example 42, Bulgaria</span>
            </p>
            <p>
              E-mail: <span>example@gmail.com</span>
            </p>
            <p>
              Phone: <span>000 999 999</span>
            </p>
          </div>
        </div>

        <div className={styles.brand}>
          <Logo />

          <p>
            Pulchritudo est mirabilis facultas invenire admirationem et
            inspirationem in rebus simplicissimis quae nos circumdant.
          </p>

          <ul className={styles.socialsList}>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Links</h4>

          <ul>
            <li>
              <Link>Privacy policy</Link>
            </li>
            <li>
              <Link>Terms and condions</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright @ example.bg 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
