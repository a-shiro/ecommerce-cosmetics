// Components
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";
// CSS
import styles from "./MobileHeader.module.css";
// Assets
import Logo from "../../../assets/svgs/MobileLogo.jsx";
import { ReactComponent as HamburgerIcon } from "../../../assets/svgs/hamburger-icon.svg";

function MobileHeader() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>

        <div onClick={toggleNav} className={styles.hamburger}>
          <HamburgerIcon />
        </div>
      </div>

      {navActive && (
        <nav className={styles.navDropdown}>
          <ul className={styles.navList}>
            <li>
              <Link onClick={toggleNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileHeader;
