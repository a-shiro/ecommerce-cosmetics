// Components
import { Link } from "react-router-dom";
import HamburgerButton from "../HamburgerButton/HamburgerButton.jsx";
import SidePanel from "./components/SidePanel.jsx";
// Hooks
import { useState } from "react";
// CSS
import styles from "./DesktopHeaderBar.module.css";
// Assets
import { ReactComponent as CartIcon } from "../../../assets/svgs/cart-icon.svg";
import Logo from "../../../assets/svgs/LogoMarkLarge.jsx";

function DesktopHeaderBar() {
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [sidePanelVisible, setSidePanelVisible] = useState(false);

  const toggleCartDropdown = () => {
    setCartDropdownVisible(!cartDropdownVisible);
  };

  const toggleSideMenu = () => {
    setSidePanelVisible(!sidePanelVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}></div>

      <nav className={styles.middleContainer}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <div className={styles.logoContainer}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.rightContainer}>
        <ul>
          <li
            onMouseEnter={toggleCartDropdown}
            onMouseLeave={toggleCartDropdown}
            className={styles.cart}
          >
            <CartIcon />

            {cartDropdownVisible && (
              <div className={styles.cartDropdown}>
                {/* TODO: Add cart full/empty feature */}

                <p>No products in the cart.</p>
              </div>
            )}
          </li>

          <li className={styles.hamburger}>
            <HamburgerButton toggleMenu={toggleSideMenu} />

            {sidePanelVisible && <SidePanel toggleMenu={toggleSideMenu} />}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DesktopHeaderBar;
