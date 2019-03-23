import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

export class Success extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Success
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Thank you for your submission</h1>
        <p>You will get an email with furthur instructions</p>
      </Fragment>
    );
  }
}

export default Success;
