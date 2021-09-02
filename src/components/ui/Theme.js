import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#A6A6A6";

export default createTheme({
    palette: {
        common: {
            blue: arcBlue,
            grey: arcGrey,
            orange: arcOrange
        },
        primary: {
            main: arcBlue,
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico, sans-serif",
            fontSize: "1rem",
            color: "white",
            textTransform: "none"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: "1.5"
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue,
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: arcBlue
        },
        h6: {
            fontFamily: "Raleway",
            fontWeight: 500,
            color: arcBlue,
            lineHeight: 1
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: `${arcGrey}`
        },
        subtitle2: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: "white"
        },
        body1: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: arcGrey
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem"
            }
        },
        MuiInput: {
            root: {
                fontWeight: 300,
                color: arcGrey
            },
            underline: {
                "&::before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        },
        MuiDialog: {
            root: {
                zIndex: "1305 !important",

            },
        },
    }
});