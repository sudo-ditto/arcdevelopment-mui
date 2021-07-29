import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import customSoftwareIcon from '../../assets/customSoftwareIcon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';
import LearnButton from '../Buttons/LearnButton';

const useStyles = makeStyles(theme => ({
    serviceContainer: {
        marginTop: "12em",
        boxSizing: "border-box",
        [theme.breakpoints.down("sm")]: {
            padding: "25px",
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "0.8em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "2.5em",
            marginLeft: "0",
            width: "15em"
        }
    },
}));

const Services = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container item direction="column">
            <Grid item  order={{ md: 2, lg: 2 }}>
                {/*----- Custom Software Block -----*/}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined} >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4" gutterBottom>
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1" >
                            Complete digital solutions, from investigation to{" "}
                            <span className={classes.specialText} >celebration</span>.
                        </Typography>
                        <LearnButton link="customSoftware" />
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="Custom Software icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item order={{ md: 1, lg: 1 }}>
                {/*----- iOS/Andoid Software Block -----*/}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4" gutterBottom>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1" >
                            Integrate your web experience or create a standalone{matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <LearnButton link="mobileapps" />
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img className={classes.icon} src={mobileAppsIcon} alt="iOs/Android Development icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item order={3}>
            {/*----- Websites Block -----*/}
            <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined}>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                    <Typography variant="h4" gutterBottom>
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant="subtitle1" >
                        Optimized for Search Engines, built for speed.
                    </Typography>
                    <LearnButton link="websites" />
                </Grid>
                <Grid item>
                    <img className={classes.icon} src={websitesIcon} alt="Website  icon" />
                </Grid>
            </Grid>
        </Grid>
        </Grid >
    );
}

export default Services;
