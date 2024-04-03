import { Row, Col } from "antd";
import styles from "./index.module.scss";
import { ReactNode } from "react";

export type IViewAllCategoryItem = {
  name: string;
};

export type IViewAllCategory = {
  title: string;
  items: IViewAllCategoryItem[];
};

export default function ViewAllCategory({
  title = "View all categories",
  items,
}: IViewAllCategory) {
  return (
    <div className={styles.viewCategory}>
      <h2 className={styles.viewCategoryHeading}>{title}</h2>
      <Row
        justify={{
          ["xs"]: "start",
          ["xl"]: "start",
          ["md"]: "start",
        }}
        gutter={[8, 8]}
      >
        {items.map((item: { name: string }) => (
          <Col xl={4} lg={6} md={6} sm={12} xs={8}>
            <div className={styles.viewCategoryItem}>
              <div className={styles.viewCategoryItemContent}>
                <img
                  src={require("../../assets/images/products/book/4.png")}
                  alt=""
                />
              </div>
              <h5 className={styles.viewCategoryTitle}>{item.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
