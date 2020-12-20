import React from "react";
import PropTypes from "prop-types";
import {
    Divider,
    Button,
    Grid,
    makeStyles,
    Paper,
    Typography,
    withStyles,
} from "@material-ui/core";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CrossfadeImage from 'react-crossfade-image';
import Section, { BreackDrirectionGrid, SectionHeader, SectionImage, SectionHeaderSubtile, SectionHeaderCta, SectionHeaderNote } from "../../../shared/components/Section";
import { SectionHeaderCtaStyle, SectionHeaderNoteStyle, sectionHeaderStyles, SectionHeaderSubtileStyle, SectionStyles } from "../Styles";
import Promotion from "./Promotion";
import { Link } from "react-router-dom";
import NumberPlusMinus from "../../../shared/components/NumberPlusMinus";
import FeatureSucSection from "./FeatureSubSection";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#fafafa',
        padding: '12px 16px',
        margin: '24px 0px',
        borderRadius: '8px',
    },
    currentPrice: {
        marginRight: '8px',
        fontWeight: 800,
    },
    listPrice: {
        marginRight: '10px',
        textDecoration: 'line-through'
    },
    coupon_tags: {
        display: 'flex',
        padding: '0 4px 0 0',
        flexWrap: 'wrap',
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

export default function Price(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Paper className={classes.root} elevation={0}>
                <div>
                    <Typography className={classes.currentPrice} variant='h4' display='inline' color='primary'>
                        59.000 ₫
                    </Typography>
                    <Typography className={classes.listPrice} display='inline'>
                        <s>198.000 ₫</s>
                    </Typography>
                    <Typography display='inline'>
                        -15%
                    </Typography>
                </div>
            </Paper>
            <Promotion />
            <FeatureSucSection>
                <Typography variant='subtitle2'>
                    Bạn hãy <span>NHẬP ĐỊA CHỈ</span> nhận hàng để được dự báo thời gian & chi phí giao hàng một cách chính xác nhất.
                </Typography>
            </FeatureSucSection>
            <FeatureSucSection title='Số lượng'>
                <NumberPlusMinus defaultValue={1} min={1} max={1000}/>
            </FeatureSucSection>
        </Grid>
    )
}