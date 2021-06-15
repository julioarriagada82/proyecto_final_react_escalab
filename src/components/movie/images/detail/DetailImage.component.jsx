import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Poster from "../poster/Poster.component";

const DetailImage = ({ poster_path, title }) => {
  return (
    <Grid item className="poster">
        <Poster poster_path={poster_path} title={title} />
    </Grid>
  );
};

export default DetailImage;

Poster.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
