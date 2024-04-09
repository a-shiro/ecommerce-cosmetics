// Components
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";
// CSS
import styles from "./MobileHeader.module.css";
// Assets
import logo from "../../../assets/images/logo-mobile.png";
import { ReactComponent as HamburgerIcon } from "../../../assets/svgs/hamburger-icon.svg";

function MobileHeader() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div onClick={toggleNav} className={styles.hamburger}>
          <HamburgerIcon />
        </div>
      </div>

      {navActive && (
        <nav className={styles.navDropdown}>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileHeader;
