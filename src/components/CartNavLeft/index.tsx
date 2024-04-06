import styles from "./index.module.scss";

export default function CartNavLeft() {
  return (
    <ul className={styles.cartNav}>
      <li className={styles.cartNavItem}>My cart</li>
      <li className={`${styles.cartNavItem} ${styles.active}`}>My wish list</li>
      <li className={styles.cartNavItem}>My ordered</li>
    </ul>
  );
}
