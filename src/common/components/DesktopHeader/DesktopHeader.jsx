// Components
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";
// CSS
import styles from "./DesktopHeader.module.css";
// Assets
import logo from "../../../assets/images/logo-mobile.png";
import { ReactComponent as HamburgerIcon } from "../../../assets/svgs/hamburger-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/svgs/cart-icon.svg";

function DesktopHeader() {
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);

  const toggleCartDropdown = () => {
    setCartDropdownVisible(!cartDropdownVisible);
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
            <img src={logo} alt="" />
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
          <li>
            <HamburgerIcon />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DesktopHeader;
