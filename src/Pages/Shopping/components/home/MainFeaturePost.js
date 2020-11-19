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

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Section>
      <BreackDrirectionGrid>
      <SectionHeader title={{text: "Experience your music like never before.", variant: "h3"}} subtitle={{text: "$299.95"}} cta={{text: "Buy now"}} note={{text: "$60 Apple Music gift card with purchase of select Beats products.*"}}/>
        <SectionImage classes={classes}/>
      </BreackDrirectionGrid>

    </Section>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withStyles(styles)(HeadSection)