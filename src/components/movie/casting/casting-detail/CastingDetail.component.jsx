import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Poster from "../../images/poster/Poster.component";
import Paper from "@material-ui/core/Paper";

const CastingDetail = (props) => {
    const { casting } = props;
    const {
        profile_path,
        name,
        character,
        known_for_department,
    } = casting;

  return (
    <Grid item className="poster">
        <Paper className="paper">
            <h2>{name}</h2>
            <Poster poster_path={profile_path} title={name} />
            <p>
            <span className="characterDetail__item-type">Character:</span>{character}
            </p>
            <p>
            <span className="characterDetail__item-type">Know for departament:</span> {known_for_department}
            </p>
        </Paper>
    </Grid>
  );
};

export default CastingDetail;

Poster.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};