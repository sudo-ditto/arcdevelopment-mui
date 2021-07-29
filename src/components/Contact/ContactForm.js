import React, { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import { Link } from 'react-router-dom';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import airplane from '../../assets/send.svg';

const useStyles = makeStyles(theme => ({
    formHeading: {
        lineHeight: 1
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.common.white
        },
        "&.Mui-disabled": {
            backgroundColor: theme.palette.common.grey
        }
    }

}));
const ContactForm = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');

    const onChangeHandler = event => {
        let valid;

        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if (!valid) {
                    setEmailHelper('Invalid Email');

                } else {
                    setEmailHelper('');
                }
                break;
            case 'phone':
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if (!valid) {
                    setPhoneHelper('Invalid Email')

                } else {
                    setPhoneHelper('');
                }
                break;

            default:
                break;
        }
    }

    return (
        <Grid item container direction="column" md={5} lg={4} xl={3} justifyContent="center" alignItems="center" style={{ margin: matchesXS ? "1.5em 0" : matchesSM ? "5em 0" : 0 }}>
            <Grid item container style={{ maxWidth: "20em" }}>
                <Grid item>
                    <Typography variant="h2" className={classes.formHeading}>Contact Us</Typography>
                    <Typography variant="body1" color="primary">We are waiting.</Typography>
                </Grid>
                <Grid item container style={{ margin: "2em 0" }}>
                    <Grid item container>
                        <Grid item style={{ marginRight: "0.5em", fontSize: "1rem" }}>
                            <img src={phoneIcon} alt="Phone" />
                        </Grid>
                        <Grid item>
                            <a href="tel:+555555555" style={{textDecoration: "none", color: "inherit"}}>
                                <Typography variant="body1" color="primary">(555) 555-5555</Typography>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                        <Grid item style={{ marginRight: "0.5em", fontSize: "1rem" }}>
                            <img src={emailIcon} alt="Envelope" />
                        </Grid>
                        <Grid item>
                            <a href="mailto:loretta.arineva@gmail.com"  style={{textDecoration: "none", color: "inherit"}}>

                                <Typography variant="body1" color="primary">loretta.arineva@gmail.com</Typography>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: "20em" }}>
                <Grid item>
                    <TextField fullWidth label="Name" required id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item style={{ margin: "2em 0" }}>
                    <TextField required helperText={emailHelper} fullWidth label="Email" id="email" value={email}
                        error={emailHelper.length !== 0}
                        onChange={onChangeHandler} />
                </Grid>
                <Grid item>
                    <TextField required helperText={phoneHelper} fullWidth label="Phone" id="phone" value={phone}
                        error={phoneHelper.length !== 0} onChange={onChangeHandler} />
                </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em", marginBottom: "3em" }}>
                <TextField required fullWidth multiline rows={10} className={classes.message} InputProps={{ disableUnderline: true }} placeholder="Send a message..." id="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
            </Grid>
            <Grid item alignItems="center">
                <Button disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0} variant="container" className={classes.sendButton}>Send Message
                    <img src={airplane} style={{ marginLeft: "1em", marginTop: "0.3em" }} alt="Paper airplane" />
                </Button>
            </Grid>
        </Grid>
    )
}

export default ContactForm
