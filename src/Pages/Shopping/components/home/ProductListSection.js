import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  withStyles,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Section, { SectionHeader, SectionHeaderSubtile } from "../../../shared/components/Section";
import { SectionStyles } from "../Styles";
import { FavoriteOutlined } from "@material-ui/icons";

const productCardStyle = () => ({
  root: {
    boxShadow: "none",
    borderRadius: '16px',
    '&:hover': {
      boxShadow: '0 6px 15px 0 rgba(0, 0, 0, 0.2)',
    },
    '&:hover card-image': {
      borderRadius: '0px',
    }

  },
  productImage: {
    height: "290px",
    padding: "24px 24px 0 24px",
    position: "relative",
    background: "#e8eaf6",
    borderRadius: '16px',

  },
  contentWrapper: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    paddingBottom: '16px'
  }
  
});

const ProductCard = withStyles(productCardStyle)((props) => {
  const { classes, name, image } = props;
  return (
    <Card className={classes.root} color="secondary">
      {/* <CardActionArea> */}
        <CardMedia className={classNames(classes.productImage, 'card-image')}>
          <LazyLoadImage className={classNames("block", "fitContain", "fullSize")} width="100%" height="100%" alt="Headphones" src={image} effect="blur" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight='bold' component="h2">
            {name}
          </Typography>
          <Rating className={classes.rating} readOnly value={4} size="small"/>
          <div className={classes.contentWrapper}>
            <Typography className={classNames('boldText')} color='primary' variant='h6'> 
              1.200.000
            </Typography>
          </div>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  )
})

const PRODUCT_LIST = {
  "Speaker 01": `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
  "Earphone 02": `${process.env.PUBLIC_URL}/assets/images/products/sp2.png`,
  "Earphone 03": `${process.env.PUBLIC_URL}/assets/images/products/sp2.png`,
  "Speaker 04": `${process.env.PUBLIC_URL}/assets/images/products/sp1.png`,
}

function ProductListSection(props) {
  return (
    <Section classes={SectionStyles()}>
      <SectionHeader xs={12} md={12} title="Featured products" variant="h4" align="center"> 
        <SectionHeaderSubtile variant="h6" align="center" text="After 3 days all of your offers will arrive and you will have another 7 days to select your new company." />
      </SectionHeader>
      <Grid container spacing={2}>
        {
          Object.entries(PRODUCT_LIST).map(i => {
            const [k, v] = i;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                <ProductCard name={k} image={v} />
              </Grid>
            )
          })
        }
        {
          Object.entries(PRODUCT_LIST).map(i => {
            const [k, v] = i;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                <ProductCard name={k} image={v} />
              </Grid>
            )
          })
        }

      </Grid>
    </Section>
  );
}

ProductListSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default ProductListSection