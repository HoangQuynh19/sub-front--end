import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
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
import Price from "./Price";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import FeatureHeader from './ProductMainFeature/FeatureHeader';
import ShopInfo from "./ShopInfo";
const styles = () => ({
  featureImage: {
    maxWidth: "600px",
  },
});

const PRODUCT_DETAIL = {
  name: "Laptop MSI Gaming GS66 Stealth 10SE (407VN)",
  rating: 4,
  num_rating: 46,
  price: "37.052.000",
  gift: "$60 Apple Music gift card with purchase of select Beats products.",
  description: '(i7 10750H 16GB RAM/512GB SSD/RTX2060 6G/15.6 inch FHD 240Hz/Win 10)',
}


const useStyles = makeStyles(theme => ({
  sectionRoot: {
    background: '#ffffff',
    padding: '0px 16px'
  },
  subtitleRating_wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
  },
  subtitleRating_link: {
    textDecoration: 'none',
    marginLeft: '5px',
  }
}))



function ProductMainFeature(props) {
  const classes = useStyles();

  return (
    <Section classes={{ root: classes.sectionRoot }}>
      <BreackDrirectionGrid>
        <SectionImage xs={12} md={5} classes={classes} />
        <Grid
          item xs={12} md={7}
          container
          spacing={1}
          className={classes && classes.root}
        >
          <Grid className={classes && classes.titleWraper} item xs={12}>
            <FeatureHeader title={PRODUCT_DETAIL.name} rating={PRODUCT_DETAIL.rating} num_rating={PRODUCT_DETAIL.num_rating} brand='MSI' />
          </Grid>
          <Grid container item xs={12} md={7}>
            <Price />
          </Grid>
          <Grid container item xs={12} md={5}>
            <ShopInfo />
          </Grid>
        </Grid>
        {/* <SectionHeader xs={12} md={7} classes={sectionHeaderStyles()} variant='h5' title={PRODUCT_DETAIL.name}
          subtitle={subtitle}
          note={<SectionHeaderNote classes={SectionHeaderNoteStyle()} 
          text= {PRODUCT_DETAIL.gift}/>}>
        </SectionHeader> */}

      </BreackDrirectionGrid>
    </Section>
  );
}

ProductMainFeature.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withStyles(styles)(ProductMainFeature)