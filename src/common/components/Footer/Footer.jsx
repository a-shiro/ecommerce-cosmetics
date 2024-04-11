// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Footer.module.css";
// Assets
import logo from "../../../assets/images/logo-white.png";
import { ReactComponent as InstagramIcon } from "../../../assets/svgs/instagram-icon.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.contacts}>
          <h4>Contact</h4>
          <p>Address: Example 42, Bulgaria</p>
          <p>E-mail: example@gmail.com</p>
          <p>Phone: 000 999 999</p>
        </div>

        <div className={styles.brand}>
          <img src={logo} alt="" />

          <p>
            An oasis of online beauty built specifically so your new cosmetics
            site can take everyone’s breaths away.
          </p>

          <ul className={styles.socialsList}>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Links</h4>
          <p>
            <Link>Privacy policy</Link>
          </p>
          <p>
            <Link>Terms and condions</Link>
          </p>
          <p>
            <Link>Contact</Link>
          </p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright @ example.bg 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
