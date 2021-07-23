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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// Drawer
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { indexedAccessType } from '@babel/types';

const useStyles = makeStyles(theme => ({
    // Puts a cushion behind our nav bar so that the next content is visible 
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3.5em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        // Adding extra height in order to put the following content
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
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
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        color: "white"
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            "& $drawerTextEstimate": {
                color: "white"
            }
        },
        transition: "all 0.4s"
    },
    drawerTextEstimate: {
        // color: "black",
    },
    drawerItemSelected: {
        opacity: 1
    }
}));

const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    { name: 'Custom Software Development', link: '/customSoftware', activeIndex: 1, selectedIndex: 1 },
    { name: 'Mobile App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
    { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 },
];

const routes = [{ name: "Home", link: "/", activeIndex: 0 }, { name: "Services", link: "/services", activeIndex: 1 }, { name: "The Revolution", link: "/revolution", activeIndex: 2 }, { name: "About Us", link: "/about", activeIndex: 3 }, { name: "Contact Us", link: "/contact", activeIndex: 4 }];

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
    const theme = useTheme();
    // Medium and below vp returns true
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    // Check if viewed on iOS
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    // Stores whichever component we clicked on to anchor the menu to it
    // Eventually it's going to storee the services tab
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const renderTabs = (name, link, index) => {
        if (name === "Services") {
            return (
                <Tab key={index} className={classes.tab} label={name} component={Link} to={link} aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={e => handleClick(e)} />
            );
        } else {
            return (
                <Tab key={index} className={classes.tab} label={name} component={Link} to={link} />
            );
        }
    }

    // Correct page refresh default active link always being home 

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }, [value, selectedIndex])

    const tabs = (
        <>
            <Tabs value={value}
                onChange={handleChange}
                aria-label="Main Navigation"
                className={classes.tabContainer} indicatorColor="primary">

                {routes.map((route, index) => renderTabs(route.name, route.link, index))}
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>

            <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}>

                {menuOptions.map((option, index) => (
                    <MenuItem key={index} onClick={e => { handleMenuItemClick(e, index); setValue(1); }} selected={index === selectedIndex && value === 1} component={Link} to={option.link}
                        classes={{ root: classes.menuItem }}>{option.name}</MenuItem>

                ))}
            </Menu>
        </>
    );


    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem key={index} divider button component={Link} to={route.link} selected={value === indexedAccessType} onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }
                        }>
                            <ListItemText className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>

                    ))}

                    <ListItem divider button component={Link} to="/estimate" selected={value === 5} onClick={() => { setOpenDrawer(false); setValue(5) }} className={classes.drawerItemEstimate}>
                        <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected, classes.drawerTextEstimate] : [classes.drawerItem, classes.drawerTextEstimate]} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
                            <img src={logo} alt="Arc Development Company Logo" className={classes.logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    );
}

export default Header;

