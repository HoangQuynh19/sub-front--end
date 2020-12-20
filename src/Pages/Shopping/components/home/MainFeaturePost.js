import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
} from "@material-ui/core";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CrossfadeImage from 'react-crossfade-image';
import Section, { BreackDrirectionGrid, SectionHeader, SectionImage, SectionHeaderSubtile, SectionHeaderCta, SectionHeaderNote } from "../../../shared/components/Section";
import { SectionHeaderCtaStyle, SectionHeaderNoteStyle, sectionHeaderStyles, SectionHeaderSubtileStyle, SectionStyles } from "../Styles";

const styles = () => ({
  featureImage: {
    maxWidth: "600px",
  },
});

function HeadSection(props) {
  const { classes } = props;
  return (
    <Section classes={SectionStyles()}>
      <BreackDrirectionGrid>
        <SectionHeader classes={sectionHeaderStyles()}  title="GS66 STEAL"
           note={<SectionHeaderNote classes={SectionHeaderNoteStyle()} text="$60 Apple Music gift card with purchase of select Beats products." />}>
            {/* <SectionHeaderSubtile classes={SectionHeaderSubtileStyle()} text="37.052.000" is_price/> */}
            <SectionHeaderCta classes={SectionHeaderCtaStyle()} text="Buy now"/>
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