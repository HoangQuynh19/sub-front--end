import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 30%',
    },
}))

function BenifitItem() {
    const classes = useStyles();
    return (
        <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText>Hoàn tiền nếu hàng giả</ListItemText>
            </ListItem>
    )
}

export default BenifitItem
