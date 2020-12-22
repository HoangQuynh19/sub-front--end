import React, { useEffect } from 'react';
import MainFeaturePost from './MainFeaturePost';
import CategorySection from './CategorySection';
import ProductListSection, { ProductOverviewType } from './ProductListSection';
// import PricingSection from "./PricingSection";

const PRODUCT_LIST: Array<ProductOverviewType> = [
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
        price: 1200000,
        compare: 1500000,
    },
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp2.png`,
        price: 1200000,
    },
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
        price: 1200000,
    },
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
        price: 1200000,
        compare: 1500000,
    },
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp2.png`,
        price: 1200000,
    },
    {
        name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
        image: `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
        price: 1200000,
    },
];

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
