import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Button, Grid, Paper, Typography, Chip, Link, Hidden } from '@material-ui/core';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import NumberPlusMinus from '../../../shared/components/NumberPlusMinus';
import FeatureSubSection from './FeatureSubSection';
import { PriceFeatureStyles, HeaderFeatureStyles, PromotionStyles } from './Detail.styles';
import Rating from '@material-ui/lab/Rating';
import ShopSummary, { ShopSummaryProps } from './ShopSummary';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import PriceFeature, { PriceProps } from '../shared/PriceFeature';

interface HeaderProps {
    name: string;
    rating: number;
    brand: string;
    numRating: number;
}

function HeaderFeature(props: HeaderProps) {
    const classes = HeaderFeatureStyles();
    const { name, rating, brand, numRating } = props;
    console.log(numRating);
    return (
        <Fragment>
            <div className={classes.brand}>
                <Chip size="small" label="bán chạy" color="secondary" />
            </div>
            <Typography className={classes.title} variant="h5">
                {name}
            </Typography>
            <div className={classes.subtitleRating_wrapper}>
                <Rating readOnly value={rating} size="small" />
                <Link className={classes.subtitleRating_link}>
                    <Typography variant="subtitle2">(xem {numRating} đánh giá)</Typography>
                </Link>
            </div>
            <div className={classes.brand}>
                <Typography>
                    Thương hiệu: <Link>{brand}</Link>
                </Typography>
            </div>
        </Fragment>
    );
}

type OptionSelectionProps<T extends string> = {
    optionName: string;
    values: Array<Record<'value' | 'text', string>>;
    option: T;
    setOption: Dispatch<SetStateAction<T>>;
};
function OptionSelectionFeature<T extends string>(props: OptionSelectionProps<T>) {
    const { optionName, values, option, setOption } = props;
    // const [option, setOption] = useState<string | null>(options[0].value);
    const handleOption = (event: React.MouseEvent<HTMLElement>, newOption: string | null) => {
        setOption(newOption as T);
    };
    return (
        <FeatureSubSection title={optionName}>
            <ToggleButtonGroup
                value={option}
                exclusive
                size="small"
                onChange={handleOption}
                aria-label="text alignment"
            >
                {values.map(
                    (i) =>
                        i.value != 'default' && (
                            <ToggleButton key={i.value} value={i.value}>
                                {i.text}
                            </ToggleButton>
                        ),
                )}
            </ToggleButtonGroup>
        </FeatureSubSection>
    );
}

type QuantitySelectionFeatureProps = { buyQuantity: number; setBuyQuantity: Dispatch<SetStateAction<number>> };
function QuantitySelectionFeature(props: QuantitySelectionFeatureProps) {
    const { buyQuantity, setBuyQuantity } = props;
    return (
        <FeatureSubSection title="Số lượng">
            <NumberPlusMinus value={buyQuantity} setValue={setBuyQuantity} min={1} max={1000} />
        </FeatureSubSection>
    );
}

function Promotion(): JSX.Element {
    const classes = PromotionStyles();

    return (
        <FeatureSubSection title="2 Mã giảm giá">
            <Button className={classes.coupon}>Giảm 5%</Button>
            <Button className={classes.coupon}>Giảm 10%</Button>
        </FeatureSubSection>
    );
}
export type ProductSummaryProps<T extends string> = {
    optionProps?: Array<OptionSelectionProps<T>>;
    shopProps: ShopSummaryProps;
    quantityProps: QuantitySelectionFeatureProps;
} & HeaderProps &
    PriceProps;
export default function ProductSummary<T extends string>(props: ProductSummaryProps<T>): JSX.Element {
    const {
        name,
        rating,
        numRating,
        price,
        maxPrice,
        comparePrice,
        unit,
        optionProps,
        shopProps,
        quantityProps,
    } = props;
    return (
        <Grid item xs={12} md={7} container spacing={1}>
            <Grid item xs={12}>
                <HeaderFeature name={name} rating={rating} numRating={numRating} brand="MSI" />
            </Grid>
            <Grid container item xs={12} md={12} lg={7}>
                <Grid item xs={12}>
                    <Paper className={PriceFeatureStyles().root} elevation={0}>
                        <PriceFeature price={price} comparePrice={comparePrice} unit={unit} maxPrice={maxPrice} />
                    </Paper>
                    {optionProps && optionProps.map((v, ind) => <OptionSelectionFeature key={ind} {...v} />)}
                    <Promotion />
                    <FeatureSubSection>
                        <Typography variant="subtitle2">
                            Bạn hãy <span>NHẬP ĐỊA CHỈ</span> nhận hàng để được dự báo thời gian & chi phí giao hàng một
                            cách chính xác nhất.
                        </Typography>
                    </FeatureSubSection>
                    <QuantitySelectionFeature {...quantityProps} />
                    <div className="pad-top-divider">
                        <Button variant="contained" size="large" fullWidth color="primary">
                            Chọn mua ngay
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid container item xs={12} lg={5}>
                    <ShopSummary {...shopProps} />
                </Grid>
            </Hidden>
        </Grid>
    );
}
