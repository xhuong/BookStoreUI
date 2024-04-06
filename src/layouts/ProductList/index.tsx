import { Col, Row } from "antd";
import Section from "@/components/Section";
import Product, { IProductType } from "@/components/Product";
import SaleOffCard from "@/components/SaleOffCard";

export type IProductList = {
  title: string;
  subTitle: string;
};

export default function ProductList({ title, subTitle }: IProductList) {
  const fakePros: IProductType[] = [
    {
      id: 1,
      imgSrc: "",
      author: "Author 1",
      name: "Book 1",
      price: 300,
    },
    {
      id: 2,
      imgSrc: "",
      author: "Author 2",
      name: "Book 2",
      price: 300,
    },
    {
      id: 3,
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
    {
      id: 4,
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
    {
      id: 5,
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
    {
      id: 6,
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
  ];

  return (
    <Section title={title} subTitle={subTitle}>
      <Row
        justify={{
          ["xs"]: "start",
          ["xl"]: "start",
          ["md"]: "start",
        }}
        gutter={[12, 12]}
      >
        {fakePros.map((product: IProductType) => (
          <Col xl={4} lg={4} md={6} sm={12} xs={8}>
            <Product {...product} />
          </Col>
        ))}
        {/* <Col xl={8} lg={4} md={6} sm={12} xs={8}>
          <SaleOffCard />
        </Col> */}
      </Row>
    </Section>
  );
}
