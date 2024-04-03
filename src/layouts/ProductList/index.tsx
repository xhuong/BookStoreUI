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
    {
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
          <Col xl={6} lg={4} md={6} sm={12} xs={8}>
            <Product {...product} />
          </Col>
        ))}
        <Col xl={8} lg={4} md={6} sm={12} xs={8}>
          <SaleOffCard />
        </Col>
      </Row>
    </Section>
  );
}
