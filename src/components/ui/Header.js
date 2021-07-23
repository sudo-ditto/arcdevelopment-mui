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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    // Puts a cushion behind our nav bar so that the next content is visible 
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3.5em"
    },
    logo: {
        // Adding extra height in order to put the following content
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
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
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}));

const menuOptions = [
    { name: 'Services', link: '/services', },
    { name: 'Custom Software Development', link: '/customSoftware', },
    { name: 'Mobile App Development', link: '/mobileapps', },
    { name: 'Website Development', link: '/websites', },
]

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
    // Stores whichever component we clicked on to anchor the menu to it
    // Eventually it's going to storee the services tab
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    // Correct page refresh default active link always being home 

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0);
                }
                break;

            case "/services":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case "/customSoftware":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(3);
                }
                break;

            case "/revolution":
                if (value !== 2) {
                    setValue(2);
                }
                break;

            case "/about":
                if (value !== 3) {
                    setValue(3);
                }
                break;

            case "/contact":
                if (value !== 4) {
                    setValue(4);
                }
                break;

            case "/estiamte":
                if (value !== 5) {
                    setValue(5);
                }
                break;
            default:
                break;
        }

        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
                            <img src={logo} alt="Arc Development Company Logo" className={classes.logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} aria-label="Main Navigation" className={classes.tabContainer} indicatorColor="primary">
                            <Tab className={classes.tab} label="Home" component={Link} to="/" />
                            <Tab className={classes.tab} label="Services" component={Link} to="/services" aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={e => handleClick(e)} />
                            <Tab className={classes.tab} label="The Revolution" component={Link} to="revolution" />
                            <Tab className={classes.tab} label="About Us" component={Link} to="about" />
                            <Tab className={classes.tab} label="Contact Us" component={Link} to="contact" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>

                        <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            classes={{ paper: classes.menu }}
                            elevation={0}>

                            {menuOptions.map((option, index) => (
                                <MenuItem key={index} onClick={e => { handleMenuItemClick(e, index); setValue(1); handleClose() }} selected={index === selectedIndex && value === 1} component={Link} to={option.link}
                                    classes={{ root: classes.menuItem }}>{option.name}</MenuItem>

                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    );
}

export default Header;

