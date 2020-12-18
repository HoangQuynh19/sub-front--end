import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MainFeaturePost from "./MainFeaturePost";
import CategorySection from "./CategorySection";
import ProductListSection from "./ProductListSection";
// import PricingSection from "./PricingSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <main>
      {/* <MainFeaturePost /> */}
      <MainFeaturePost />
      <CategorySection />
      <ProductListSection />  
      <ProductListSection />  

      {/* <FeatureSection /> */}
      {/* <PricingSection /> */}
    </main>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
