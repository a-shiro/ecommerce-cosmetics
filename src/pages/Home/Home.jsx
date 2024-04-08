import { useState } from "react";
import logo from "../../assets/images/logo-mobile.png";
import product from "../../assets/images/hand-creme.png";

import styles from "./Home.module.css";

function Home() {
  const [navActive, setNavActive] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <header className={styles.mobileHeader}>
        <div>
          <img src={logo} alt="" />
          <div onClick={toggleNav} className={styles.hamburger}>
            X
          </div>
        </div>

        {navActive && (
          <nav className={styles.nav}>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <div>
          <div className={styles.card}>
            <img
              onMouseEnter={toggleDetails}
              onMouseLeave={toggleDetails}
              src={product}
              alt=""
              style={{ opacity: detailsVisible ? 0 : 1 }}
            />

            <div className={styles.details}>
              <div>
                <p>K DREAM</p>
                <p>Organic</p>
                <p>$32.00</p>
              </div>

              <div>
                <button>cart</button>
                <button>view</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img src={product} alt="" />

            <div className={styles.details}>
              <div>
                <p>K DREAM</p>
                <p>Organic</p>
                <p>$32.00</p>
              </div>

              <div>
                <button>cart</button>
                <button>view</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img src={product} alt="" />

            <div className={styles.details}>
              <div>
                <p>K DREAM</p>
                <p>Organic</p>
                <p>$32.00</p>
              </div>

              <div>
                <button>cart</button>
                <button>view</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
