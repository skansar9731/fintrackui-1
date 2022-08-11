import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Display } from "../Display/Display";
import { AddGender } from "./AddGender";

export const Genders = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <h4>Gender Home</h4>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="genders" fields={["genName"]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddGender />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
