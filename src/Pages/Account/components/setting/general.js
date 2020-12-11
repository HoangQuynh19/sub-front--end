import React, { } from "react";
import Header from "./head";
// import PricingSection from "./PricingSection";
import classNames from "classnames";
import { Card, Grid, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section";

const useStyles = makeStyles((theme) => ({
    blendSection:{
        blendWrapper: {
            zIndex: 1
        }
    }

    
}))

function GeneralSetting() {
    return (
        <main>
            <div className="fullSize">
                <Header />
                <section>
                    <div>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={3}>
                                <Card>
                                    <List>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6">General</Typography>
                                        </ListItem>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6">Security</Typography>
                                        </ListItem>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6">Notifications</Typography>
                                        </ListItem>
                                        <ListItem component={Link} href="#">
                                            <Typography variant="h6">Billing Infomation</Typography>
                                        </ListItem>
                                    </List>
                                </Card>
                            </Grid>

                        </Grid>
                    </div>

                </section>
            </div>

        </main>
    );
}

GeneralSetting.propTypes = {
};

export default GeneralSetting;
