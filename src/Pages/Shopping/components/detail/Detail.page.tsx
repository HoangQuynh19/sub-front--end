import React, { useEffect, useState } from 'react';
import { PRODUCT_DETAIL } from '../../../../objects/ProductDetail';
import ActiveLastBreadcrumb from '../../../shared/components/ActiveLastBreadcrumb';
import ProductMainFeature from './ProductMainFeature';
// import PricingSection from "./PricingSection";

const path = ['Home', 'Laptop', 'Laptop Gamming', 'ProductName'];
const href = ['/', '#', '#', '#'];

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
    const [buyQuantity, setBuyQuantity] = useState<number>(1);
    const prices = getListPrice(PRODUCT_DETAIL.options);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    PRODUCT_DETAIL.options.default.price = minPrice;
    PRODUCT_DETAIL.options.default.maxPrice = maxPrice;

    const optionAvailables = PRODUCT_DETAIL.optionAvailables;
    const optionProps = optionAvailables.map((v) => {
        const optionName = v.name;
        const values = v.values;
        const [option, setOption] = useState<string>('default');
        return { optionName, values, option, setOption };
    });
    let selectedOption = optionProps.map((v) => v.option).join(', ');
    console.log(selectedOption);
    if (!(selectedOption in PRODUCT_DETAIL.options)) {
        selectedOption = 'default';
    }
    const currentOptionProps = PRODUCT_DETAIL.options[selectedOption as keyof ProductDetailOptionType];
    const currentShop =
        SHOPs_SUMMARY[
            PRODUCT_DETAIL.options[selectedOption as keyof ProductDetailOptionType].shop as keyof typeof SHOPs_SUMMARY
        ];
    return (
        <main>
            <section>
                <ActiveLastBreadcrumb path={path} href={href} />
            </section>
            <ProductMainFeature<string>
                {...PRODUCT_DETAIL}
                {...currentOptionProps}
                optionProps={optionProps}
                shopProps={{
                    name: currentShop.name,
                    slogan: currentShop.slogan,
                    link: '#',
                }}
                quantityProps={{ buyQuantity, availableQuantity: currentOptionProps.availableQuantity, setBuyQuantity }}
            />
        </main>
    );
}

ProductDetail.propTypes = {};

export default ProductDetail;
