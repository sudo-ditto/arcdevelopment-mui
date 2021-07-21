import React, { useState, useEffect } from 'react';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    // Puts a cushion behind our nav bar so that the next content is visible 
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3.5em"
    },
    logo: {
        // Adding extra height in order to put the following content
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "44px",
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
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Correct page refresh default active link always being home 

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }
    }, [])

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img src={logo} alt="Arc Development Company Logo" className={classes.logo} />
                        <Tabs value={value} onChange={handleChange} aria-label="Main Navigation" className={classes.tabContainer} indicatorColor="primary">
                            <Tab className={classes.tab} label="Home" component={Link} to="/" />
                            <Tab className={classes.tab} label="Services" component={Link} to="/services" />
                            <Tab className={classes.tab} label="The Revolution" component={Link} to="revolution" />
                            <Tab className={classes.tab} label="About Us" component={Link} to="about" />
                            <Tab className={classes.tab} label="Contact Us" component={Link} to="contact" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    );
}

export default Header;

