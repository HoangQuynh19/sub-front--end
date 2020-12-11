import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
} from "@material-ui/core";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Section, { BreackDrirectionGrid, SectionHeader, SectionImage, SectionHeaderSubtile, SectionHeaderCta, SectionHeaderNote } from "../../../shared/components/Section";

const styles = () => ({
  featureImage: {
    maxWidth: "600px",
  },
});

function HeadSection(props) {
  const { classes } = props;
  return (
    <Section>
      <BreackDrirectionGrid>
        <SectionHeader title="Experience your music like never before."
          note={<SectionHeaderNote text="$60 Apple Music gift card with purchase of select Beats products.*" />}>
            <SectionHeaderSubtile text="$299.95" is_price/>
            <SectionHeaderCta text="Buy now"/>
        </SectionHeader>
        <SectionImage classes={classes} /> 
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