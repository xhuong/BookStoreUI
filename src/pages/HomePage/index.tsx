import { useEffect, useState } from "react";

import { mapBackendDataToBookUI } from "@/utils/common";

import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import ProductList from "@/layouts/ProductList";
import ViewAllCategory from "@/layouts/ViewAllCategory";
import IntroduceLayout from "@/layouts/IntroduceLayout";

import { IBookType } from "@/components/Product";
import SimpleSlider from "@/components/Slider";

import { useGetNewestBooksQuery } from "@/services/BookAPI";
import { useDispatch } from "react-redux";
import { activeLoading, deactiveLoading } from "@/redux/slices/loading";

const HomePage = () => {
  const dispatch = useDispatch();

  const [newestBooks, setNewestBook] = useState<IBookType[]>([]);

  const { data, isSuccess } = useGetNewestBooksQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    dispatch(activeLoading());
    if (isSuccess) {
      const { data: response } = data?.result;
      const dataConverted = mapBackendDataToBookUI(response);
      setNewestBook(dataConverted);
      dispatch(deactiveLoading());
    }
  }, [data, isSuccess]);

  return (
    <>
      <Header />
      <SimpleSlider />
      <IntroduceLayout />
      <ViewAllCategory
        title="View all categories"
        items={[
          { name: "Lorem ipsum dolor sit amet consectetur." },
          { name: "Lorem ipsum dolor sit amet consectetur." },
          { name: "Lorem ipsum dolor sit amet consectetur." },
        ]}
      />
      <ProductList
        title="Newest products"
        subTitle="Newest products"
        data={newestBooks}
      />
      <Footer />
    </>
  );
};

export default HomePage;
