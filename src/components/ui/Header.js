import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    // Puts a cushion behind our nav bar so that the next content is visible 
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    root: {
        fontWeight: 100,
        fontSize: `1.5rem`
    }
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


const Header = () => {
    const classes = useStyles();

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h2" className={classes.root} >
                            Arc Development
                        </Typography>
                    </Toolbar>

                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    );
}

export default Header;

