import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data.js';
import scaleAnimation from '../animations/scaleAnimation/data.json';

const useStyles = makeStyles(theme => ({
    content: {
        maxWidth: "43em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    mainContainer: {
        padding: "2em 5em 10em",
    },
    iconsContainer: {
        margin: "10em 0 10em"
    },
}));

const CustomSoftware = ({ setSelectedIndex }) => {
    const classes = useStyles();

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row" justifyContent="space-between">
                <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                    <IconButton component={Link} to="/services">
                        <img src={backArrow} alt="Back to  Service Page" />
                    </IconButton>
                </Grid>

                <Grid item container direction="column" className={classes.content}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom>
                            Custom Software Development
                        </Typography>
                    </Grid>

                    <Grid item container direction="column" >
                        <Typography variant="body1" paragraph>
                            Whether we’re replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don’t need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.arrowContainer} >
                    <IconButton component={Link} to="/mobileapps" onClick={() => setSelectedIndex(2)}>
                        <img src={forwardArrow} alt="Forward to  iOS/Android Development Page" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="center" className={classes.iconsContainer}>
                <Grid item container md={6}>
                    <Grid item container direction="column" md alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Energy</Typography>
                        </Grid>
                        <Grid item>
                            <img src={lightbulb} alt="Lightbulb" />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Time</Typography>
                        </Grid>
                        <Grid item>
                            <img src={stopwatch} alt="Stopwatch" />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Money</Typography>
                        </Grid>
                        <Grid item>
                            <img src={cash} alt="Cash" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="space-between">
                <Grid item container className={classes.content}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Total Document &amp; Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.content}>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{ maxWidth: 280, minHeight: 260 }} />
                    </Grid>
                    <Grid item container direction="column" md align="right">
                        <Grid item>
                            <Typography variant="h4" gutterBottom >
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Whether you’re a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CustomSoftware;
