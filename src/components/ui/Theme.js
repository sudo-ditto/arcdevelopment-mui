import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300,
            fontSize: `2rem`
        }
    }
});