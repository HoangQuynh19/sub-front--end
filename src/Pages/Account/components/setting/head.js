import React, { } from "react";
import Section, { SectionHeader, SectionHeaderSubtile } from "../../../shared/components/Section";
// import PricingSection from "./PricingSection";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { sectionHeaderStyles, SectionHeaderSubtileStyle, SectionStyles } from "../Styles";

const style = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        background: "rgb(17, 82, 147)",
    }
}))

function Header() {
    const classes = style();
    
    const headerStyle = sectionHeaderStyles();
    headerStyle.title = classNames(headerStyle.title, 'white');
    const headsubtileStyle = SectionHeaderSubtileStyle();
    headsubtileStyle.text = classNames(headsubtileStyle.text, 'white')

    return (
        <div className={classes.root}>
            <Section classes={SectionStyles()}>
                <SectionHeader classes={headerStyle} title="Account Setting">
                    <SectionHeaderSubtile classes={headsubtileStyle} text="Change account information and settings" />
                </SectionHeader>
            </Section>
        </div>
    );
}

Header.propTypes = {
};

export default Header;
