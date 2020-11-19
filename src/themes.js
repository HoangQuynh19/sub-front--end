import { createMuiTheme } from '@material-ui/core/styles';


export const defaultTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#5850ec"
        },
        text: {
            primary: "#263238",
        }
    },
    typography: {
        h5:{
            // fontFamily: '"Roboto", "Helvetica",  sans-serif, "Arial"',
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "-0.05px"
        }
    },
})
defaultTheme.shadows[8] = "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)"