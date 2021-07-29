import React, { useState, useEffect } from 'react';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
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

// Safari

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
        textTransform: "none",
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
        marginLeft: "15px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "44px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
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
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appBar: {
        // places appbar above drawer
        zIndex: theme.zIndex.modal + 1
    }
}));

const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    { name: 'Custom Software Development', link: '/customSoftware', activeIndex: 1, selectedIndex: 1 },
    { name: 'iOS/Android App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
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


const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
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
    const [openMenu, setOpenMenu] = useState(false);


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
                case '/estimate':
                    // eslint-disable-next-line
                    setValue(5);
                    break;

                default:
                    break;
            }
        });
        // eslint-disable-next-line
    }, [value, selectedIndex, routes]);

    const tabs = (
        <>
            <Tabs value={value}
                onChange={handleChange}
                aria-label="Main Navigation"
                className={classes.tabContainer} indicatorColor="primary">

                {routes.map((route, index) => renderTabs(route.name, route.link, index))}
            </Tabs>

            <Button component={Link} to="/estimate" variant="contained" color="secondary" className={classes.button} onClick={() => 
                setValue(5)}>Free Estimate</Button>

            <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0} keepMounted style={{ zIndex: 1302 }}>

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
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem key={index} divider button component={Link} to={route.link} selected={value === route.activeIndex} onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }} classes={{ selected: classes.drawerItemSelected }}
                        >
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>

                    ))}

                    <ListItem divider button component={Link} to="/estimate" selected={value === 5} onClick={() => { setOpenDrawer(false); setValue(5) }} classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}>
                        <ListItemText className={[classes.drawerItem, classes.drawerTextEstimate].join(' ')} disableTypography>Free Estimate</ListItemText>
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
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}style={{textDecoration: "none"}}>

                        <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139">
                            <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                            <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z"/><path className="st0" d="M-1 139h479.92v.01H-1z"/>
                            <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"/><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9"/><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z"/><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"/></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"/></svg>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}

export default Header;

