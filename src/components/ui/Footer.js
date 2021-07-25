import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { Link } from 'react-router-dom';
import footerAdornment from '../../assets/footerAdornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: "1302",
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        },
    },
    mainContainer: {
        paddingTop: "3em",
        boxSizing: "border-box",
        position: "absolute"

    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75em",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        marginRight: "10em"
    },
    icon: {
        height: "3.5em",
        wight: "3.5em",
        [theme.breakpoints.down("xs")]: {
            width: "2.5em",
            height: "2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        bottom: "1em",
        right: "2em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
            height:"100%",
            margin: "0px"
        }
    }
}));

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
    const classes = useStyles();


    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justifyContent="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/" className={classes.link} onClick={() => setValue(0)}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/services" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(0) }}>
                                Services
                            </Grid>
                            <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(1) }}>
                                Custom Software Development
                            </Grid>
                            <Grid item component={Link} to="/mobileapps" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(2) }}>
                                Mobile App Development
                            </Grid>
                            <Grid item component={Link} to="/websites" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(3) }}>
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                                Revolution
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                                Vision
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                                Technology
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                                About Us
                            </Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                                History
                            </Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                                Team
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/contact" className={classes.link} onClick={() => setValue(4)}>
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <img src={footerAdornment} alt="Black decorative slash." className={classes.adornment} />
            <Grid container className={classes.socialContainer} spacing={2} justifyContent="flex-end" alignItems="center">
                <Grid item component={"a"} href="whttps://facebook.com" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="Facebook logo." className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt="Twitter logo." className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="Instagram logo." className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    )
}


export default Footer;
