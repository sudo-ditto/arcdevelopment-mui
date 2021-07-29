import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import { Link } from 'react-router-dom';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';

const useStyles = makeStyles(theme => ({
    formHeading: {
        lineHeight: 1
    }

}));
const ContactForm = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Grid item container direction="column" lg={3} justifyContent="center">
            <Grid item>
                <Typography variant="h2" className={classes.formHeading}>Contact Us</Typography>
                <Typography variant="body1" color="primary">We are waiting.</Typography>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item style={{ marginRight: "0.5em", fontSize: "1rem" }}>
                    <img src={phoneIcon} alt="Phone" />
                </Grid>
                <Grid item>
                    <Typography variant="body1" color="primary">(555) 555-5555</Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item style={{ marginRight: "0.5em", fontSize: "1rem" }}>
                    <img src={emailIcon} alt="Envelope" />
                </Grid>
                <Grid item>
                    <Typography variant="body1" color="primary">loretta.arineva@gmail.com</Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item>
                    <TextField label="Name" id="name" value={name} />
                </Grid>
                <Grid item>
                    <TextField label="Email" id="email" value={email} />
                </Grid>
                <Grid item>
                    <TextField label="Phone" id="phone" value={phone} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactForm
