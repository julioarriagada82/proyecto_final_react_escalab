import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const AnySearchMovies = ({ getData }) => {
  const [query, setQuery] = useState();

  const getFoods = () => {
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper">
        <Autocomplete
          id="AnySearchMovies"
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Food"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <IconButton onClick={() => getFoods()}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

AnySearchMovies.displayName = 'AnySearchMovies';

export default AnySearchMovies;
