// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./ProductsList.module.css";
// Assets
import product from "../../../assets/images/hand-creme.png";

function ProductsList() {
  // TODO: Replace hardcoded cards with db data
  // TODO: Add on hover btns to product thumbnail (inspect, cart)

  return (
    <ul className={styles.productList}>
      <li>
        <Link to="/shop/:product">
          <img className={styles.productThumbnail} src={product} alt="" />
        </Link>

        <div className={styles.productDetails}>
          <h4>
            <Link to="/shop/:product">Hand creme</Link>
          </h4>
          <p className={styles.category}>Uncategorized</p>
          <p className={styles.price}>$32.00</p>
        </div>
      </li>

      <li>
        <Link to="/shop/:product">
          <img className={styles.productThumbnail} src={product} alt="" />
        </Link>

        <div className={styles.productDetails}>
          <h4>
            <Link to="/shop/:product">Hand creme</Link>
          </h4>
          <p className={styles.category}>Uncategorized</p>
          <p className={styles.price}>$32.00</p>
        </div>
      </li>

      <li>
        <Link to="/shop/:product">
          <img className={styles.productThumbnail} src={product} alt="" />
        </Link>

        <div className={styles.productDetails}>
          <h4>
            <Link to="/shop/:product">Hand creme</Link>
          </h4>
          <p className={styles.category}>Uncategorized</p>
          <p className={styles.price}>$32.00</p>
        </div>
      </li>

      <li>
        <Link to="/shop/:product">
          <img className={styles.productThumbnail} src={product} alt="" />
        </Link>

        <div className={styles.productDetails}>
          <h4>
            <Link to="/shop/:product">Hand creme</Link>
          </h4>
          <p className={styles.category}>Uncategorized</p>
          <p className={styles.price}>$32.00</p>
        </div>
      </li>

      <li>
        <Link to="/shop/:product">
          <img className={styles.productThumbnail} src={product} alt="" />
        </Link>

        <div className={styles.productDetails}>
          <h4>
            <Link to="/shop/:product">Hand creme</Link>
          </h4>
          <p className={styles.category}>Uncategorized</p>
          <p className={styles.price}>$32.00</p>
        </div>
      </li>
    </ul>
  );
}

export default ProductsList;
