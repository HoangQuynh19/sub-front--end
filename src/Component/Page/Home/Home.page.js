import React, { useCallback, useState } from 'react';
import AOS from "aos/dist/aos";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import homePageStyle from './Home.style';
import CookieConsent from "./components/cookies/CookieConsent";
import HeadSection from './components/home/HeadSection'

AOS.init({one: true});

export default function BadgeOverlap() {
  const classes = homePageStyle();
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);
  
  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  return (
    <main>
      {!isCookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
        />
      )}
      <Toolbar />
      <div className={classes.fullWH}>
        {/* <section className={classes.section}>
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
        </section> */}
      <HeadSection />

      </div>
    </main>
  );
}
