// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./ProductsList.module.css";
// Assets
import product from "../../../../assets/images/hand-creme.png";

function ProductsList() {
  // TODO: Replace hardcoded cards with db data
  // TODO: Add on hover btns to product thumbnail (inspect, cart)

  return (
    <ul className={styles.productList}>
      <li>
        <div className={styles.productCard}>
          <Link to="/shop/:product" className={styles.productThumbnail}>
            <img src={product} alt="" />
          </Link>

          <div className={styles.productDetails}>
            <h4>
              <Link to="/shop/:product">Hand creme</Link>
            </h4>
            <p className={styles.category}>Uncategorized</p>
            <p className={styles.price}>$32.00</p>
          </div>
        </div>
      </li>

      <li>
        <div className={styles.productCard}>
          <img src={product} alt="" />

          <div className={styles.productDetails}>
            <h4>
              <Link to="/shop/:product">Hand creme</Link>
            </h4>
            <p className={styles.category}>Uncategorized</p>
            <p className={styles.price}>$32.00</p>
          </div>
        </div>
      </li>

      <li>
        <div className={styles.productCard}>
          <img src={product} alt="" />

          <div className={styles.productDetails}>
            <h4>
              <Link to="/shop/:product">Hand creme</Link>
            </h4>
            <p className={styles.category}>Uncategorized</p>
            <p className={styles.price}>$32.00</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default ProductsList;
