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

import { Link } from 'react-router-dom';
import CallToAction from '../components/ui/CallToAction';

import animationData from '../animations/landinganimation/data';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import Services from '../components/Services/ServicesComponent';

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
    },
    informationContainer: {
        height: "80em",
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: 0
    }

}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
                                <Button component={Link} to="/estimate" className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/estimate" variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
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

            <Services />
          
            {/*Revolution Block*/}
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
                                    <Button component={Link} to="/revolution" variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/*Information Block*/}
            <Grid item >
                <Grid container direction={matchesXS ? "column" : "row"} alignItems="center" justifyContent={matchesSM ? "center" : undefined} className={classes.informationContainer} spacing={10}>
                    <Grid item style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "inherit" }} sm mb={10}>
                        <Grid container direction="column"
                        >
                            <Typography variant="h2" style={{ color: "white" }}>About us</Typography>
                            <Typography gutterBottom variant="subtitle2">Let's get personal.</Typography>
                            <Grid item >
                                <Button component={Link} to="/about" style={{ color: "white", borderColor: "white" }} variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill="white" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }} sm >
                        <Grid container direction="column">
                            <Typography variant="h2" style={{ color: "white" }}>Contact us</Typography>
                            <Typography gutterBottom variant="subtitle2">Say hello! <span role="img" aria-label="waving-hand">👋🏻 </span> </Typography>
                            <Grid item >
                                <Button component={Link} to="/contact" style={{ color: "white", borderColor: "white" }} variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill="white" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*Call to action*/}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default Home;
