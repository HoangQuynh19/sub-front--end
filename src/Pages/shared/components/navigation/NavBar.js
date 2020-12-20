import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import {connect} from 'react-redux'
// import CartIcon from '../cart-icon/cart-icon.component';
import {CartIconButton, AccountIconButton, NotiIconButton, MobileMoreIconButton, MenuIconButton, SearchIconButton} from './IconButtons';
import useStyles from './NavBar.style'
import { Grow } from '@material-ui/core';

function PrimarySearchAppBar({ hidden }) {
    const classes = useStyles();
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  
    const handleMobileMenuOpen = () => {
      console.log('open menu');
      setMobileMenuOpen(prev => !prev);
    };
  
    const menuId = 'primary-search-account-menu';
  
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" color="inherit" elevation={1}>
          <Toolbar variant="regular" className={classes.toolbar}>
            <MenuIconButton className={`${classes.navbarIcon} ${classes.menuButton}`}/>
            <Typography className={classes.title} variant="h4" >
              IMark
            </Typography>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <div className={classes.grow} />
            <SearchIconButton className={classes.navbarIcon}/>
            <NotiIconButton className={classes.navbarIcon}/>
            <CartIconButton className={classes.navbarIcon}/>
            <AccountIconButton menuId={menuId} className={classes.navbarIcon}/>
            {/* <div className={classes.sectionDesktop}>
              
            </div> */}
            {/* <div className={classes.sectionMobile}>
              <Grow in={isMobileMenuOpen}>
                <div className={isMobileMenuOpen ? classes.sectionMobileShow : classes.sectionMobileHide}>
                  <NotiIconButton />
                  <CartIconButton />
                  <AccountIconButton />
                </div>
              </Grow>
              <MobileMoreIconButton handleMobileMenuOpen={handleMobileMenuOpen}/>
            </div> */}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    );

};

const mapStateToProps = ( {cart: { hidden } }) => ({
    
    hidden
  });
  
export default connect(mapStateToProps)(PrimarySearchAppBar);
// export default Searchbar;