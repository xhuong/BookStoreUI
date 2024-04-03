import { Col, Rate, Row } from "antd";
import Container from "../Container";
import Button from "@/components/Button";
import InputNumber from "@/components/InputNumber";

export default function ProductDetailsLayout() {
  return (
    <div className="productDetails" style={{ marginTop: " 67.2px" }}>
      <Container>
        <Row gutter={[24, 24]}>
          <Col xl={12} md={12}>
            <div className="productDetailsImage">
              <div className="productDetailsImageWrapper">
                <img
                  src={require("@/assets/images/products/book/1.png")}
                  alt=""
                />
              </div>
              <ul className="productDetailsImageList">
                <li className="productDetailsImageItem">
                  <img src="" alt="" />
                </li>
                <li className="productDetailsImageItem">
                  <img src="" alt="" />
                </li>
                <li className="productDetailsImageItem">
                  <img src="" alt="" />
                </li>
                <li className="productDetailsImageItem">
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={12} md={12}>
            <div className="productDetailsDesc">
              <h6>Category name: Curricular</h6>
              <h2>Book name</h2>
              <div className="review">
                <Rate value={3} />
                <p className="writeReview">Write a review</p>
              </div>
              <hr />
              <span className="price">$20.00</span>
              <div className="productDetailsAction">
                <Button btnType="secondary" isRounded>
                  Add to cart
                </Button>
                <InputNumber />
              </div>
            </div>
          </Col>
        </Row>

        {/* Comment  */}
        <Row gutter={[24, 24]}>
          <Col xl={12}></Col>
        </Row>
      </Container>
    </div>
  );
}
