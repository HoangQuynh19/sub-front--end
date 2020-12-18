import { makeStyles, withStyles } from '@material-ui/core/styles';

export const SectionStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "0 auto",
        padding: "48px 16px",
        maxWidth: "1140px",

        [theme.breakpoints.up("sm")]: {
            padding: "24px 16px 48px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "40px",
        },
    },

    featureImage: {
        maxWidth: "600px",
    },
}));

export const sectionHeaderStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "24px",
        [theme.breakpoints.up("md")]: {
            marginBottom: "32px",
        }
    },
    titleWraper: {

    },
    title: {
        fontWeight: "bold",
    },   
}));

export const SectionHeaderNoteStyle = makeStyles(() => ({
    root: {
        display: "inline-block",
        padding: "4px 8px",
        background: "rgb(247, 249, 250)",
        borderRadius: "16px",
    },
}))

export const SectionHeaderCtaStyle = makeStyles(() => ({
    wrapper: {
        marginLeft: "8px",
        "&:first-child": {
            marginLeft: 0,
        }
    },
}))

export const SectionHeaderSubtileStyle = makeStyles((theme) => ({
    root: {
        "$ span": {
        }
    },
    price: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "32px",
        fontWeight: "normal",
        [theme.breakpoints.up("md")]: {
            fontSize: "48px",
        }
    },
}))

const styles = (theme) => ({
    "@global": {
        ".shadow": {
            boxShadow: "0 2px 10px 0 rgba(23, 70, 161, .11)",
        },
        '.flex-start': {
            alignItems: "flex-start",
        }
    }
    
})

function AccountSettingStyle(){
    return null;
}

export default withStyles(styles, {withTheme: true})(AccountSettingStyle);