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
      <ProductList />
      <ViewAllCategory />
      <Footer />
    </>
  );
};

export default HomePage;
