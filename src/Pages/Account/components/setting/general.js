import React, { } from "react";
import Header from "./head";
// import PricingSection from "./PricingSection";
import classNames from "classnames";
import { Card, CardContent, Grid, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section";
import AccountSettingStyle from '../Styles';
const useStyles = makeStyles((theme) => ({
    root: {
    },
    wrapper: {
        width: "100%",
        margin: "0 auto",
        padding: "48px 16px",
        maxWidth: "1140px",

        [theme.breakpoints.up("sm")]: {
            padding: "24px 16px 48px",
        },

        zIndex: 1,
        position: "relative",
        marginTop: "-40px",
        paddingTop: "0",
    },

    ccontent: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px 0px"
    },

    currentLink: {
        borderLeft: "2px solid rgb(17, 82, 147)",
        "& h6":{
            color: "rgba(0, 0, 0, 0.87)"
        }
    }
}))

function GeneralSetting() {
    const sectionStyle = useStyles();
    return (
        <main>
            <AccountSettingStyle />
            <div className="fullSize">
                <Header />
                <Section classes={{
                    root: classNames("section-alternate jss31"),
                    wrapper: sectionStyle.wrapper
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Card className={classNames("auto-height", 'shadow', 'fullSize')}>
                                <CardContent className={classNames("flex-start", sectionStyle.ccontent)}>
                                    <List>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6" color="textSecondary">General</Typography>
                                        </ListItem>
                                        <ListItem className={sectionStyle.currentLink} component={Link} href="#">
                                            <Typography variant="h6" color="textSecondary">Security</Typography>
                                        </ListItem>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6" color="textSecondary">Notifications</Typography>
                                        </ListItem>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6" color="textSecondary">Billing Infomation</Typography>
                                        </ListItem>
                                    </List>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                </Section>
            </div>
        </main>
    );
}

GeneralSetting.propTypes = {
};

export default GeneralSetting;
