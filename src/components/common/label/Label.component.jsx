import React from "react";
import PropTypes from 'prop-types';

const Label = ({ text }) => <p>{text}</p>;

export default Label;

Label.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
  };