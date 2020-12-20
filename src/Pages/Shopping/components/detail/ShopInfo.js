import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {
    Divider,
    ListItem,
    ListItemAvatar, 
    Typography,
    Avatar,
    Grid
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BenifitItem from './BenifitItem';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        borderRadius: '4px',
        border: '1px solid rgb(242, 242, 242)',
        // boxShadow: 'rgb(242, 242, 242) 1px 1px 0px 0px inset, rgb(242, 242, 242) -1px -1px 0px 0px inset',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function ShopInfo() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Cam kết chính hiệu bởi
        </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary="Shop 01"
                    secondary={
                        <React.Fragment>
                            {" Chúng tôi cam kết hàng chĩnh hãng "}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" />
            <ListSubheader>Thời gian bảo hành</ListSubheader>
            <ListItem>
                <Typography variant='subtitle2'>
                    Bảo hành 3 tháng - 1 đổi 1 trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất
                </Typography>
            </ListItem>
            <Divider component="li" />
                        <BenifitItem />
        </List>
    );
}
