import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    Card,
    Button,
    Hidden,
    Box,
    withStyles,
    withWidth,
    isWidthUp,
    Paper,
    makeStyles,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Block } from "@material-ui/icons";

const styles = (theme) => ({
    section: {
        width: "100%",
        margin: "0 auto",
        padding: "48px 16px",
        maxWidth: "1140px",

        [theme.breakpoints.up("sm")]: {
            padding: "24px 16px 96px",
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
    sectionHeader_titleWraper: {

    },
    sectionHeader_title: {
        fontWeight: "bold",
    },

    sectionHeader_subtitle: {
        "$ span": {

        }
    },

    sectionHeader_ctaWrapper: {

    },
    sectionHeader_ctaContainer: {

    },
    price: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "32px",
        fontWeight: "normal",
        [theme.breakpoints.up("md")]: {
            fontSize: "48px",
        }
    },

    buyNowButtonWrapper: {
        marginLeft: "8px",
        "&:first-child": {
            marginLeft: 0,
        }
    },

    giftWrapper: {
        display: "inline-block",
        padding: "4px 8px",
        background: "rgb(247, 249, 250)",
        borderRadius: "16px",
    },
})

export const SectionHeader = withStyles(sectionHeaderStyles)((props) => {
    const { classes, title, subtitle, cta, note } = props;
    const titleProps = {
        variant: title.variant || "h3",
        color: title.color || "textPrimary",
        align: title.align || "left",
    }

    const subtitleProps = {
        align: subtitle.align || "left",
    }
    return (
        <Grid
            item xs={12} md={6}
            data-aos="fade-up"
        >
            <Grid container className={classes.sectionHeader} spacing={2} data-aos="fade-up">
                <Grid className={classes.sectionHeader_titleWraper} item xs={12}>
                    <Typography className={classes.sectionHeader_title} {...titleProps}>{title.text}</Typography>
                </Grid>
                {
                    subtitle &&
                    <Grid className={classes.sectionHeader_subtitleWraper} item xs={12}>
                        <Typography className={classes.sectionHeader_subtitle} variant={subtitleVariant} color="textSecondary" align={subtitleAlign} >
                            <span className={classes.price}>{subtitle.text}</span>
                        </Typography>
                    </Grid>
                }
                {
                    cta &&
                    <Grid item xs={12}>
                        <Grid container noWrap alignItems="center">
                            <div className={classes.buyNowButtonWrapper}>
                                <Button variant="contained" size="large" color={cta.color || "primary"}>{cta.text}</Button>
                            </div>
                        </Grid>
                    </Grid>
                }

            </Grid>
            {
                note &&
                <div className={classes.giftWrapper} data-aos="fade-up">
                    <Typography variant="subtitle1" color="textSecondary" align="left" >{note.text}</Typography>
                </div>
            }
        </Grid>
    )
})

SectionHeader.defaultProps = {
    titleAlign: "left",
    titleVariant: "h3",

    subtitleAlign: "left",
    subtitleVariant: "h6",
}

SectionHeader.prototype = {
    classes: PropTypes.object.isRequired,
    
    title: PropTypes.string.isRequired,
    titleAlign: PropTypes.string,
    titleVariant: PropTypes.string,

    subtitle: PropTypes.object,
    subtitleAlign: PropTypes.string,
    subtitleVariant: PropTypes.string,

    cta: PropTypes.object,
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
