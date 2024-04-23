// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./SidePanel.module.css";
// Assets
import Logo from "../../../../assets/svgs/Logo";
import CloseIcon from "../../../../assets/svgs/CloseIcon";
import { ReactComponent as FacebookIcon } from "../../../../assets/svgs/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/svgs/instagram-icon.svg";

function SidePanel({ toggleMenu }) {
  return (
    <div className={styles.sidePanel}>
      <button onClick={toggleMenu} className={styles.closeBtn}>
        <CloseIcon />
      </button>

      <div className={styles.panelContent}>
        <Logo />

        <p>
          Pulchritudo est mirabilis facultas invenire admirationem et
          inspirationem in rebus simplicissimis quae nos circumdant.
        </p>

        <ul className={styles.socialsList}>
          <li>
            {/* TODO: Add working links */}
            <Link to="">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link to="">
              <FacebookIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidePanel;
