import React, { useCallback, useState } from 'react';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import homePageStyle from './Styles';
import NarBar from '../../shared/components/navigation/NavBar';
import Routing from './Routing';

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 240, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

export default function BadgeOverlap() {
    const classes = homePageStyle();

    return (
        <div>
            <NarBar />
            <Routing selectHome={() => console.log('SelectHome')} />
            {/* <div className={classes.fullWH}>
        <section className={classes.section}>
          <Paper>
            <Grid>
              <Grid item xs={12} md={6}>
                <Grid spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h3" color="textPrimary" align="left">Experience your music like never before.</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>

              </Grid>
            </Grid>

          </Paper>
        </section>
      </div> */}
        </div>
    );
}
