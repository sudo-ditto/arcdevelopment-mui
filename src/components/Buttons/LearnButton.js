import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonArrow from '../ui/ButtonArrow';

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
}));

const LearnButton = ({ link }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Button component={Link} to={`/${link}`} variant="outlined" className={classes.learnButton} >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
        </Button>
    )
}

export default LearnButton
