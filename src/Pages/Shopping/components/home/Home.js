import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import MainFeaturePost from "./MainFeaturePost";
import Section, { SectionHeader } from "./Section";
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
      {/* <FeatureSection /> */}
      {/* <PricingSection /> */}
    </main>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
