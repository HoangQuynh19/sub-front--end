import React from "react";
import {
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        padding: '8px 12px 0 0',
        flexWrap: 'wrap',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: '16px',
    },
}))

export default function FeatureSubSection(props) {
    let classes = useStyles();
    if(props.classes) classes = classNames(classes, props.classes)
    const {title, children} = props
    return (
        <div className={classNames('top-divider', classes.root)}>
            <div className={classes.wrapper}> 
                {title && <Typography className='boldText' variant='h6'>{title}</Typography>}
                <div className={classes.content}>
                   {children}
                </div>
            </div>
        </div>
    )
}