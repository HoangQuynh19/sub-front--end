import React from "react";
import {
    makeStyles,
    Typography,
} from "@material-ui/core";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rating from "@material-ui/lab/Rating";
import { Fragment } from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    brand: {
        display: 'flex',
        marginTop: '8px',
    },
    subtitleRating_wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '4px',
    },
    subtitleRating_link: {
        marginLeft: '5px',
    }
}))

export default function FeatureHeader(props) {
    const classes = useStyles();
    const { title, rating, brand, num_rating} = props;
    return (
        <Fragment>
            <div className={classes.brand}>
                <Typography>Thương hiệu: <Link>{brand}</Link></Typography>
            </div>
            <Typography variant='h5'>{title}</Typography>
            <div className={classes.subtitleRating_wrapper}>
                <Rating readOnly value={rating} size="small"/>
                <Link className={classes.subtitleRating_link}><Typography variant='subtitle2'>(xem {num_rating}) đánh giá</Typography></Link>
            </div>
        </Fragment>
    )
}