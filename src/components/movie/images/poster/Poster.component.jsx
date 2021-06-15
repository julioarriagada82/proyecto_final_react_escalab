import React from 'react';
import PropTypes from 'prop-types';
import { PATH_IMAGE_w300 } from '../../../../constants/variables'
import placeholder from '../../../../assets/images/placeholder-poster.png';

const Poster = ({ poster_path, title }) => {
  return (
    <img
      src={poster_path ? `${PATH_IMAGE_w300}${poster_path}` : placeholder}
      alt={`poster of ${title}`}
      width='300px'
      height='450px'
    />
  );
};

export default Poster;

Poster.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
