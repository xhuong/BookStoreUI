import { Col, Row } from "antd";
import Section from "@/layouts/Section";
import Product, { IProductType } from "@/components/Product";

export default function ProductList() {
  const fakePros: IProductType[] = [
    {
      imgSrc: "",
      author: "Author 1",
      name: "Book 1",
      price: 300,
    },
    {
      imgSrc: "",
      author: "Author 2",
      name: "Book 2",
      price: 300,
    },
    {
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
    {
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
    {
      imgSrc: "",
      author: "Author 3",
      name: "Book 3",
      price: 300,
    },
  ];
  return (
    <Section title="Trending products" subTitle="Trending products">
      <Row
        justify={{
          ["xs"]: "start",
          ["xl"]: "space-evenly",
          ["md"]: "start",
        }}
        gutter={[8, 8]}
      >
        {fakePros.map((product: IProductType) => (
          <Col xl={4} lg={4} md={6} sm={12} xs={8}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
