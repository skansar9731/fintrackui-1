import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navi = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={1}>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/subscribers">
            <Button variant="contained">Subscribers</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/category">
            <Button variant="contained">Category</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/gender">
            <Button variant="contained">Gender</Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
