import SimpleSlider from "@/components/Slider";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import IntroduceLayout from "@/layouts/IntroduceLayout";
import ProductList from "@/layouts/ProductList";
import ViewAllCategory from "@/layouts/ViewAllCategory";

const HomePage = () => {
  return (
    <>
      <Header />
      <SimpleSlider />
      <IntroduceLayout />
      <ProductList title="Trending products" subTitle="Trending products" />
      <ProductList title="Top products" subTitle="Top products" />
      <ViewAllCategory
        title="View All Category"
        items={[
          { name: "Lorem ipsum dolor sit amet consectetur." },
          { name: "Lorem ipsum dolor sit amet consectetur." },
          { name: "Lorem ipsum dolor sit amet consectetur." },
        ]}
      />
      <Footer />
    </>
  );
};

export default HomePage;
