import React from 'react';
import {Grid,Card,CardContent} from "@mui/material"
import {Link} from "react-router-dom"

export const Navi = () => {
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={1}>
                <Link to="/">
<Card>
    <CardContent>Home</CardContent>
</Card>
                </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

