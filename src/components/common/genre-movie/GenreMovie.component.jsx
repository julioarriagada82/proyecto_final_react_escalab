import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";

const GenreMovie = ({ getData,  onSelect = () => {}, selected }) => {
  return (
    <Grid item xs={12}>
      <Paper className="paper">
        {getData.map((movie) => {
          const { id, name } = movie;
          return (
            <ToggleButton
              key={name}
              id={id}
              value={name}
              selected={id === selected ? true : false}
              onClick={() => onSelect(id)}
            >
              {name}
            </ToggleButton>
          );
        })}
      </Paper>
    </Grid>
  );
};

GenreMovie.displayName = "GenreMovie";

export default GenreMovie;

GenreMovie.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string
};
