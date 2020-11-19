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
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Block } from "@material-ui/icons";
import { defaults } from "js-cookie";
import Section, { BreackDrirectionGrid, SectionHeader, SectionImage } from "./Section";

const styles = (theme) => ({
  featureImage: {
      maxWidth: "600px",
  },
});

function ProductListSection(props) {
  const { classes, theme, width } = props;
  return (
    <Section>
        <SectionHeader title={{text: "Featured products", variant: "h4", align: "center"}} subtitle={{text: "After 3 days all of your offers will arrive and you will have another 7 days to select your new company."}}/>
    </Section>
  );
}

ProductListSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withStyles(styles)(ProductListSection)