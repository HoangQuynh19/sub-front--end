import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
// import CartIcon from '../cart-icon/cart-icon.component';
import { CartIconButton, AccountIconButton, NotiIconButton, MenuIconButton, SearchIconButton } from './IconButtons';
import useStyles from './NavBar.style';

function PrimaryHeaderBar() {
    const classes = useStyles();
    const menuId = 'primary-search-account-menu';
    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color="inherit" elevation={1}>
                <Toolbar variant="regular" className={classes.toolbar}>
                    <MenuIconButton className={`${classes.navbarIcon} ${classes.menuButton}`} />
                    <Typography className={classes.title} variant="h4">
                        IMark
                    </Typography>
                    <div className={classes.grow} />
                    <SearchIconButton />
                    <NotiIconButton />
                    <CartIconButton />
                    <AccountIconButton menuId={menuId} />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default PrimaryHeaderBar;
// export default Searchbar;
