import React from 'react';
import CallToAction from '../components/ui/CallToAction';

import ContactForm from '../components/Contact/ContactForm';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

const Contact = () => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


    return (
        <Grid container direction={matchesSM ? "column" : "row"}>
            <ContactForm />
          

            <Grid item md={7} lg={8} xl={9}>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default Contact
