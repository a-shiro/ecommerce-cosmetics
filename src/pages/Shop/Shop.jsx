// Components
import { Link } from "react-router-dom";
import Footer from "../../common/components/Footer/Footer";
// CSS
import styles from "./Shop.module.css";
// Assets
import product from "../../assets/images/hand-creme.png";

function Shop() {
  return (
    <div>
      <div className={styles.banner}>
        <h1>Shop</h1>
      </div>

      <main className={styles.main}>
        <div>
          <p>sort by price: value</p>
        </div>

        <div>
          <ul className={styles.productList}>
            <li>
              <div className={styles.card}>
                <img src={product} alt="" />

                <div className={styles.cardDetails}>
                  <h4>
                    <Link>Hand creme</Link>
                  </h4>
                  <p>Uncategorized</p>
                  <p className={styles.price}>$32.00</p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.card}>
                <img src={product} alt="" />

                <div className={styles.cardDetails}>
                  <h4>
                    <Link>Hand creme</Link>
                  </h4>
                  <p>Uncategorized</p>
                  <p>$32.00</p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.card}>
                <img src={product} alt="" />

                <div className={styles.cardDetails}>
                  <h4>
                    <Link>Hand creme</Link>
                  </h4>
                  <p>Uncategorized</p>
                  <p>$32.00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.asideFilters}>
          <p>Product Categories</p>
          <ul className={styles.categoriesList}>
            <li>Applicators</li>
            <li>Body Oil</li>
            <li>Cosmetic</li>
            <li>Face Masks</li>
            <li>Foundation</li>
            <li>Lip Gloss</li>
            <li>Moisturizing</li>
            <li>Organic</li>
            <li>Uncategorized</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Shop;
