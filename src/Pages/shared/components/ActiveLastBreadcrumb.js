import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb(props) {
    const { path, href } = props
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                path.map((p, i) => i == (path.lenght - 1) ?
                    <Link color="inherit" href={href[i]} onClick={handleClick}>
                        {p}
                    </Link>
                    :
                    <Link
                        color="textPrimary"
                        href={href[i]}
                        aria-current="page"
                    >
                        {p}
                    </Link>

                )
            }
        </Breadcrumbs>
    );
}
