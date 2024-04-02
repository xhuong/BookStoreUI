import { Link } from "react-router-dom";

import { Col, Row } from "antd";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

import Container from "@/layouts/Container";

import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <Row gutter={[30, 30]}>
            <Col xl={6} md={6} sm={24} xs={24}>
              <div className={styles.footerLogoWrapper}>
                <img src={require("../../assets/images/logo.png")} alt="" />
              </div>
              <p className={styles.footerText}>
                155 Dien Bien Phu, Da Nang, VN
              </p>
              <p className={styles.footerText}>1-202-555-0106</p>
              <p className={styles.footerText}>help@shopper.com</p>
              <ul className={styles.footerSocials}>
                <li className={styles.footerSocial}>
                  <Link to="">
                    <RiFacebookFill />
                  </Link>
                </li>
                <li className={styles.footerSocial}>
                  <Link to="">
                    <RiTwitterFill />
                  </Link>
                </li>
                <li className={styles.footerSocial}>
                  <Link to="">
                    <RiLinkedinBoxFill />
                  </Link>
                </li>
                <li className={styles.footerSocial}>
                  <Link to="">
                    <RiYoutubeFill />
                  </Link>
                </li>
                <li className={styles.footerSocial}>
                  <Link to="">
                    <RiInstagramFill />
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={12} md={12} sm={24} xs={24}>
              <Row>
                <Col xl={8} md={8} sm={24} xs={24} className={styles.footerCol}>
                  <h4 className={styles.footerTitle}>Supports</h4>
                  <ul className={styles.footerList}>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Contact us
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        About page
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Size guide
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Shipping
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        FAQ's page
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col xl={8} md={8} sm={24} xs={24} className={styles.footerCol}>
                  <h4 className={styles.footerTitle}>Shop</h4>
                  <ul className={styles.footerList}>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Men's shopping
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Women's shopping
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Kid's shopping
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Furniture
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Discount
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col xl={8} md={8} sm={24} xs={24} className={styles.footerCol}>
                  <h4 className={styles.footerTitle}>Company</h4>
                  <ul className={styles.footerList}>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        About
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Blog
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Affiliate
                      </Link>
                    </li>
                    <li className={styles.footerItem}>
                      <Link to="" className={styles.footerText}>
                        Login
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xl={6} md={6} sm={24} xs={24}>
              <h4 className={styles.footerTitle}>Subscribe</h4>
              <p className={`${styles.footerText} normal`}>
                Receive updates, hot deals, discounts sent straignt in your
                inbox daily
              </p>
              <div className={styles.footerPayment}>
                <h6 className={styles.footerPaymentTitle}>Secure payments</h6>
                <img
                  src={require("../../assets/images/payments/card.png")}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
