import { Col, Form, Input, Radio, Row, Select, Slider } from "antd";
import ProductList from "@/layouts/ProductList";

export default function ShopLayout() {
  return (
    <Row>
      <Col xl={4} style={{ marginTop: "65px" }}>
        <span>Filter option</span>
        <Form layout="vertical">
          <Form.Item label="Filter by book name">
            <Input placeholder="Search by book name" />
          </Form.Item>
          {/* Category  */}
          <Form.Item key={1} label="Filter by category">
            <Radio.Group onChange={() => {}} value={1} defaultValue={1}>
              <Radio
                value={1}
                style={{
                  display: "block",
                }}
              >
                Category A
              </Radio>
              <Radio
                value={2}
                style={{
                  display: "block",
                }}
              >
                Category B
              </Radio>
              <Radio
                value={3}
                style={{
                  display: "block",
                }}
              >
                Category C
              </Radio>
              <Radio
                value={4}
                style={{
                  display: "block",
                }}
              >
                Category D
              </Radio>
            </Radio.Group>
          </Form.Item>

          {/* Type  */}
          <Form.Item key={1} label="Filter by type">
            <Radio.Group onChange={() => {}} value={1} defaultValue={1}>
              <Radio
                value={1}
                style={{
                  display: "block",
                }}
              >
                Category A
              </Radio>
              <Radio
                value={2}
                style={{
                  display: "block",
                }}
              >
                Category B
              </Radio>
              <Radio
                value={3}
                style={{
                  display: "block",
                }}
              >
                Category C
              </Radio>
              <Radio
                value={4}
                style={{
                  display: "block",
                }}
              >
                Category D
              </Radio>
            </Radio.Group>
          </Form.Item>

          {/* Author  */}
          <Form.Item label="Filter by Author">
            <Select
              showSearch
              placeholder="Search by author"
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
              ]}
            />
          </Form.Item>

          {/* Publisher  */}
          <Form.Item label="Filter by publisher">
            <Select
              showSearch
              placeholder="Search by publisher"
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Filter by price range">
            <Slider range defaultValue={[20, 50]} disabled={false} />
          </Form.Item>
        </Form>
      </Col>
      <Col xl={20}>
        <ProductList title="Trending products" subTitle="Trending products" />
      </Col>
    </Row>
  );
}
