import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";

import styles from "./index.module.scss";

export type IProductType = {
  author: string;
  name: string;
  price: number;
  imgSrc: string;
};

export default function Product({ author, name, price, imgSrc }: IProductType) {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={require("@/assets/images/products/book/4.png")} alt="" />
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productAuthor}>{author}</h3>
        <p className={styles.productName}>{name}</p>
        <span className={styles.productPrice}>${price}</span>
      </div>
      <ul className={styles.productActions}>
        <li className={styles.productActionItem}>
          <span onClick={() => {}}>
            <CiHeart />
          </span>
        </li>
        <li className={styles.productActionItem}>
          <span onClick={() => {}}>
            <BsCartPlus />
          </span>
        </li>
      </ul>
    </div>
  );
}
