import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    Button,
    withWidth,
} from "@material-ui/core";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';



export const SectionHeaderSubtile = (props) => {
    const { classes, text, align, variant, is_price } = props;
    return (
        <Grid className={classes && classes.root} item xs={12}>
            <Typography className={classes && classes.text} variant={variant} color="textSecondary" align={align} >
                {
                    is_price ? <span className={classes && classes.price}>{text}</span> : text
                }                    
            </Typography>
        </Grid>
    )
}

SectionHeaderSubtile.defaultProps = {
    align: "left",
    variant: "h6",
    is_price: false,
    textClass: ""
}

export const SectionHeaderCta = (props) => {
    const { classes, text, color } = props;
    return (
        <Grid item xs={12}>
            <Grid container noWrap alignItems="center">
                <div className={classes && classes.wrapper}>
                    <Button variant="contained" size="large" color={color || "primary"}>{text}</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export const SectionHeaderNote = (props) => {
    const {classes, aos, text} = props;
    return (
        <div data-aos={aos && "fade-up"}>
            <div className={classes.root}>
                <Typography variant="subtitle1" color="textSecondary" align="left" >{text}</Typography>
            </div>
        </div>
    )
}

export const SectionHeader = (props) => {
    const { classes, titleClass, title, subtitle, note, children, xs, md, aos, ...others} = props;
    return (
        <Grid
            item xs={xs} md={md}
            data-aos={aos && "fade-up"}
            container
            // spacing={2}
            className={classes && classes.root}
        >
            {/* <Grid container className={classes && classes.root} spacing={2} data-aos="fade-up"> */}
                <Grid className={classes && classes.titleWraper} item xs={12}>
                    <Typography className={classes && classes.title} {...others}>{title}</Typography>
                    { subtitle }
                </Grid>
                {children}
            {/* </Grid> */}
            {note}
        </Grid>
    )
}

SectionHeader.defaultProps = {
    align: "left",
    variant: "h3",
    color: "textPrimary",
    xs: 12,
    md: 6,
    titleClass: "",
}

SectionHeader.prototype = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    align: PropTypes.string,
    variant: PropTypes.string,
    note: PropTypes.object,
}

export const BreackDrirectionGrid = withWidth()(({ width, children, others }) => {
    return (
        <Grid direction={["sm", "xs"].includes(width) ? "column-reverse" : "row"} container spacing={2} justify="space-between" {...others}>{children}
        </Grid>)
});

export const SectionImage = (props) => {
    const {classes, aos, ...others} = props;
    return (
        <Grid container item {...others} data-aos={aos && "fade-up"}>
            <LazyLoadImage className={classNames("block", "fullSize", classes.featureImage)} alt="Headphones" src={`${process.env.PUBLIC_URL}/assets/images/products/laptop02.png`} effect="blur" />
        </Grid>
    )
}

SectionImage.defaultProps = {
    xs: 12,
    md: 6,
    justify: "center",
}

function Section(props) {
    const { classes, children } = props;
    return (
        <section className={classes && classes.root}>
            <div className={classes && classes.wrapper}>
                {children}
            </div>
        </section >
    );
}

Section.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object,
};

export default Section