import { Col, Row } from "antd";

import { MdRemoveShoppingCart } from "react-icons/md";

import Button from "@/components/Button";
import InputNumber from "@/components/InputNumber";

import styles from "./index.module.scss";

export default function WishListView() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <span>My wish list</span>

        <Button btnType="secondary" isRounded btnSize="m" onClick={() => {}}>
          Check out
        </Button>
      </div>
      <div className={styles.cartTable}>
        <Row gutter={[12, 12]}>
          <>
            <Col xl={10}>
              <div className={styles.bookInfo}>
                <div className={styles.bookInfoImg}>
                  <img
                    src={require("@/assets/images/products/book/2.png")}
                    alt=""
                  />
                </div>
                <div className={styles.bookInfoContent}>
                  <h5 className={styles.bookName}>Book 1</h5>
                  <p className={styles.bookUnitPrice}>
                    Unit price: <span>550.000 VNĐ</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className={styles.subTotal}>
                <p>Subtotal:</p>
                <span>550.000 VNĐ</span>
              </div>
            </Col>
            <Col xl={4}>
              <div className={styles.expectedDate}>
                <p>Expected date by:</p>
                <span>22 November 2022</span>
              </div>
            </Col>
            <Col xl={6}>
              <div className={styles.bookCount}>
                <InputNumber defaultValue={1} />
              </div>
            </Col>
          </>
        </Row>
      </div>
      <div className={styles.cartFooter}>
        <Button btnType="primary" btnSize="m" isRounded>
          Clear cart <MdRemoveShoppingCart />
        </Button>

        <p className={styles.totalPrice}>
          Total: <span>$400</span>
        </p>
      </div>
    </div>
  );
}
