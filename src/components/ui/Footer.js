import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/footerAdornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: "1302",
        position: "relative"
    },
    adornment: {
        width: "23em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]: {
            width: "19em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "13em"
        },
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <img src={footerAdornment} alt="Black decorative slash." className={classes.adornment}/>
        </footer>
    )
}

export default Footer;
