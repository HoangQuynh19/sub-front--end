import React from "react";
import {
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FeatureSucSection from "./FeatureSubSection";

const useStyles = makeStyles(() => ({
    coupon_tags: {
        display: 'flex',
        padding: '0 4px 0 0',
        flexWrap: 'wrap',
    },
    discountContainter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: '16px',
        '& .discount-text': {

            fontWeight: 800,
        }
    },
    coupon: {
        borderRadius: '4px',
        margin: '8px 12px 0px 0px',
        padding: '3px 12px',
        color: 'rgb(13, 92, 182)',
        border: '1px solid rgb(13, 92, 182)',
        '&::before,&::after': {
            content: '""',
            width: '10px',
            height: '10px',
            background: '#ffffff',
            border: '1px solid',
            borderColor: 'transparent rgb(13, 92, 182) rgb(13, 92, 182) transparent',
            borderImage: 'none 100% / 1 / 0  stretch',
            position: 'absolute',
            borderRadius: '50%',
            marginTop: '5px',
        },
        '&::before': {
            left: '-6px',
            transform: 'rotate(-45deg)',
        },
        '&::after': {
            right: '-6px',
            transform: 'rotate(135deg)',
        }
    }
}))

export default function Promotion() {
    const classes = useStyles();

    return (
        <FeatureSucSection title='2 Mã giảm giá'>
            <Button className={classes.coupon}>
                Giảm 5%
            </Button>
            <Button className={classes.coupon}>
                Giảm 10%
            </Button>
        </FeatureSucSection>
    )
}