import React, { useEffect } from 'react';
import MainFeaturePost from './MainFeaturePost';
import CategorySection from './CategorySection';
import ProductListSection, { ProductOverviewType } from './ProductListSection';
import { PRODUCT_LIST } from '../../../../objects/ProductDetail';
// import PricingSection from "./PricingSection";

function Home(props: { selectHome: () => unknown }): JSX.Element {
    const { selectHome } = props;
    useEffect(() => {
        selectHome();
    }, [selectHome]);
    return (
        <main>
            {/* <MainFeaturePost /> */}
            <MainFeaturePost />
            <CategorySection />
            <ProductListSection title="Dành riêng cho bạn" productList={PRODUCT_LIST} />
            <ProductListSection title="Thiết bị âm thanh" productList={PRODUCT_LIST} />
            {/* <FeatureSection /> */}
            {/* <PricingSection /> */}
        </main>
    );
}

export default Home;
