import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import {
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Confirm User Data
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <br />
        <Button
          style={styles.button}
          onClick={this.continue}
          variant="contained"
          color="primary"
        >
          Confirm & Continue
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

export default FormUserDetails;
