import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Services from '../components/Services/ServicesComponent';


const useStyles = makeStyles(theme => ({
  
}));


const Services = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Services />
        </Grid>
    )
}

export default Services;
