import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Occupation"
          placeholder="Enter Your Occupation"
          margin="normal"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          label="City"
          placeholder="Enter Your City"
          margin="normal"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          label="Bio"
          placeholder="Enter Your Bio"
          margin="normal"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
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
        <Button style={styles.button} onClick={this.back} variant="contained">
          Back
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

export default FormPersonalDetails;
