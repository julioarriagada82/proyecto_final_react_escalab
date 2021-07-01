import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";


const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <h1>
        <Link to="/">Movie App</Link>
      </h1>
    </Toolbar>
  </AppBar>
);

export default Header;