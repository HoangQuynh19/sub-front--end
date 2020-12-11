import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    Button,
    withStyles,
    withWidth,
} from "@material-ui/core";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';


const styles = (theme) => ({
    section: {
        width: "100%",
        margin: "0 auto",
        padding: "48px 16px",
        maxWidth: "1140px",

        [theme.breakpoints.up("sm")]: {
            padding: "24px 16px 48px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "40px",
        },
    },


    featureImage: {
        maxWidth: "600px",
    },
});

const sectionHeaderStyles = (theme) => ({
    sectionHeader: {
        marginBottom: "24px",
        [theme.breakpoints.up("md")]: {
            marginBottom: "32px",
        }
    },
    titleWraper: {

    },
    title: {
        fontWeight: "bold",
    },   
})

const SectionHeaderSubtileStyle = (theme) => ({
    sectionHeader_subtitle: {
        "$ span": {
        }
    },
    price: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "32px",
        fontWeight: "normal",
        [theme.breakpoints.up("md")]: {
            fontSize: "48px",
        }
    },
})
export const SectionHeaderSubtile = withStyles(SectionHeaderSubtileStyle)((props) => {
    const { classes, textClass, text, align, variant, is_price } = props;
    return (
        <Grid className={classes.wrapper} item xs={12}>
            <Typography className={classNames(classes.text, textClass)} variant={variant} color="textSecondary" align={align} >
                {
                    is_price ? <span className={classes.price}>{text}</span> : text
                }                    
            </Typography>
        </Grid>
    )
})

SectionHeaderSubtile.defaultProps = {
    align: "left",
    variant: "h6",
    is_price: false,
    textClass: ""
}

const SectionHeaderCtaStyle = () => ({
    buyNowButtonWrapper: {
        marginLeft: "8px",
        "&:first-child": {
            marginLeft: 0,
        }
    },
})
export const SectionHeaderCta = withStyles(SectionHeaderCtaStyle)((props) => {
    const { classes, text, color } = props;
    return (
        <Grid item xs={12}>
            <Grid container noWrap alignItems="center">
                <div className={classes.buyNowButtonWrapper}>
                    <Button variant="contained" size="large" color={color || "primary"}>{text}</Button>
                </div>
            </Grid>
        </Grid>
    )
})

export const SectionHeaderNoteStyle = () => ({
    giftWrapper: {
        display: "inline-block",
        padding: "4px 8px",
        background: "rgb(247, 249, 250)",
        borderRadius: "16px",
    },
})
export const SectionHeaderNote = withStyles(SectionHeaderNoteStyle)((props) => {
    const {classes, text} = props;
    return (
        <div className={classes.giftWrapper} data-aos="fade-up">
            <Typography variant="subtitle1" color="textSecondary" align="left" >{text}</Typography>
        </div>
    )
})

export const SectionHeader = withStyles(sectionHeaderStyles)((props) => {
    const { classes, titleClass, title, note, children, xs, md, ...others} = props;
    return (
        <Grid
            item xs={xs} md={md}
            data-aos="fade-up"
        >
            <Grid container className={classes.sectionHeader} spacing={2} data-aos="fade-up">
                <Grid className={classes.titleWraper} item xs={12}>
                    <Typography className={classNames(classes.title, titleClass)} {...others}>{title}</Typography>
                </Grid>
                {children}
            </Grid>
            {note}
        </Grid>
    )
})

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

export const SectionImage = (classes) => {
    return (
        <Grid container item xs={12} md={6} justify="center" data-aos="fade-up">
            <LazyLoadImage className={classNames("block", "fullSize", classes.featureImage)} alt="Headphones" src={`${process.env.PUBLIC_URL}/images/hero-cover@2x.png`} effect="blur" />
        </Grid>
    )
}

function Section(props) {
    const { classes, children } = props;
    return (
        <section className={classes.section}>
            <div className={classes.wrapper}>
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

export default withWidth()(
    withStyles(styles, { withTheme: true })(Section)
);
