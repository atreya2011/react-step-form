import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="First Name"
          placeholder="Enter Your First Name"
          margin="normal"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Last Name"
          placeholder="Enter Your Last Name"
          margin="normal"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Email"
          placeholder="Enter Your Email"
          margin="normal"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <Button
          style={styles.button}
          onClick={this.continue}
          variant="contained"
          color="primary"
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
