import { IProductsType } from "../../components/Product";
import SimpleSlider from "../../components/Slider";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import IntroduceLayout from "../../layouts/IntroduceLayout";
import Trending from "../../layouts/Trending";
import ViewAllCategory from "../../layouts/ViewAllCategory";

const HomePage = () => {
  const products: IProductsType[] = [
    {
      id: 1,
      color: "white",
      countOfProduct: 1,
      countOfReviewer: 1,
      nameOfProduct: "T-Shirt 01",
      priceOfProduct: 1,
      productDescription: 1,
      productImages: "../../assets/images/products/men/men16.jpg",
      size: 1,
      starOfProduct: 1,
      idCategory: 1,
      hasQuickView: true,
    },
  ];
  return (
    <>
      <Header />
      <SimpleSlider />
      <IntroduceLayout />
      <ViewAllCategory />
      {/* <Trending products={products} /> */}

      <Footer />
    </>
  );
};

export default HomePage;
