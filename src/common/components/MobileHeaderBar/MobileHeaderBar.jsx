// Components
import { Link } from "react-router-dom";
import HamburgerButton from "../HamburgerButton/HamburgerButton.jsx";
// Hooks
import { useState } from "react";
// CSS
import styles from "./MobileHeaderBar.module.css";
// Assets
import Logo from "../../../assets/svgs/LogoMarkSmall.jsx";

function MobileHeaderBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.header}>
      <div className="md">
        <Link to="/">
          <Logo />
        </Link>

        <HamburgerButton toggleMenu={toggleNav} />
      </div>

      {navActive && (
        <nav className={styles.dropdownNav}>
          <ul className={`${styles.navMenu} md`}>
            <li>
              <Link className={styles.menuLink} onClick={toggleNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.menuLink} onClick={toggleNav} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={styles.menuLink}
                onClick={toggleNav}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileHeaderBar;
