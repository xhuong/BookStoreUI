import { useDispatch, useSelector } from "react-redux";
import { ECartView, changeCartView } from "@/redux/slices/cart";

import styles from "./index.module.scss";

export default function CartNavLeft() {
  const dispatch = useDispatch();
  const cartView = useSelector((state: any) => state.cart.cartView);

  return (
    <ul className={styles.cartNav}>
      <li
        className={`${styles.cartNavItem} ${
          cartView === ECartView.cartview && styles.active
        }`}
        onClick={() => {
          dispatch(changeCartView(ECartView.cartview));
        }}
      >
        My cart
      </li>
      <li
        className={`${styles.cartNavItem} ${
          cartView === ECartView.wishlistview && styles.active
        }`}
        onClick={() => {
          dispatch(changeCartView(ECartView.wishlistview));
        }}
      >
        My wish list
      </li>
      <li
        className={`${styles.cartNavItem} ${
          cartView === ECartView.orderview && styles.active
        }`}
        onClick={() => {
          dispatch(changeCartView(ECartView.orderview));
        }}
      >
        My ordered
      </li>
    </ul>
  );
}
