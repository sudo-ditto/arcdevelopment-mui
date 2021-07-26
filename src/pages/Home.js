import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
            marginTop: "3em",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            // marginRight: 0,
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
            margin: "2em 0",
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
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
    serviceContainer: {
        marginTop: "12em",
        boxSizing: "border-box",
        [theme.breakpoints.down("sm")]: {
            padding: "25px",
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        boxSizing: "border-box",
        [theme.breakpoints.down("sm")]: {
            padding: "8em 0",
            borderRadius: 0,
            width: "100%"
        }   
    }

}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" component={"main"} className={classes.mainContainer}>
            <Grid item> {/*----- Hero Block -----*/}
                <Grid container justifyContent="flex-end" alignItems="center" direction="row">
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">
                            Bringing West Coast Technology <br />to the Midwest
                        </Typography>
                        <Grid container justifyContent="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation} >
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                {/*----- Custom Software Block -----*/}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined}>
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
                        <Button variant="outlined" className={classes.learnButton} >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /></Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="Custom Software icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
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
                        <Button variant="outlined" className={classes.learnButton} >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /></Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img className={classes.icon} src={mobileAppsIcon} alt="iOs/Android Development icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
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
                        <Button variant="outlined" className={classes.learnButton} >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /></Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={websitesIcon} alt="Website  icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/*Revolution Card*/}
            <Grid item style={{ height: "100em", marginTop: "12em" }}>
                <Grid container className={classes.revolutionBackground} alignItems="center" justifyContent="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography gutterBottom variant="h3" >
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;
