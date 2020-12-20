import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ActiveLastBreadcrumb from "../../../shared/components/ActiveLastBreadcrumb";
import Section from "../../../shared/components/Section";
import { SectionStyles } from "../Styles";
import ProductMainFeature from "./ProductMainFeature";
// import PricingSection from "./PricingSection";


const path = ['Home', 'Laptop', 'Laptop Gamming', 'ProductName']
const href = ['/', '#', '#', '#']

function ProductDetail(props) {
  return (
    <main>
      <section>
        <ActiveLastBreadcrumb path={path} href={href} />
      </section>
      <ProductMainFeature />
    </main>
  );
}

ProductDetail.propTypes = {
  
};

export default ProductDetail;
