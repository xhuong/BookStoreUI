import { AiFillStar } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
// import "./index.scss";
import React from "react";
import Button from "../../components/Button";
// import { useNavigate } from "react-router-dom";
// import ModalNotifycation from "../ModalNotification";
// import { useDispatch } from "react-redux";
// import {
//   addProductsToCart,
//   addProductsToWishList,
// } from "../../redux/slices/cartSlice";
// import { formatPrice } from "../../Utils/Commons";

import styles from "./index.module.scss";

export type IProductsType = {
  id: number;
  color: "yellow" | "blue" | "white" | "black";
  countOfProduct: number;
  countOfReviewer: number;
  nameOfProduct: string;
  priceOfProduct: number;
  productDescription: number;
  productImages: string;
  size: number;
  starOfProduct: number;
  idCategory: number;
  hasQuickView?: boolean;
};

function Product({
  id,
  color,
  countOfProduct,
  countOfReviewer,
  nameOfProduct,
  priceOfProduct,
  productDescription,
  productImages,
  size,
  starOfProduct,
  idCategory,
  ...props
}: IProductsType) {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const renderStar = (numberOfStars: number) => {
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (i < numberOfStars) {
        stars.push(<AiFillStar style={{ color: "#ff9800" }} />);
      } else {
        stars.push(<AiFillStar />);
      }
    }
    return stars;
  };

  return (
    <div
      className={styles.product}
      //   onClick={(e) => {
      //     e.stopPropagation();
      //     navigate(`/products/details/${id}`);
      //   }}
    >
      <div className={styles.productImgWrapper}>
        <img
          src={require(`../../assets/images/products/men/men16.jpg`)}
          alt=""
        />
        {props.hasQuickView && (
          <div className={styles.productButtonWrapper}>
            <Button btnType="secondary" btnSize="full-btn">
              <FaEye /> QuickView
            </Button>
          </div>
        )}
      </div>

      <div className={styles.productContent}>
        <div className={styles.productReviews}>
          {!props.hasQuickView && (
            <React.Fragment>
              <span className={styles.productStar}>
                {renderStar(starOfProduct).map((item, index) => {
                  return item;
                })}
              </span>
              <span className={styles.productReviewsCount}>6 Reviews</span>
              {/* <span className={styles.productReviewsCount}>{`(${countOfReviewer} Reviews)`}</span> */}
            </React.Fragment>
          )}
        </div>
        <h4 className={styles.productTitle}>{nameOfProduct}</h4>
        <span className={styles.productPrice}>1 VNĐ</span>
        {/* <span className={styles.product_price}>{formatPrice(priceOfProduct)} VNĐ</span> */}
        <span className={styles.productSale}>Sale</span>
        <span className={styles.productDiscount}>- 40%</span>

        {!props.hasQuickView && (
          <ul className={styles.productAction}>
            <li className={styles.productActionItem}>
              <MdZoomOutMap />
            </li>
            <li
              className={styles.productActionItem}
              //   onClick={(e) => {
              //     e.stopPropagation();
              //     const product = {
              //       id,
              //       color,
              //       countOfProduct,
              //       countOfReviewer,
              //       nameOfProduct,
              //       priceOfProduct,
              //       productDescription,
              //       productImages,
              //       size,
              //       starOfProduct,
              //       idCategory,
              //       count: 1,
              //     };
              //     dispatch(addProductsToWishList(product));
              //     ModalNotifycation({
              //       title: "Product has been added to wishlist.",
              //     });
              //   }}
            >
              <IoMdHeartEmpty />
            </li>
            <li
              className={styles.productActionItem}
              //   onClick={(e) => {
              //     e.stopPropagation();
              //     const product = {
              //       id,
              //       color,
              //       countOfProduct,
              //       countOfReviewer,
              //       nameOfProduct,
              //       priceOfProduct,
              //       productDescription,
              //       productImages,
              //       size,
              //       starOfProduct,
              //       idCategory,
              //       count: 1,
              //     };
              //     dispatch(addProductsToCart(product));
              //     ModalNotifycation({
              //       title: "Product has been added to cart !",
              //     });
              //   }}
            >
              <BsCartPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Product;
