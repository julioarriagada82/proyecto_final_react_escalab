import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";


const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <h1>Movie App</h1>
    </Toolbar>
  </AppBar>
);

export default Header;