import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();

  const handleLikeToggle = (product) => {
    console.log("Liked product:", product); // هنا تقدر تدير المنطق الخاص بك لتحديث حالة الإعجاب
  };

  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
        handleLikeToggle={handleLikeToggle} // تمرير الدالة إلى Section
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
        handleLikeToggle={handleLikeToggle} // تمرير الدالة إلى Section
      />
      <Section
        title="Best Sales"
        bgColor="#f6f9fc"
        productItems={bestSales}
        handleLikeToggle={handleLikeToggle} // تمرير الدالة إلى Section
      />
    </Fragment>
  );
};

export default Home;