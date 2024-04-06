import Cart from "@/components/Cart";
import CartNavLeft from "@/components/CartNavLeft";
import { Col, Row } from "antd";

export default function CartPageLayout() {
  return (
    <Row>
      <Col xl={6}>
        <CartNavLeft />
      </Col>
      <Col xl={18}>
        <Cart />
      </Col>
    </Row>
  );
}
