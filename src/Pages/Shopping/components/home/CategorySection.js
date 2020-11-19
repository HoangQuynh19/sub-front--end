import React from "react";
import PropTypes from "prop-types";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Section, { SectionHeader } from "./Section";
import { Card, CardContent, Grid, Typography, withStyles } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import { defaults } from "js-cookie";
import { Category } from "@material-ui/icons";

const styles = (theme) => ({
    wrapper: {

    },
    card: {
        background: "rgb(247, 249, 250)",
        borderRadius: "16px",
    },

    cardContent: {
        "&:last-child": {
            padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        }
    },

    cardImage: {
        width: "60px",
        height: "60px",
        objectFit: "contain",
        marginBottom: "40px",
    }
});

function CategoryCard(props) {
    const {classes, imageSrc} = props;
    return (
        <Card className={classNames("no-shadow", "no-border", "fullSize", "floatHover", classes.card)} elevation={1} raised>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid container item justify="center" xs={12}>
                        <LazyLoadImage className={classNames(classes.cardImage, "block", "fullSize")} effect="opacity" alt="Headphones" src={imageSrc} width="auto" height="auto" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" color="textPrimary">Headphones</Typography>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

function CategorySection(props) {
    const { classes } = props;
    return (
        <Section>
            <SectionHeader title={{ text: "Categories", variant: "h4" }} />
            <Grid container spacing={2}>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
                <Grid item xs={6} md={2} data-aos="fade-up">
                    <CategoryCard classes={classes} imageSrc="https://thefront.maccarianagency.com/images/illustrations/icon-headphone@2x.png"/>
                </Grid>
            </Grid>
        </Section>
    );
}

CategorySection.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object,
};

export default withStyles(styles)(CategorySection);