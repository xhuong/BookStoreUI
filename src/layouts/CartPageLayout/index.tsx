import { useSelector } from "react-redux";

import { Col, Row } from "antd";
import { ECartView } from "@/redux/slices/cart";

import CartNavLeft from "@/components/CartNavLeft";
import CartView from "@/components/CartView";
import OrderView from "@/components/OrderView";
import WishListView from "@/components/WishListView";

export default function CartPageLayout() {
  const currentView: ECartView = useSelector((state: any) => state.cart.view);
  return (
    <Row>
      <Col xl={6}>
        <CartNavLeft />
      </Col>
      <Col xl={18}>
        {currentView === ECartView.cartview && <CartView />}
        {currentView === ECartView.orderview && <OrderView />}
        {currentView === ECartView.wishlistview && <WishListView />}
      </Col>
    </Row>
  );
}
