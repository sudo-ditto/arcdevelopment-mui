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
import roots from '../assets/root.svg';

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';

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
    itemContainer: {
        maxWidth: "50em"
    },
}));

const CustomSoftware = ({ setSelectedIndex }) => {
    const classes = useStyles();
    const matchesSM = useMediaQuery("sm");

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
    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
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
                <Grid item container className={classes.itemContainer} md>
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
                        <Lottie options={documentsOptions} style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{ minWidth: 380, maxWidth: 300, minHeight: 100, maxHeight: 350 }} />
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
                <Grid item container direction="row" style={{ margin: "10em 0" }}>
                    <Grid item container direction="column" align="center" alignItems="center">
                        <Grid item>
                            <img src={roots} alt="Tree with roots extending out" height="450em" width="450em" />
                        </Grid>
                        <Grid item className={classes.itemContainer}>
                            <Typography variant="h4" gutterBottom>Root-Cause Analysis</Typography>
                            <Typography variant="body1" paragraph>
                                Many problems are merely symptoms of larger, underlying issues.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We can help you thoroughly examine all areas of your business to
                                develop a holistic plan for the most effective implementation of
                                technology.
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
                {/*Root-Cause Block*/}
                <Grid item container direction="row" justifyContent="space-between">
                    <Grid item container className={classes.itemContainer} md>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography variant="h4" gutterBottom>
                                    Automation
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    Why waste time when you don’t have to?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    We can help you identify processes with time or event based
                                    actions which can now easily be automated.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    Increasing efficiency increases profits, leaving you more time
                                    to focus on your business, not busywork.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={automationOptions} style={{ maxHeight: 290, maxWidth: 280 }} />
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.itemContainer} md>
                        <Grid item md>
                            <Lottie options={uxOptions} style={{ maxWidth: 155, maxHeight: 310 }} />
                        </Grid>
                        <Grid item container direction="column" md align="right">
                            <Grid item>
                                <Typography variant="h4" gutterBottom >
                                    User Experience Design
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    A good design that isn’t usable isn’t a good design.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    So why are so many pieces of software complicated, confusing,
                                    and frustrating?
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    By prioritizing users and the real ways they interact with
                                    technology we’re able to develop unique, personable experiences
                                    that solve problems rather than create new ones.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CustomSoftware;
