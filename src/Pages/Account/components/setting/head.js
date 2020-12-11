import React, { } from "react";
import Section, { SectionHeader, SectionHeaderSubtile } from "../../../shared/components/Section";
// import PricingSection from "./PricingSection";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

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
    return (
        <div className={classes.root}>
            <Section >
                <SectionHeader titleClass="white" title="Account Setting">
                    <SectionHeaderSubtile textClass="white" text="Change account information and settings" />
                </SectionHeader>
            </Section>
        </div>
    );
}

Header.propTypes = {
};

export default Header;
