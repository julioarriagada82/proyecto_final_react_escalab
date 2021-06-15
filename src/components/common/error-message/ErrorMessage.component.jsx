import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ErrorMessage = ({text}) => (
  <Grid item xs={12}>
    <Paper className="paper">
      <h2>{text}</h2>
    </Paper>
  </Grid>
);

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;