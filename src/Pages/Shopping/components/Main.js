import React, { useCallback, useState } from 'react';
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import homePageStyle from './Styles';
import  NarBar from './navigation/NavBar';
import Routing from './Routing';

AOS.init({once: true});

export default function BadgeOverlap() {
  const classes = homePageStyle();

  return (
    <div>
      <NarBar />
      <Routing selectHome={() => console.log("SelectHome")}/>
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
