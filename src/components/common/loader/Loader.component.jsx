import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Loader.styles.scss";

const Loader = () => (
  <div className="progress-bar">
    <CircularProgress size={100} />
  </div>
);

export default Loader;