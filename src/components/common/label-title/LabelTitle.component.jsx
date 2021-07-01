import React from "react";
import PropTypes from 'prop-types';

const LabelTitle = ({ text }) => <h3 className="mb-0">{text}</h3>;

export default LabelTitle;

LabelTitle.propTypes = {
    text: PropTypes.string.isRequired
  };
