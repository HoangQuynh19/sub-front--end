import React, { useEffect, useState } from 'react';
import ActiveLastBreadcrumb from '../../../shared/components/ActiveLastBreadcrumb';
import ProductMainFeature from './ProductMainFeature';
// import PricingSection from "./PricingSection";

const path = ['Home', 'Laptop', 'Laptop Gamming', 'ProductName'];
const href = ['/', '#', '#', '#'];

const PRODUCT_DETAIL = {
    name: 'Laptop MSI Gaming GS66 Stealth 10SE (407VN)',
    rating: 4,
    brand: 'MSI',
    numRating: 46,
    unit: '₫',
    gift: '$60 Apple Music gift card with purchase of select Beats products.',
    description: '(i7 10750H 16GB RAM/512GB SSD/RTX2060 6G/15.6 inch FHD 240Hz/Win 10)',
    optionAvailables: 'Màu sắc',
    defaultOption: 'black',
    comparePrice: 43029000,
    options: {
        default: {
            text: 'default',
            price: -1,
            maxPrice: -1,
            quantity: undefined,
            shop: 'shop01',
        },
        blue: {
            text: 'Màu xanh',
            price: 38052000,
            quantity: 23,
            shop: 'shop01',
            othersShop: ['shop01', 'shop02'],
        },
        black: {
            text: 'Màu đen',
            price: 37052000,
            quantity: 23,
            shop: 'shop02',
            othersShop: ['shop03', 'shop02'],
        },
    },
};

const SHOPs_SUMMARY = {
    shop01: {
        name: 'Shop 1',
        slogan: 'Chúng tôi cam kết hàng chĩnh hãng',
        warrantyTime: 'Bảo hành 3 tháng - 1 đổi 1 trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất',
    },
    shop02: {
        name: 'Shop 2',
        slogan: 'Chúng tôi cam kết hàng chĩnh hãng',
        warrantyTime: 'Bảo hành 3 tháng - 1 đổi 1 trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất',
    },
    shop03: {
        name: 'Shop 3',
        slogan: 'Chúng tôi cam kết hàng chĩnh hãng',
        warrantyTime: 'Bảo hành 3 tháng - 1 đổi 1 trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất',
    },
};
type ProductDetailOptionType = typeof PRODUCT_DETAIL.options;
function getListPrice(options: ProductDetailOptionType): number[] {
    return Object.keys(options)
        .map((k) => {
            const price = options[k as keyof typeof options].price;
            return price;
        })
        .filter((x) => x > 0);
}

function ProductDetail(): JSX.Element {
    const options = Object.keys(PRODUCT_DETAIL.options).map((k) => ({
        value: k,
        text: PRODUCT_DETAIL.options[k as keyof typeof PRODUCT_DETAIL.options].text,
    }));
    const [buyQuantity, setBuyQuantity] = useState<number>(1);
    const prices = getListPrice(PRODUCT_DETAIL.options);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    PRODUCT_DETAIL.options.default.price = minPrice;
    PRODUCT_DETAIL.options.default.maxPrice = maxPrice;

    const [option, setOption] = useState<keyof typeof PRODUCT_DETAIL.options>('default');
    const currentShop = SHOPs_SUMMARY[PRODUCT_DETAIL.options[option].shop as keyof typeof SHOPs_SUMMARY];
    return (
        <main>
            <section>
                <ActiveLastBreadcrumb path={path} href={href} />
            </section>
            <ProductMainFeature<keyof ProductDetailOptionType>
                {...PRODUCT_DETAIL}
                {...PRODUCT_DETAIL.options[option]}
                optionProps={{
                    optionName: PRODUCT_DETAIL.optionName,
                    options: options,
                    option: option,
                    setOption: setOption,
                }}
                shopProps={{
                    name: currentShop.name,
                    slogan: currentShop.slogan,
                    link: '#',
                }}
                quantityProps={{ buyQuantity, setBuyQuantity }}
            />
        </main>
    );
}

ProductDetail.propTypes = {};

export default ProductDetail;
