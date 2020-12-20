import { Avatar, Badge, IconButton, makeStyles, Tooltip, useTheme, withStyles } from '@material-ui/core';
import { AccountCircle, MoreVert, Notifications, Menu, NotificationsOutlined, ShopOutlined, ShoppingCartOutlined, SearchOutlined } from '@material-ui/icons';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { CustomNotificationIcon, CustomSearchIcon } from '../../../shared/components/CustomIcons';
import CartDropDown from './CartDropDown';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 0,
        //   letterSpacing: "0.039rem",
        fontSize: "0.75rem",
        //   border: `1px solid ${theme.palette.background.appbar}`,
        padding: '0 0px',
    },
}))(Badge);

const CartIcon = ({ className, oggleCartHidden }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Fragment>
            {/* <CartContainer onClick={toggleCartHidden}> */}
            <Tooltip title="Cart">
                <IconButton className={className} aria-label="show 17 new notifications" color="inherit" onClick={handleClick}>
                    <StyledBadge badgeContent="2" overlap="circle" color="secondary" invisible={false}>
                        <ShoppingCartOutlined />
                    </StyledBadge>
                </IconButton>
            </Tooltip>
            <CartDropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
        </Fragment>

    )
}

const mapDispatchToProps = dispatch => ({
    // toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIconButton = connect(
    null,
    mapDispatchToProps
)(CartIcon);

const AccountIcon = ({ className, menuId, handleProfileMenuOpen }) => {
    const theme = useTheme();
    // const theme = useTheme();
    return (
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            // containerElement={<Link to="/listings" />}
            href="/login"
            className={className}
        >
            <Avatar src="/static/images/avatar/1.jpg" style={{ width: theme.spacing(4), height: theme.spacing(4) }} />
        </IconButton>

    );

}

export const AccountIconButton = AccountIcon;

export const NotiIconButton = ({ className }) => (
    <Tooltip title="Notification">
        <IconButton className={className} aria-label="show 17 new notifications" color="inherit" disableRipple={true} >
            <Badge badgeContent={0} color="secondary">
                {/* <NotificationsOutlined className={className}/> */}
                {CustomNotificationIcon}
            </Badge>
        </IconButton>
    </Tooltip>
)

export const SearchIconButton = ({ className }) => {
    return (
        <Tooltip title="Search">
            <IconButton className={className} aria-label="show 17 new notifications" color="inherit" disableRipple={true}
                sizes="small"
            >
                <CustomSearchIcon style={{ fontSize: 22 }} />
            </IconButton>
        </Tooltip>
    )
}

export const MobileMoreIconButton = ({ mobileMenuId, handleMobileMenuOpen }) => (
    <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
    >
        <Badge badgeContent={17} color="primary">
            <MoreVert />
        </Badge>
    </IconButton>
)

export const MenuIconButton = ({ className }) => {
    const theme = useTheme();

    return (
        <IconButton
            edge="start"
            className={className}
            aria-label="open drawer"
        >
            <Menu />
        </IconButton>
    )
}