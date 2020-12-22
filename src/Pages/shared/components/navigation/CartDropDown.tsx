import React, { AnchorHTMLAttributes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Popover,
    Typography,
    PopoverProps,
    ListItemProps,
} from '@material-ui/core';
import { LocalShippingOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const StyledPopover = withStyles({
    paper: {
        // border: '1px solid #d3d4d5',
        width: '320px',
    },
})((props: PopoverProps) => (
    <Popover
        // elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const CartItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))((props: ListItemProps<'a', { button?: true }>) => <ListItem button component="a" {...props} />);

const StyledAvatar = withStyles(() => ({
    root: {
        backgroundColor: '#5850EC',
    },
}))(Avatar);

type CartDropDownProps = {
    anchorEl: null | Element | ((element: Element) => Element);
    setAnchorEl: React.Dispatch<React.SetStateAction<null | Element | ((element: Element) => Element)>>;
};
export default function CartDropDown(props: CartDropDownProps): JSX.Element {
    const { anchorEl, setAnchorEl } = props;
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledPopover
            id="customized-Styledmenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <Box style={{ padding: '16px' }}>
                <Typography variant="h5" color="textPrimary">
                    Cart
                </Typography>
            </Box>
            <List disablePadding={true}>
                <CartItem divider>
                    <ListItemAvatar>
                        <StyledAvatar>
                            <LocalShippingOutlined />
                        </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant="subtitle2">Your order is shipping</Typography>}
                        secondary="Jan 9, 2020"
                    />
                </CartItem>
                <CartItem divider>
                    <ListItemAvatar>
                        <StyledAvatar>
                            <LocalShippingOutlined />
                        </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant="subtitle2">Your order is shipping</Typography>}
                        secondary="Jan 9, 2020"
                    />
                </CartItem>
            </List>

            <Box style={{ padding: '8px', justifyContent: 'center', display: 'flex' }}>
                <Button component={Link} to="#" size="small">
                    Mark
                </Button>
            </Box>
        </StyledPopover>
    );
}
