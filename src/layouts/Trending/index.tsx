import { useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";

import { TfiLineDashed } from "react-icons/tfi";

import Product, { IProductsType } from "../../components/Product";
import Section from "../Section";

import styles from "./index.module.scss";

type ITrendingTypes = {
  products: IProductsType[];
};

function Trending({ products }: ITrendingTypes) {
  const initTrends = [
    { title: "All", isActive: true, id: 0 },
    { title: "Men", isActive: false, id: 1 },
    { title: "Women", isActive: false, id: 2 },
    { title: "Kid", isActive: false, id: 3 },
  ];

  const [trends, setTrends] = useState(initTrends);

  const handleActive = (id: number) => {
    initTrends.forEach((ele, _, arr) => {
      if (id === ele.id && ele.isActive === false) {
        arr.forEach((ele) => {
          if (ele.isActive === true) {
            ele.isActive = false;
          }
        });
        ele.isActive = true;
      }
    });
    setTrends([...initTrends]);
  };

  return (
    <Section title="Trending Categories" subTitle="Popular Categories">
      <Row justify={"center"} className="pb-20">
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/fashion.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Men's Wear</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="" className="text-center">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/tshirt.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Kid's Wear</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="" className="text-center">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/accessories.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Accessories</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="" className="text-center">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/pant.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Men's Shoes</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="" className="text-center">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/television.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Television</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8}>
          <Link to="" className="text-center">
            <div className={styles.trending}>
              <img
                src={require("../../assets/images/trendings/pant.png")}
                alt=""
              />
            </div>
            <p className={styles.trendingName}>Men's Pants</p>
          </Link>
        </Col>
      </Row>
      {/* Tabs Component  */}
      <ul className={styles.trendingList}>
        {trends?.map((trendingTitle) => (
          <li
            key={trendingTitle.id}
            className={`${styles.trendingItem} ${
              trendingTitle.isActive ? styles.trendingItemActive : ""
            }`}
            onClick={() => handleActive(trendingTitle.id)}
          >
            <Link to="">{trendingTitle.title}</Link>
            <div className={styles.trendingLineDashed}>
              <TfiLineDashed />
            </div>
          </li>
        ))}
      </ul>
      {/* End Tabs component  */}

      {/* Product list component  */}
      <Row gutter={[30, 30]}>
        {products?.map((product: IProductsType, index: number) => (
          <Col xl={6} md={6} sm={12} xs={12} key={index}>
            <Product {...product} hasQuickView={false} />
          </Col>
        ))}
      </Row>
      {/* End Product list component  */}
    </Section>
  );
}

export default Trending;
