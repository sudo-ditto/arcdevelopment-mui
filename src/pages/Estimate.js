import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import check from '../assets/check.svg';
import send from '../assets/send.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import people from '../assets/people.svg';
import info from '../assets/info.svg';
import bell from '../assets/bell.svg';
import users from '../assets/users.svg';
import iphone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';
import website from '../assets/website.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';

const useStyles = makeStyles(theme => ({
    icon: {
        width: "12em",
        height: "10em"
    }
}));


const Estimate = () => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg>
                <Grid item>
                    <Typography variant="h2">Estimate</Typography>
                </Grid>
                <Grid item>
                    <Lottie options={defaultOptions} height="100%" width="100%"></Lottie>
                </Grid>
            </Grid>
            <Grid item container direction="column" lg>

                <Grid item>
                    <Typography variant="h2" align="center" style={{ fontWeight: 300 }} gutterBottom>Which service are you interested in?</Typography>
                </Grid>
                <Grid item container>
                    <Grid item container direction="column" md >
                        <Grid item style={{ maxWidth: "12em" }}>
                            <Typography variant="h6" align="center">Custom Software Development</Typography>
                        </Grid>
                        <Grid item>
                            <img src={software} alt="Three floating screens" className={classes.icon}/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item style={{ maxWidth: "12em" }}>
                            <Typography variant="h6" align="center">CiOS/Android App Development</Typography>
                        </Grid>
                        <Grid item>
                            <img src={mobile} alt="Pones and tablet outline" className={classes.icon}/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item style={{ maxWidth: "12em" }} >
                            <Typography variant="h6" align="center">Website Development</Typography>
                        </Grid>
                        <Grid item>
                            <img src={website} alt="Computer outline" className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Estimate;
