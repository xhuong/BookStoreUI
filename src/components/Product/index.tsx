import { useNavigate } from "react-router-dom";
import { Rate } from "antd";

import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";

import styles from "./index.module.scss";

export type IProductType = {
  id: number;
  author: string;
  name: string;
  price: number;
  imgSrc: string;
};

export default function Product({
  id,
  author,
  name,
  price,
  imgSrc,
}: IProductType) {
  const navigate = useNavigate();

  return (
    <div className={styles.product} onClick={() => navigate(`/product/${id}`)}>
      <span className={styles.newLabel}>New</span>
      <div className={styles.productImg}>
        <img src={require("@/assets/images/products/book/4.png")} alt="" />
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productAuthor}>{author}</h3>
        <p className={styles.productName}>{name}</p>
        <div className={styles.productPriceWrapper}>
          <span className={styles.productPrice}>${price}</span>
          <Rate value={4.5} />
        </div>
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
