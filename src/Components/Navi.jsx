import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Navi = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={1}>
          <Link to="/">Home</Link>
        </Grid>
        <Grid>
          <Link to="/subscribers">Subscribers</Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
