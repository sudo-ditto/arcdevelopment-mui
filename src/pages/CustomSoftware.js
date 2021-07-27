import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme({

}));

const CustomSoftware = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item>
                    <img src="" alt="" />
                </Grid>
                <Grid item>
                    <img src="" alt="" />
                </Grid>
                <Grid item>
                    <img src="" alt="" />
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item container direction="column">
                    <Grid item>
                        <img src="" alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">

                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="" alt="" />
                    </Grid>
                </Grid>

                <Grid item container direction="column">
                    <Grid item>
                        <Typography variant="h4">

                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="" alt="" />
                    </Grid>
                </Grid>

                <Grid item container direction="column">
                    <Grid item>
                        <Typography variant="h4">

                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="" alt="" />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default CustomSoftware;
