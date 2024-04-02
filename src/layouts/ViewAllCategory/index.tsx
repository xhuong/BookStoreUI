import { Row, Col } from "antd";
import styles from "./index.module.scss";

export default function ViewAllCategory() {
  return (
    <div className={styles.viewCategory}>
      <h2 className={styles.viewCategoryHeading}>View all categories</h2>
      <Row
        justify={{
          ["xs"]: "start",
          ["xl"]: "space-evenly",
          ["md"]: "start",
        }}
        gutter={[8, 8]}
      >
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
        <Col xl={2} lg={6} md={6} sm={12} xs={8}>
          <div className={styles.viewCategoryItem}>
            <div className={styles.viewCategoryItemContent}>
              <img
                src={require("../../assets/images/products/book/1.png")}
                alt=""
              />
            </div>
            <h4 className={styles.viewCategoryTitle}>Education Curriculum</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
}
