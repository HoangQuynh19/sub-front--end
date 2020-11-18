import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {connect} from 'react-redux'
// import CartIcon from '../cart-icon/cart-icon.component';
import {CartIconButton, AccountIconButton, NotiIconButton, MobileMoreIconButton, MenuIconButton} from './icons';
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
        <AppBar position="static">
          <Toolbar>
            <MenuIconButton className={classes.menuButton} />
            <Typography className={classes.title} variant="h6" >
              IMark
            </Typography>
            <div className={classes.search}>
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
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NotiIconButton />
              <CartIconButton />
              <AccountIconButton menuId={menuId}/>
            </div>
            <div className={classes.sectionMobile}>
              <Grow in={isMobileMenuOpen}>
                <div className={isMobileMenuOpen ? classes.sectionMobileShow : classes.sectionMobileHide}>
                  <NotiIconButton />
                  <CartIconButton />
                  <AccountIconButton />
                </div>
              </Grow>
              <MobileMoreIconButton handleMobileMenuOpen={handleMobileMenuOpen}/>
            </div>
          </Toolbar>
        </AppBar>
        {/* {renderMenu} */}
        {hidden ? null : <CartDropdown />}
      </div>
    );

};

const mapStateToProps = ( {cart: { hidden } }) => ({
    
    hidden
  });
  
export default connect(mapStateToProps)(PrimarySearchAppBar);
// export default Searchbar;