import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import { useTheme } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
            margin: "2em 0",
        }
    },
    background: {
        height: "60em",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundAttachment: "static",
        width: "100%",
        padding: "0 5em",
        boxSizing: "border-box",
        [theme.breakpoints.down("xs")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
            padding: "0 2em",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        [theme.breakpoints.down("xs")]: {
            height: 60,
            width: 195,
            fontSize: "1.3rem",
        },
    }
}));

const CallToAction = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container className={classes.background} alignItems="center">
            <Grid item style={{ width: "100%" }}>
                <Grid container direction={matchesSM ? "column" : "row"}  alignItems="center" justifyContent={matchesSM ? "center" : "space-between"} spacing={5}>
                    <Grid item style={{ textAlign: "center" }}>
                        <Typography variant="h2">
                            Simple Software. <br />Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5em" }}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container item justifyContent="center">
                            <Button component={Link} to="/revolution" variant="outlined" className={classes.learnButton}><span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>Free Estimate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CallToAction;
