import React from 'react';
import CallToAction from '../components/ui/CallToAction';

import ContactForm from '../components/Contact/ContactForm';
import { Grid } from '@material-ui/core';

const Contact = () => {
    return (
        <Grid container direction="row">
            <ContactForm />
            <Grid item lg={9}>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default Contact
