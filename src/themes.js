import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breackpoints = createBreakpoints({});

export const defaultTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#5850ec"
        },
        text: {
            primary: "#263238",
        },
        background:{
            default: "#ffffff"
        }
    },
    typography: {
        fontFamily: "Lato",

        h3: {
            fontFamily: "Lato",
            fontSize: "2rem",
            [breackpoints.up('sm')]: {
                fontSize: "2.5707rem",
            },
            [breackpoints.up('md')]: {
                fontSize: "2.7849rem",
            },
            [breackpoints.up("lg")]: {
                fontSize: "2.9991rem",
            }
        },
        h4: {
            fontSize: "1.5625rem",
        },
        h5:{
            // fontFamily: '"Roboto", "Helvetica",  sans-serif, "Arial"',
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "-0.05px"
        },
        h6: {
            fontSize: "1.125rem",
        }
    },
})
defaultTheme.shadows[8] = "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)"