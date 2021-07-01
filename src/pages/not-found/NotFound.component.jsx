import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const NotFound = () => (
  <Grid item xs={12}>
    <Paper className="paper">
        <h2>Oops...</h2>
        <p>There was an error with that request</p>
    </Paper>
  </Grid>
);

NotFound.displayName = "NotFound";

export default NotFound;