import { Badge, IconButton } from '@material-ui/core';
import { AccountCircle, MoreVert, Notifications, Menu } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCartHidden }) => (
    // <CartContainer onClick={toggleCartHidden}>

    <IconButton aria-label="show 17 new notifications" color="inherit" onClick={toggleCartHidden}>
        <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
  );
  
const mapDispatchToProps = dispatch => ({
toggleCartHidden: () => dispatch(toggleCartHidden())
});
  
export const CartIconButton =  connect(
    null,
    mapDispatchToProps
)(CartIcon);

const AccountIcon = ({ toggleCartHidden, menuId, handleProfileMenuOpen}) => (
    <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        // containerElement={<Link to="/listings" />}
        href="/login"
        >
        <AccountCircle />
    </IconButton>
);

export const AccountIconButton = AccountIcon;

export const NotiIconButton = () => (
    <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
            <Notifications />
        </Badge>
    </IconButton>
)

export const MobileMoreIconButton = ({ mobileMenuId, handleMobileMenuOpen}) => (
    <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
    >
        <Badge badgeContent={17} color="secondary">

        <MoreVert />
        </Badge>
    </IconButton>
)

export const MenuIconButton = ({className}) => (
    <IconButton
        edge="start"
        className={className}
        color="inherit"
        aria-label="open drawer"
    >
        <Menu />
    </IconButton>
)